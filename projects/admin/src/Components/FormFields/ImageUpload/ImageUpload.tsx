import React from 'react';
import { useField, useFormikContext } from 'formik';
import { UploadImage } from 'Utils';
import { Tabs, Tab } from 'react-bootstrap';
import { Image } from '@lab77store/database';
import { PreviewImage, ImageData } from './Components';
import { Input } from '../Input';
import { cloneDeep, get } from 'lodash';

import styles from './ImageUpload.module.scss';
import { useComponentDidMount } from 'Hooks';

interface Props {
	name: string;
	field: string;
}

export const ImageUpload: React.FC<Props> = ({ name, field }) => {
	const { values, setFieldValue } = useFormikContext();
	const [fieldData, , helper] = useField(name);
	const [imageField] = useField(field);
	const value: UploadImage[] = cloneDeep(fieldData.value);
	const image: Image = imageField.value;
	const index = Object.values(value).findIndex(i => i.field === field);
	useComponentDidMount(() => {
		const update: UploadImage[] = cloneDeep(fieldData.value);
		const updateIndex = Object.values(update).findIndex(i => i.field === field);
		update[updateIndex].desktopAlt = get(values, `${field}.desktop.alt`) || '';
		update[updateIndex].mobileAlt = get(values, `${field}.mobile.alt`) || '';
		setFieldValue(`${name}.${updateIndex}`, update[updateIndex], true);
	});
	return (
		<Tabs variant="tabs" defaultActiveKey="desktop">
			<Tab eventKey="desktop" title="Desktop">
				<div className={styles.uploadBox}>
					<div className="row">
						<div className="col-4">
							<div className="row">
								<div className="col-12">
									<PreviewImage file={image?.desktop?.file} />
								</div>
								<div className="col-12">
									<label className="btn btn-primary">
										Enviar Imagem
										<input
											style={{ display: 'none' }}
											type="file"
											onChange={event => {
												const file = event.target.files && event.target.files.item(0);
												if (file && index > -1) {
													value[index].desktop = file;
													helper.setValue(value);
												}
											}}
										/>
									</label>
								</div>
							</div>
						</div>
						<div className="col">{!!value[index].desktop && index >= 0 && <ImageData file={value[index].desktop} />}</div>
					</div>
					<div className="row">
						<div className="col">
							{index >= 0 && (
								<div className={styles.boxInput}>
									<Input.TextHorizontal placeholder="alt" name={`${name}.${index}.desktopAlt`} id={`${name}.${index}.desktopAlt`} />
								</div>
							)}
						</div>
					</div>
				</div>
			</Tab>
			<Tab eventKey="mobile" title="Mobile">
				<div className={styles.uploadBox}>
					<div className="row">
						<div className="col-4">
							<div className="row">
								<div className="col-12">
									<PreviewImage file={image?.mobile?.file} />
								</div>
								<div className="col-12">
									<label className="btn btn-primary">
										Enviar Imagem
										<input
											style={{ display: 'none' }}
											type="file"
											onChange={event => {
												const file = event.target.files && event.target.files.item(0);
												const indexImg = Object.values(value).findIndex(i => i.field === field);
												if (file && indexImg > -1) {
													value[indexImg].mobile = file;
													helper.setValue(value);
												}
											}}
										/>
									</label>
								</div>
							</div>
						</div>
						<div className="col">{!!value[index].mobile && index >= 0 && <ImageData file={value[index].mobile} />}</div>
					</div>
					<div className="row">
						<div className="col">
							{index >= 0 && (
								<div className={styles.boxInput}>
									<Input.TextHorizontal placeholder="alt" name={`${name}.${index}.mobileAlt`} id={`${name}.${index}.mobileAlt`} />
								</div>
							)}
						</div>
					</div>
				</div>
			</Tab>
		</Tabs>
	);
};
