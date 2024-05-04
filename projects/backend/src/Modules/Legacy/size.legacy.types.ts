import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'tamanhos' })
export class SizeLegacyModel extends Model<SizeLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'valor' })
	value: string;
}
