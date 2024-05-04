import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'enderecos' })
export class AddressLegacyModel extends Model<AddressLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'cep' })
	zipCode: string;

	@Column({ field: 'uf' })
	state: string;

	@Column({ field: 'cidade' })
	city: string;

	@Column({ field: 'bairro' })
	neighborhood: string;

	@Column({ field: 'rua' })
	street: string;

	@Column({ field: 'numero' })
	number: string;

	@Column({ field: 'complemento' })
	complement?: string;

	@Column({ field: 'created' })
	createdAt: string;

	@Column({ field: 'modified' })
	updatedAt: string;
}
