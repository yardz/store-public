import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '@App/Store/Reducers/AuthReducer';

interface Props {}
export const PersonalData: React.FC<Props> = () => {
	const user = useSelector(authSelector.user);
	if (!user) return null;
	const { personalData } = user;
	return (
		<section>
			<div>
				{personalData.firstName} {personalData.lastName}
			</div>
			<div>{personalData.email}</div>
			<div>{personalData.document}</div>
			<div>{personalData.phone}</div>
		</section>
	);
};
