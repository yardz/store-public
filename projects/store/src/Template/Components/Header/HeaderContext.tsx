import React, { useState } from 'react';

export interface HeaderContextMenu {
	mobile: boolean;
	search: boolean;
}

export const HeaderContext = React.createContext<{
	menu: HeaderContextMenu;
	setMenu: (menu: HeaderContextMenu) => void;
}>({
	menu: { mobile: false, search: false },
	setMenu: () => undefined,
});

export const HeaderProvider: React.FC = ({ children }) => {
	const [menu, setMenu] = useState<HeaderContextMenu>({ mobile: false, search: false });
	return <HeaderContext.Provider value={{ menu, setMenu }}>{children}</HeaderContext.Provider>;
};
