import React, { useEffect } from 'react';

import { Routes } from './Routes';

import { useLocation } from 'react-router-dom';
import { DashboardPaths } from 'Routes/DashboardRoutes';

import { CloudinaryContext } from 'cloudinary-react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const classes = ['app', 'sidebar-mini', 'rtl'];

const App: React.FC = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		const body = document.getElementsByTagName('BODY')[0];
		if (DashboardPaths.includes(pathname)) {
			classes.map(className => body.classList.add(className));
		} else {
			classes.map(className => body.classList.remove(className));
		}
	}, [pathname]);

	return (
		<>
			<CloudinaryContext cloudName="lab77">
				<Routes />
				<ToastContainer />
			</CloudinaryContext>
		</>
	);
};

export default App;
