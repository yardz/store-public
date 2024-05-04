import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CategoriesLegacyModel } from './categories.legacy.types';

@Table({ tableName: 'subcategorias' })
export class SubcategoriesLegacyModel extends Model<SubcategoriesLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'ref' })
	ref: string;

	@Column({ field: 'description' })
	description: string;

	@Column({ field: 'ordem' })
	order: number;

	@Column({ field: 'created' })
	createdAd: string;

	@Column({ field: 'modified' })
	updatedAt: string;

	@Column({ field: 'show_menu' })
	show_menu: boolean;

	@Column({ field: 'deleted' })
	deleted: boolean;

	@BelongsTo(() => CategoriesLegacyModel, { foreignKey: 'categoria_id' })
	category: CategoriesLegacyModel;

	@ForeignKey(() => CategoriesLegacyModel)
	@Column({ field: 'categoria_id' })
	categoryId: number;
}
