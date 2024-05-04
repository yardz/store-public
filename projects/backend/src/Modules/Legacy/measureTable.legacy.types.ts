import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductLegacyModel } from './product.legacy.types';

@Table({ tableName: 'medidas' })
export class MeasureTableLegacyModel extends Model<MeasureTableLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'url' })
	url: string;

	@Column({ field: 'created' })
	createdAt: string;

	@Column({ field: 'modified' })
	updatedAt: string;

	@Column({ field: 'deleted' })
	deleted: boolean;

	@HasMany(() => ProductLegacyModel, { foreignKey: 'measureTableId' })
	products: ProductLegacyModel[];
}
