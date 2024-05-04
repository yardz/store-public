/* eslint-disable @typescript-eslint/no-use-before-define */
import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { ImageCartLegacyModel as ImageCartVariations } from './image-cart.legacy.types';
import { VariationLegacyModel as Variation } from './variations.legacy.types';
import { SubcategoriesLegacyModel as Subcategories } from './subcategories.legacy.types';
import { MeasureTableLegacyModel } from './measureTable.legacy.types';

@Table({ tableName: 'produtos_subcategorias' })
export class ProductSubcategoriesLegacyModel extends Model<ProductSubcategoriesLegacyModel> {
	@ForeignKey(() => ProductLegacyModel)
	@Column({ field: 'produto_id' })
	productId: number;

	@ForeignKey(() => Subcategories)
	@Column({ field: 'subcategoria_id' })
	subcategoryId: number;
}

@Table({ tableName: 'produtos' })
export class ProductLegacyModel extends Model<ProductLegacyModel> {
	@Column({ field: 'id', autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ field: 'nome' })
	name: string;

	@Column({ field: 'ref' })
	ref: string;

	@Column({ field: 'descricao' })
	description?: string;

	@Column({ field: 'descricao_nova' })
	descriptionSecondLine?: string;

	@Column({ field: 'modelo' })
	modelMessage?: string;

	@Column({ field: 'lavagem' })
	wash?: string;

	@Column({ field: 'capa' })
	cover: string;

	@Column({ field: 'capahover' })
	hover: string;

	@Column({ field: 'principal' })
	mainPhoto: string;

	@Column({ field: 'publicado' })
	publish: boolean;

	@Column({ field: 'deleted' })
	deleted: boolean;

	@Column({ field: 'ordem' })
	order: number; // ordem que esse produto deve aparecer na listagem

	@Column({ field: 'medida_id' })
	measureTableId: number;

	@Column({ field: 'preco_antigo' })
	oldPrice: number;

	@Column({ field: 'descricao_fb' })
	facebookDescription: string;

	@Column({ field: 'categoria_fb' })
	categorieDescription: string;

	@Column({ field: 'botao_prevenda' })
	presaleButtom: string; // texto do botão da prevenda

	@Column({ field: 'frase_prevenda' })
	presaleText: string; // texto em baixo do botão da prevenda

	@Column({ field: 'mc' })
	mc: string; // esse campo é uma parada de imposto

	@Column({ field: 'ncm' })
	ncm: string; // esse campo é uma parada de imposto

	@Column({ field: 'home' })
	home: boolean; // se esse produto aparece ou não na hora

	@Column({ field: 'atelie' })
	atelie: boolean; // essa é uma flag

	@Column({ field: 'show_off' })
	displaySiteOff: boolean; // aparece no site off

	@Column({ field: 'show_loja' })
	displayStore: boolean; // aparece no site da loja (local, lá na lab)

	@Column({ field: 'show_site' })
	displaySite: boolean; // aparece no site

	@Column({ field: 'botao_prevenda' })
	btnPreSale: string;

	@Column({ field: 'frase_prevenda' })
	phasePreSale: string;

	@HasMany(() => Variation, { foreignKey: 'productId' })
	variations: Variation[];

	@HasMany(() => ImageCartVariations, { foreignKey: 'productId' })
	imagesCartVariations: ImageCartVariations[];

	@BelongsToMany(() => Subcategories, () => ProductSubcategoriesLegacyModel)
	subcategories: Subcategories[];

	@BelongsTo(() => MeasureTableLegacyModel, { foreignKey: 'measureTableId' })
	measureTable: MeasureTableLegacyModel;
}
