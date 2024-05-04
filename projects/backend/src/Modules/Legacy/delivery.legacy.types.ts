import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { AddressLegacyModel } from './address.legacy.types';

@Table({ tableName: 'entregas' })
export class DeliveryLegacyModel extends Model<DeliveryLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'sobrenome' })
	lastName: string;

	@Column({ field: 'forma' })
	method: string;

	@Column({ field: 'valor' })
	value: number;

	@Column({ field: 'created' })
	createdAt: string;

	@Column({ field: 'modified' })
	updatedAt: string;

	@ForeignKey(() => AddressLegacyModel)
	@Column({ field: 'endereco_id' })
	addressId: number;

	@BelongsTo(() => AddressLegacyModel, { foreignKey: 'endereco_id' })
	address: AddressLegacyModel;
}
