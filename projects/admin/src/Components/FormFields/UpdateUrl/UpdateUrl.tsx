import React, { useEffect } from 'react';

const urlify = require('urlify').create({
	addEToUmlauts: true,
	szToSs: true,
	toLower: true,
	spaces: '-',
	nonPrintable: '-',
	trim: true,
});

// tslint:disable-next-line: no-any
export const UpdateUrl: React.FC<{ value: string; field: string; setFieldValue: (field: string, value: any) => void }> = ({
	setFieldValue,
	field,
	value,
}) => {
	useEffect(() => {
		setFieldValue(field, urlify(value));
		// eslint-disable-next-line
	}, [value]);
	return null;
};
