import React from 'react';
import { FormFields } from 'Components';

export const BodyMeasurement: React.FC = () => {
	return (
		<div className="tile">
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Medidas</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal
						label="Ombro a ombro"
						placeholder="cm"
						name="bodyMeasurements.OpenShoulders"
						id="bodyMeasurements.OpenShoulders"
					/>
				</div>
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal label="Busto" placeholder="cm" name="bodyMeasurements.bust" id="bodyMeasurements.bust" />
				</div>
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal label="Tórax" placeholder="cm" name="bodyMeasurements.chest" id="bodyMeasurements.chest" />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal
						label="Cintura"
						placeholder="cm"
						name="bodyMeasurements.waistline"
						id="bodyMeasurements.waistline"
					/>
				</div>
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal label="Quadril" placeholder="cm" name="bodyMeasurements.hip" id="bodyMeasurements.hip" />
				</div>
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal
						label="Entrepernas"
						placeholder="cm"
						name="bodyMeasurements.crotchStrap"
						id="bodyMeasurements.crotchStrap"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal label="Colarinho" placeholder="cm" name="bodyMeasurements.collar" id="bodyMeasurements.collar" />
				</div>
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal
						label="Comprimento da manga"
						placeholder="cm"
						name="bodyMeasurements.sleeveLength"
						id="bodyMeasurements.sleeveLength"
					/>
				</div>
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal
						label="Comprimento da camisa"
						placeholder="cm"
						name="bodyMeasurements.shirtLength"
						id="bodyMeasurements.shirtLength"
					/>
				</div>
			</div>
		</div>
	);
};
