import React from 'react';

export const AttributesAndPrice: React.FC = () => {
	return null;
};

// import { Variation } from '@lab77store/database';
// import { useFormikContext } from 'formik';

// import { map } from 'lodash';
// import { FirebaseField, Input } from 'Components';

// interface Props {
// 	prefix: string;
// }

// export const AttributesAndPrice: React.FC<Props> = ({ prefix }) => {
// 	const {
// 		values: {
// 			variation: { attributes },
// 		},
// 	} = useFormikContext<{ variation: Variation }>();
// 	return (
// 		<div className="row">
// 			{map(attributes, (attribute, key) => (
// 				<div className="col-lg-3" key={key}>
// 					<div className="form-group row">
// 						<div className="col">
// 							<label>
// 								<FirebaseField path={`attributes/${attribute.attribute}/name`} />
// 							</label>
// 							<input className="form-control" disabled value={attribute.value} />
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 			<div className="col-lg-3">
// 				<Input.TextHorizontal
// 					type="number"
// 					label="Adicional de preço"
// 					placeholder="Adicional de preço"
// 					name={`${prefix}.additionalPrice`}
// 				/>
// 			</div>
// 		</div>
// 	);
// };
