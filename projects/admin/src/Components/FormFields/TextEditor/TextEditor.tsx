import React from 'react';
import { useField } from 'formik';

import { Editor } from '@tinymce/tinymce-react';
import classNames from 'classnames';

interface Props {
	id: string;
	name: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	height?: number;
}

export const TextEditor: React.FC<Props> = ({ id, name, label, required, height, disabled }) => {
	const [field, meta, helper] = useField({ id, name });
	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	return (
		<div className="form-group">
			{!!label && <label>{label}</label>}
			{!!required && <span style={{ color: '#FF0000' }}> *</span>}
			<Editor
				value={field.value}
				disabled={disabled}
				textareaName={field.name}
				init={{
					height: height || 400,
					menubar: false,
					plugins: [
						'advlist autolink lists link image charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime media table paste code help wordcount',
					],
					toolbar:
						'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
					paste_as_text: true,
				}}
				onEditorChange={content => {
					helper.setValue(content);
					helper.setTouched(true);
				}}
				onBlur={e => {
					field.onBlur(e);
					helper.setTouched(true);
				}}
			/>

			{/* Essa div fica aqui para marcar o campo como inválido  */}
			<div
				style={{ display: 'none' }}
				className={classNames({
					'form-control': true,
					'is-invalid': danger,
					'is-valid': success,
				})}
			/>
			{danger && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	);
};
