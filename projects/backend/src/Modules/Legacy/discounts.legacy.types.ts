import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'descontos' })
export class DiscountsLegacyModel extends Model<DiscountsLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'codigo' })
	code: string;

	@Column({ field: 'desconto_fixo' })
	fixedDiscount: number;

	@Column({ field: 'desconto_porcentagem' })
	percentDiscount: number;

	@Column({ field: 'quantidade' })
	quantity: number;

	@Column({ field: 'usos' })
	quantityUsed: number;

	@Column({ field: 'deleted' })
	deleted: boolean;

	@Column({ field: 'frete' })
	shipping: boolean;
}
