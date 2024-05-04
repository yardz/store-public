import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { ColorLegacyModel } from './color.legacy.types';
import { ModelLegacyModel } from './model.legacy.types';
import { SizeLegacyModel } from './size.legacy.types';

@Table({ tableName: 'matrizes' })
export class MatrixLegacyModel extends Model<MatrixLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'quantidade' })
	quantity: number;

	@Column({ field: 'modelo_id' })
	modelId: number;

	@Column({ field: 'cor_id' })
	colorId: number;

	@Column({ field: 'tamanho_id' })
	sizeId: number;

	@BelongsTo(() => ModelLegacyModel, { foreignKey: 'modelo_id' })
	model: ModelLegacyModel;

	@BelongsTo(() => ColorLegacyModel, { foreignKey: 'cor_id' })
	color: ColorLegacyModel;

	@BelongsTo(() => SizeLegacyModel, { foreignKey: 'tamanho_id' })
	size: SizeLegacyModel;
}
