/* eslint-disable react/no-danger */
import classNames from 'classnames';
import React from 'react';

import styles from './TextContent.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	text?: string;
}

export const TextContent: React.FC<Props> = ({ text, className, ...props }) => {
	if (!text) return null;
	return <div {...props} className={classNames(className, styles.TextContent)} dangerouslySetInnerHTML={{ __html: text }} />;
};
