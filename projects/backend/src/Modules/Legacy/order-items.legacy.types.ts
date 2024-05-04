import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { VariationLegacyModel as Variation } from './variations.legacy.types';
import { OrderLegacyModel as Order } from './order.legacy.types';

@Table({ tableName: 'itens' })
export class OrderItemsLegacyModel extends Model<OrderItemsLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@ForeignKey(() => Order)
	@Column({ field: 'venda_id' })
	orderId: number;

	@ForeignKey(() => Variation)
	@Column({ field: 'variacao_id' })
	variationId: number;

	@Column({ field: 'quantidade' })
	quantity: string;

	@Column({ field: 'valor' })
	value: number;

	@Column({ field: 'observacao' })
	note: string;

	@Column({ field: 'devolvido' })
	returned: boolean;

	@Column({ field: 'queimados' })
	burned: boolean;

	@Column({ field: 'produzido' })
	produced: boolean;

	@Column({ field: 'origem_id' })
	origemId: number;

	@Column({ field: 'entrega' })
	delivery: string;

	@Column({ field: 'horario' })
	hour: string;

	@BelongsTo(() => Variation, { foreignKey: 'variacao_id' })
	variation: Variation;
}
