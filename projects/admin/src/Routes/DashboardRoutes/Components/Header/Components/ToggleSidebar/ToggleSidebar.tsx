import React, { useEffect } from 'react';

import { useToggle } from 'Hooks';

export const ToggleSidebar: React.FC = () => {
	const [compact, toggleSidebar] = useToggle(false);
	useEffect(() => {
		const body = document.getElementsByTagName('BODY')[0];
		if (compact) {
			body.classList.add('sidenav-toggled');
		} else {
			body.classList.remove('sidenav-toggled');
		}
	}, [compact]);

	return <span className="app-sidebar__toggle link" onClick={() => toggleSidebar()} data-toggle="sidebar" aria-label="Hide Sidebar" />;
};
