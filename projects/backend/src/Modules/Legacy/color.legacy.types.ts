import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cores' })
export class ColorLegacyModel extends Model<ColorLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'valor' })
	value: string;
}
