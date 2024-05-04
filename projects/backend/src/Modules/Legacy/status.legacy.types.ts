import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'status' })
export class StatusLegacyModel extends Model<StatusLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'ordem' })
	order: number;
}
