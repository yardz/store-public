import { FormFields } from 'Components';
import React from 'react';

interface Props {
	prefix: string;
}

export const FacebookCard: React.FC<Props> = ({ prefix }) => {
	const availabilityOptions = [
		{ label: 'Em estoque', value: 'in stock' },
		{ label: 'Disponível para encomenda', value: 'available for order' },
		{ label: 'Pedido antecipado', value: 'preorder' },
		{ label: 'Fora de estoque', value: 'out of stock' },
		{ label: 'Interrompido', value: 'discontinued' },
	];

	return (
		<>
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Facebook Card</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.TextHorizontal label="Titulo" placeholder="Nome do produto" name={`${prefix}.title`} id={`${prefix}.title`} />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.TextArea id={`${prefix}.description`} name={`${prefix}.description`} label="Descrição" rows={5} />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<FormFields.Input.SelectHorizontal
						required
						label="Gênero"
						id={`${prefix}.gender`}
						name={`${prefix}.gender`}
						placeholder="Selecione um genero"
						options={[
							{ label: 'Masculino', value: 'male' },
							{ label: 'Feminino', value: 'female' },
							{ label: 'Unisex', value: 'unisex' },
						]}
					/>
				</div>
				<div className="col-lg-6">
					<FormFields.Input.SelectHorizontal
						label="Disponibilidade"
						id={`${prefix}.availability`}
						name={`${prefix}.availability`}
						placeholder="Selecione uma disponibilidade"
						options={availabilityOptions}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.SelectHorizontal
						required
						label="Material"
						id={`${prefix}.material`}
						name={`${prefix}.material`}
						placeholder="Selecione um material"
						options={[
							{ label: 'Algodão', value: 'cotton' },
							{ label: 'Jeans', value: 'denim' },
							{ label: 'Couro', value: 'leather' },
						]}
					/>
				</div>
			</div>
		</>
	);
};
