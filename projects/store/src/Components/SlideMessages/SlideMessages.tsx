import React from 'react';
import { FooterMessages } from '@lab77store/domain';
import { ShowOnDevice } from '../ShowOnDevice';
import dynamic from 'next/dynamic';

const AlertFooter = dynamic(() => import('./AlertFooter').then(mod => mod.AlertFooter));

interface Props {
	messages?: FooterMessages;
}

export const SlideMessages: React.FC<Props> = ({ messages }) => {
	if (!messages) {
		return null;
	}

	return (
		<>
			<ShowOnDevice.ShowMobile>
				<AlertFooter messages={messages?.mobile || []} />
			</ShowOnDevice.ShowMobile>
			<ShowOnDevice.ShowDesktop>
				<AlertFooter messages={messages?.desktop || []} />
			</ShowOnDevice.ShowDesktop>
		</>
	);
};
