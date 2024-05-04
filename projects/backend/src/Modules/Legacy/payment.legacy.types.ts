import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { StatusLegacyModel } from './status.legacy.types';

@Table({ tableName: 'pagamentos' })
export class PaymentLegacyModel extends Model<PaymentLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'metodo' })
	method: string;

	@Column({ field: 'payerid' })
	payerId: string;

	@Column({ field: 'paymentid' })
	paymentId: string;

	@Column({ field: 'pagarmeid' })
	pagarmeId: number;

	@Column({ field: 'boleto_url' })
	billingReceiptUrl: string;

	@Column({ field: 'boleto_codigobarras' })
	barCode: string;

	@Column({ field: 'pagarme_tid' })
	pagarmeTId: string;

	@Column({ field: 'pagarme_nsu' })
	pagarmeNsu: string;

	@Column({ field: 'acquirer_response_code' })
	acquirerResponseCode: string;

	@Column({ field: 'acquirer_name' })
	acquirerName: string;

	@Column({ field: 'authorization_code' })
	authorizationCode: string;

	@Column({ field: 'parcelas' })
	installments: number;

	@Column({ field: 'venda_original' })
	originalSale?: string;

	@Column({ field: 'created' })
	createdAt: string;

	@Column({ field: 'modified' })
	updatedAt: string;

	@ForeignKey(() => StatusLegacyModel)
	@Column({ field: 'status_id' })
	statusId: number;

	@BelongsTo(() => StatusLegacyModel, { foreignKey: 'status_id' })
	status: StatusLegacyModel;
}
