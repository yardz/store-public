import React from 'react';
import classNames from 'classnames';

import { ThemeColors } from 'Types';
interface Props {
	type: ThemeColors; //warning , info, primary, danger
	icon?: JSX.Element;
	labelTitle: string;
	labelInfo: string;
	backgroundColor?: boolean;
}

export const Widget: React.FC<Props> = ({ type, icon, labelTitle, labelInfo, backgroundColor }) => {
	return (
		<div
			className={classNames({
				'widget-small': true,
				'coloured-icon': !!backgroundColor,
				type,
			})}>
			{!!icon ? icon : <img src="" alt="" height="85" />}
			<div className="info">
				<h4>{labelTitle}</h4>
				<p>
					<b>{labelInfo}</b>
				</p>
			</div>
		</div>
	);
};
