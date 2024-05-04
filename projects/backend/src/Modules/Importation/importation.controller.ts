import { Body, Controller, ParseArrayPipe, Post, Logger } from '@nestjs/common';

import * as ARGS from './products-importation.args';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import {
	ProductsImportationService,
	OrdersImportationService,
	CustumersImportationService,
	PaymentsImportationService,
	CategoriesImportationService,
} from './services';

@Controller('importation')
export class ImportationController {
	constructor(
		private readonly productsImportationService: ProductsImportationService,
		private readonly ordersImportationService: OrdersImportationService,
		private readonly custumersImportationService: CustumersImportationService,
		private readonly categoriesImportationService: CategoriesImportationService,
		private readonly paymentsImportationService: PaymentsImportationService,
		private readonly logger: Logger,
	) {
		this.logger.setContext('ImportationController');
	}

	@ApiExcludeEndpoint()
	@Post('/categories')
	async saveCategories() {
		return this.categoriesImportationService.save();
	}

	@ApiExcludeEndpoint()
	@Post('/products')
	async saveProduct(@Body(new ParseArrayPipe({ items: ARGS.ProductsImport })) products: ARGS.ProductsImport[]) {
		return this.productsImportationService.save(products);
	}

	@ApiExcludeEndpoint()
	@Post('/products/all')
	async saveAllProduct() {
		return this.productsImportationService.allProducts();
	}

	@ApiExcludeEndpoint()
	@Post('/products/fix')
	async updateVariations() {
		// return this.productsImportationService.fixProduct('60a32fe0f6286850378af8e9');
		return this.productsImportationService.fixAllProducts();
	}

	@ApiExcludeEndpoint()
	@Post('/products/categories')
	async updateProductCategories() {
		return this.productsImportationService.updateProductsCategory();
	}

	@ApiExcludeEndpoint()
	@Post('/orders')
	async saveOrders() {
		return this.ordersImportationService.importOrders();
	}

	@ApiExcludeEndpoint()
	@Post('/custumers')
	async saveCustumers() {
		return this.custumersImportationService.importCustumers();
	}

	@ApiExcludeEndpoint()
	@Post('/custumers/update')
	async updatePersonalDataCustumers() {
		return this.custumersImportationService.updatePersonalData();
	}

	// /importation/custumers/removeAll
	@ApiExcludeEndpoint()
	@Post('/custumers/removeAll')
	async removeAllCustumers() {
		return this.custumersImportationService.removeAllCustumers();
	}

	// /importation/custumers/removeAll
	@ApiExcludeEndpoint()
	@Post('/custumers/password')
	async resetAllCustumersPassword() {
		return this.custumersImportationService.resetAllCustumersPassword();
	}

	@ApiExcludeEndpoint()
	@Post('/payments')
	async savePayments() {
		return this.paymentsImportationService.importPayments();
	}

	// Facilitador para importar tudo na ordem correta
	@ApiExcludeEndpoint()
	@Post('/cleanInstall')
	async all() {
		// console.log('removeAllCustumers');
		await this.removeAllCustumers();
		// console.log('saveCategories');
		await this.saveCategories();
		// console.log('allProducts and importCustumers');
		await Promise.all([this.productsImportationService.allProducts(), this.custumersImportationService.importCustumers()]);
		// console.log('importOrders');
		await this.ordersImportationService.importOrders();
		// console.log('importPayments');
		await this.paymentsImportationService.importPayments();
	}

	@ApiExcludeEndpoint()
	@Post('/incremental')
	async incremental() {
		// console.log('removeAllCustumers');
		// await this.removeAllCustumers();
		// console.log('importCustumers');
		await this.custumersImportationService.importCustumers();
		// console.log('allProducts');
		// await this.productsImportationService.allProducts();
		// console.log('fix Products');
		// await this.productsImportationService.fixAllProducts();
		// console.log('importOrders');
		await this.ordersImportationService.importOrders();
		// console.log('importPayments');
		await this.paymentsImportationService.importPayments();
	}
}
