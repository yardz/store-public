import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { CustumerLegacyModel as Custumer } from './custumer.legacy.types';
import { DeliveryLegacyModel as Delivery } from './delivery.legacy.types';
import { DiscountsLegacyModel as Discounts } from './discounts.legacy.types';
import { OrderItemsLegacyModel as OrderItem } from './order-items.legacy.types';
import { PaymentLegacyModel as Payment } from './payment.legacy.types';
import { StatusLegacyModel as Status } from './status.legacy.types';

@Table({ tableName: 'vendas' })
export class OrderLegacyModel extends Model<OrderLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'data' })
	date: string;

	@Column({ field: 'pago' })
	paidOut: string;

	@Column({ field: 'valor_desconto' })
	valueDiscount: number;

	@Column({ field: 'valor_itens' })
	valueItems: number;

	@Column({ field: 'valor_total' })
	totalAmount: number;

	@Column({ field: 'cpf' })
	cpf: string;

	@Column({ field: 'codigo_rastreio' })
	trackingCode: string;

	@Column({ field: 'embalagens' })
	packages: number;

	@Column({ field: 'processada' })
	processedSale: boolean;

	@Column({ field: 'embalado' })
	packed: boolean;

	@Column({ field: 'enviado' })
	sent: boolean;

	@ForeignKey(() => Discounts)
	@Column({ field: 'desconto_id' })
	discountId: number;

	@ForeignKey(() => Custumer)
	@Column({ field: 'cliente_id' })
	clientId: number;

	@ForeignKey(() => Status)
	@Column({ field: 'status_id' })
	statusId: number;

	@ForeignKey(() => Payment)
	@Column({ field: 'pagamento_id' })
	paymentId: number;

	@ForeignKey(() => Delivery)
	@Column({ field: 'entrega_id' })
	deliveryId: number;

	@Column({ field: 'nota' })
	internalNote: string;

	@Column({ field: 'data_envio' })
	shippingDate: string;

	@Column({ field: 'origem' })
	origem: string;

	@Column({ field: 'observacao' })
	note?: string;

	@Column({ field: 'codigo_bling' })
	blingCode: string;

	@Column({ field: 'codigo_bling_idpedido' })
	blingCodeOrderId: string;

	@Column({ field: 'created' })
	createdAt: string;

	@Column({ field: 'modified' })
	updatedAt: string;

	@BelongsTo(() => Custumer, { foreignKey: 'cliente_id' })
	client: Custumer;

	@BelongsTo(() => Status, { foreignKey: 'status_id' })
	status: Status;

	@BelongsTo(() => Delivery, { foreignKey: 'entrega_id' })
	delivery: Delivery;

	@BelongsTo(() => Payment, { foreignKey: 'pagamento_id' })
	payment: Payment;

	@HasMany(() => OrderItem, { foreignKey: 'orderId' })
	items: OrderItem[];

	@BelongsTo(() => Discounts, { foreignKey: 'desconto_id' })
	discount: Discounts;
}
