import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'modelos' })
export class ModelLegacyModel extends Model<ModelLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'valor' })
	value: string;
}
