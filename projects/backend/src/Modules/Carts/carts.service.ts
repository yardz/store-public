import { PreconditionFailedException, Injectable, Logger } from '@nestjs/common';
import firebase from 'firebase-admin';
import { ProductsService } from '@Modules/Products/products.service';

import { CartItem } from '@lab77store/database';
import { Product, Variation } from '@lab77store/domain';
import { map, compact, sortBy } from 'lodash';

import NP from 'number-precision';

@Injectable()
export class CartsService {
	constructor(private readonly productsService: ProductsService, private readonly logger: Logger) {
		this.logger.setContext('CartsService');
	}

	clear({ uid }: { uid: string }) {
		return firebase.database().ref(`carts/${uid}`).remove();
	}

	async updateCartItems({ uid }: { uid: string }): Promise<{ update: CartItem[]; removed: CartItem[] }> {
		const cartItems: CartItem[] = (await firebase.database().ref(`carts/${uid}/items`).once('value')).val();
		const items = compact(map(cartItems || [], i => i));
		if (!items.length) {
			return { removed: [], update: [] };
		}
		const products = await this.productsService.find({ filter: { _id: { $in: items.map(i => i.productId) } } });

		const removed: CartItem[] = [];
		const update: CartItem[] = [];
		const currentItems: CartItem[] = [];

		for (const item of items) {
			const product = products.find(p => p._id.toString() === item.productId);
			const variation = product?.variations.find(v => v._id.toString() === item.variationId);
			if (!product || !variation) {
				this.logger.warn({ message: 'Um item inválido foi removido do carrinho automaticamente', uid, item, product, variation });
				removed.push(item);
				// eslint-disable-next-line no-continue
				continue;
			}
			const currentPrice = NP.plus(product.price, variation.additionalPrice);
			if (currentPrice !== item.price) {
				this.logger.warn({
					message: 'Um item com valor incorreto foi atualizado automaticamente',
					uid,
					item,
					oldPrice: item.price,
					currentPrice,
				});
				update.push({ ...item, price: currentPrice });
				// eslint-disable-next-line no-continue
				continue;
			}
			currentItems.push(item);
		}
		await firebase
			.database()
			.ref(`carts/${uid}/items`)
			.set(sortBy([...update, ...currentItems], 'name'));
		return { removed, update };
	}

	async getCartItems({ uid }: { uid: string }): Promise<{ product: Product; variation: Variation; quantity: number }[]> {
		const cartItems: CartItem[] = (await firebase.database().ref(`carts/${uid}/items`).once('value')).val();

		const items = compact(map(cartItems || [], i => i));
		if (!items.length) {
			return [];
		}
		const products = await this.productsService.find({ filter: { _id: { $in: items.map(i => i.productId) } } });
		return items.map(item => {
			const product = products.find(p => p._id.toString() === item.productId);
			const variation = product?.variations.find(v => v._id.toString() === item.variationId);
			if (!product || !variation) {
				this.logger.warn({ message: 'Item inválido no carrinho', uid, item, product, variation });
				throw new PreconditionFailedException({
					message: `Invalid cart item`,
					displayMessage: `O item "${item.name}" não está mais disponível.`,
				});
			}

			if (NP.plus(product.price, variation.additionalPrice) !== item.price) {
				this.logger.warn({
					message: 'Item no carrinho com valor incorreto',
					uid,
					item,
					itemPrice: item.price,
					productPrice: product.price,
					variationAdditionalPrice: variation.additionalPrice,
				});
				throw new PreconditionFailedException({
					message: `Invalid price on item`,
					displayMessage: `O item "${item.name}" está com preço desatualizado.`,
				});
			}

			if (item.quantity > variation.stock.free) {
				this.logger.warn({
					message: 'Quantidade de itens no carrinho acima do estoque',
					uid,
					item,
					itemPrice: item.price,
					productPrice: product.price,
					variationAdditionalPrice: variation.additionalPrice,
				});

				throw new PreconditionFailedException({
					message: 'maximum item quantity exceeded',
					product: product._id,
					variation: variation._id,
					quantity: item.quantity,
					stock: variation.stock.free,
					displayMessage: `O produto ${product.name} não está mais em estoque. Por favor, tente escolher outras caracterísitcas para o produto`,
				});
			}

			return {
				product,
				variation,
				quantity: item.quantity,
			};
		});
	}
}
