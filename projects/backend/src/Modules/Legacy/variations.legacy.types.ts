import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { MatrixLegacyModel } from './matrix.legacy.types';
import { ProductLegacyModel as Product, ProductLegacyModel } from './product.legacy.types';

@Table({ tableName: 'variacoes' })
export class VariationLegacyModel extends Model<VariationLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'valor' })
	price: number;

	@Column({ field: 'quantidade' })
	quantity: number;

	@ForeignKey(() => Product)
	@Column({ field: 'produto_id' })
	productId: number;

	@Column({ field: 'pre_venda' })
	preSale: boolean;

	@Column({ field: 'adicional_prevenda_dias' })
	additionalDaysDelivery: number;

	@Column({ field: 'deleted' })
	deleted: boolean;

	@BelongsTo(() => MatrixLegacyModel, { foreignKey: 'matriz_id' })
	matrix: MatrixLegacyModel;

	@BelongsTo(() => ProductLegacyModel, { foreignKey: 'produto_id' })
	product: ProductLegacyModel;
}
