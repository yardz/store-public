import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { AddressLegacyModel as Address } from './address.legacy.types';

@Table({ tableName: 'clientes' })
export class CustumerLegacyModel extends Model<CustumerLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'sobrenome' })
	lastName: string;

	@Column({ field: 'email' })
	email: string;

	@Column({ field: 'senha' })
	password: string;

	@Column({ field: 'telefone' })
	phone: string;

	@Column({ field: 'celular' })
	cellphone: string;

	@Column({ field: 'cpf' })
	cpf: string;

	@Column({ field: 'rg' })
	IdCard: string;

	@Column({ field: 'sexo' })
	sex: string;

	@Column({ field: 'aniversario' })
	birthday: string;

	@Column({ field: 'newsletter' })
	newsletter: boolean;

	@Column({ field: 'deleted' })
	deleted: boolean;

	@Column({ field: 'endereco_id' })
	addressId: number;

	@BelongsTo(() => Address, { foreignKey: 'endereco_id' })
	address: Address;
}
