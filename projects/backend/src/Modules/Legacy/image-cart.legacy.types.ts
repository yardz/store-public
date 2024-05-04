import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ProductLegacyModel as Product } from './product.legacy.types';

@Table({ tableName: 'imagemcarrinhos' })
export class ImageCartLegacyModel extends Model<ImageCartLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'img' })
	img: string;

	@Column({ field: 'cor_id' })
	colorId: number;

	@ForeignKey(() => Product)
	@Column({ field: 'produto_id' })
	productId: number;
}
