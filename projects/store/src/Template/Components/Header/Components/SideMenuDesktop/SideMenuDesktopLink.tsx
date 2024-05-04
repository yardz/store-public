import React from 'react';

import Link from 'next/link';

interface Props {
	text: string;
	href: string;
	target?: string;
}

export const MenuMobileLink: React.FC<Props> = ({ text, href, target }) => (
	<Link href={href}>
		<a className="dropdown-item" target={target}>
			{text}
		</a>
	</Link>
);
