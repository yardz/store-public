import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { SubcategoriesLegacyModel } from './subcategories.legacy.types';

@Table({ tableName: 'categorias' })
export class CategoriesLegacyModel extends Model<CategoriesLegacyModel> {
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

	@HasMany(() => SubcategoriesLegacyModel, { foreignKey: 'categoryId' })
	subcategories: SubcategoriesLegacyModel[];
}
