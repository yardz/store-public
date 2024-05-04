import { HttpService, Injectable, Logger } from '@nestjs/common';
import to from 'await-to-js';
import { CategoriesService } from '@Modules/Categories/categories.service';
import { ProductsService } from '@Modules/Products/products.service';
import { CategorySmartHint } from './smartHint.types';
import { mapProduct } from './functions/mapProduct';
import { mapCategory } from './functions/mapCategory';
import { chunk } from 'lodash';
import { AxiosResponse } from 'axios';

@Injectable()
export class SmartHintService {
	private baseUrlSmartHint: string;
	private token: string;

	constructor(
		private readonly logger: Logger,
		private readonly categoriesService: CategoriesService,
		private readonly productsService: ProductsService,
		private httpService: HttpService,
	) {
		this.logger.setContext('SmartHintService');
		this.token = process.env.SMART_HINT_TOKEN || '';
		this.baseUrlSmartHint = 'https://api.smarthint.co/api';
	}

	private async getCategoriesList(): Promise<CategorySmartHint[]> {
		const categories = await this.categoriesService.find({ filter: {} });
		const categoriesSmartHint = categories.map(category => mapCategory({ category, categories }));
		return categoriesSmartHint;
	}

	private async startProductProcess(): Promise<string> {
		const params = { token: this.token };
		const resposne = await this.httpService.get(`${this.baseUrlSmartHint}/Process/ProductProcessStart`, { params }).toPromise();
		return resposne.headers['sh-import-product-process-id'];
	}

	private async finishProductProcess({ processId, success, type }: { processId: string; success: boolean; type: 'partial' | 'total' }) {
		const params = { token: this.token, processId, success: success ? 'true' : 'false', moduleResponse: type === 'total' ? 200 : 206 };
		const [error] = await to(this.httpService.get(`${this.baseUrlSmartHint}/Process/ProductProcessFinish`, { params }).toPromise());
		if (!!error) {
			this.logger.error({ message: 'Erro ao tentar finalizar o processo de proditos', processId, success, type });
			throw error;
		}
	}

	async product(productId: string) {
		const categories = await this.getCategoriesList();
		const product = await this.productsService.findOne({ _id: productId });
		if (!product) {
			this.logger.error({ message: 'Produto não existe', productId });
			return false;
		}
		const productSmartHint = mapProduct({ product, categories });

		const headers = { Authorization: this.token };
		const [error, resposne] = await to(
			this.httpService.post(`${this.baseUrlSmartHint}/Product`, productSmartHint, { headers }).toPromise(),
		);
		if (!!error || !resposne) {
			this.logger.error('Erro ao tentar salvar a lista de produtos');
			return false;
		}
		return resposne.status === 200;
	}

	async productList() {
		const processId = await this.startProductProcess();

		const categories = await this.getCategoriesList();
		const products = await this.productsService.find({ filter: { active: true } });

		const productsListSmartHint = products.map(product => mapProduct({ product, categories }));

		const chunkItens = chunk(productsListSmartHint, 20);
		const promisses: Promise<AxiosResponse>[] = [];

		const headers = { Authorization: this.token };
		for (const list of chunkItens) {
			promisses.push(this.httpService.post(`${this.baseUrlSmartHint}/ProductList`, list, { headers }).toPromise());
		}
		const [error] = await to(Promise.all(promisses));

		await this.finishProductProcess({ processId, success: !error, type: 'total' });

		if (!!error) {
			this.logger.error('Erro ao tentar salvar a lista de produtos');
			return false;
		}
		return true;
	}

	async deleteProduct(productId: string) {
		const params = { id: productId };

		const headers = { Authorization: this.token };
		const [, resposne] = await to(this.httpService.get(`${this.baseUrlSmartHint}/Product`, { params, headers }).toPromise());
		if (!resposne) {
			this.logger.error({ message: 'Erro ao tentar excluir o produto', productId });
			return false;
		}
		return resposne.status === 200;
	}

	async order() {
		// pode ser feito no front, por hora é feito somente lá. Talvez seja interessante passar isso para o backend
	}

	async category(categoryId: string) {
		const categories = await this.getCategoriesList();
		const category = categories.find(c => c.CategoryId === categoryId);
		if (!category) {
			this.logger.error({ message: 'Categoria não existe', categoryId });
			return false;
		}

		const headers = { Authorization: this.token };
		const [error, resposne] = await to(this.httpService.post(`${this.baseUrlSmartHint}/Category`, category, { headers }).toPromise());
		if (!!error || !resposne) {
			this.logger.error({ message: 'Erro ao tentar salvar a lista de categorias', categories });
			return false;
		}
		return resposne.status === 200;
	}

	async categoryList() {
		const categories = await this.getCategoriesList();
		const headers = { Authorization: this.token };
		const [error, resposne] = await to(this.httpService.post(`${this.baseUrlSmartHint}/CategoryList`, categories, { headers }).toPromise());
		if (!!error || !resposne) {
			this.logger.error({ message: 'Erro ao tentar salvar a lista de categorias', categories, error });
			return false;
		}
		return resposne.status === 200;
	}
}
