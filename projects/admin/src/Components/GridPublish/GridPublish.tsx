import React from 'react';
import { Publish } from '@lab77store/database';
import classNames from 'classnames';
import { Notifications } from 'Utils';

interface Props {
	_id: string;
	publish: Publish;
	edit: (update: { _id: string; field: 'mobile' | 'desktop' | 'store' }) => Promise<void>;
}

export const GridPublish: React.FC<Props> = ({ publish, _id, edit }) => {
	return (
		<>
			<span
				className="h5"
				onClick={() => {
					edit({ _id, field: 'store' })
						.then(() => Notifications.success('Item alterado com sucesso!'))
						.catch(() => Notifications.error('Ocorreu um erro ao tentar alterar este item...'));
				}}>
				<i className={classNames({ 'fa fa-home': true, 'text-primary': publish.store })} />
			</span>
			&nbsp; &nbsp;
			<span
				className="h5"
				onClick={() => {
					edit({ _id, field: 'mobile' })
						.then(() => Notifications.success('Item alterado com sucesso!'))
						.catch(() => Notifications.error('Ocorreu um erro ao tentar alterar este item...'));
				}}>
				<i className={classNames({ 'fa fa-mobile': true, 'text-primary': publish.mobile })} />
			</span>
			&nbsp; &nbsp;
			<span
				className="h6"
				onClick={() => {
					edit({ _id, field: 'desktop' })
						.then(() => Notifications.success('Item alterado com sucesso!'))
						.catch(() => Notifications.error('Ocorreu um erro ao tentar alterar este item...'));
				}}>
				<i className={classNames({ 'fa fa-desktop': true, 'text-primary': publish.desktop })} />
			</span>
		</>
	);
};
