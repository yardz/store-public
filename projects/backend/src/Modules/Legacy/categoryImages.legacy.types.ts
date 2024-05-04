import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CategoriesLegacyModel as Category } from './categories.legacy.types';
import { ProductLegacyModel as Product } from './product.legacy.types';

@Table({ tableName: 'imagens_categorias' })
export class CategoryImagesLegacyModel extends Model<CategoryImagesLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'img' })
	image?: string;

	@Column({ field: 'img_hover' })
	hover?: string;

	@ForeignKey(() => Product)
	@Column({ field: 'produto_id' })
	productId: number;

	@BelongsTo(() => Product, { foreignKey: 'produto_id' })
	product: Product;

	@ForeignKey(() => Category)
	@Column({ field: 'produto_id' })
	categoryId: number;

	@BelongsTo(() => Category, { foreignKey: 'categoria_id' })
	category: Category;
}
