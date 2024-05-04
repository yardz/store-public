import React from 'react';

import { ToggleSidebar } from './Components';
import { ReactComponent as Logo } from 'Images/logo.svg';
import firebase from 'firebase/app';

export const Header: React.FC = () => {
	return (
		<>
			{/* <!-- Navbar--> */}
			<header className="app-header">
				<Logo className="app-header__logo link" style={{ height: '51px', padding: '8px' }} />
				{/* <!-- Sidebar toggle button--> */}
				<ToggleSidebar />
				{/* <!-- Navbar Right Menu--> */}
				<ul className="app-nav">
					{/* <!--Notification Menu--> */}
					<li className="dropdown">
						<span className="app-nav__item link" data-toggle="dropdown" aria-label="Show notifications">
							<i className="fa fa-bell-o fa-lg" />
						</span>
						<ul className="app-notification dropdown-menu dropdown-menu-right">
							<li className="app-notification__title">You have 4 new notifications.</li>
							<div className="app-notification__content">
								<li>
									<span className="app-notification__item">
										<span className="app-notification__icon">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x text-primary" />
												<i className="fa fa-envelope fa-stack-1x fa-inverse" />
											</span>
										</span>
										<div>
											<p className="app-notification__message">Lisa sent you a mail</p>
											<p className="app-notification__meta">2 min ago</p>
										</div>
									</span>
								</li>
								<li>
									<span className="app-notification__item link">
										<span className="app-notification__icon">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x text-danger" />
												<i className="fa fa-hdd-o fa-stack-1x fa-inverse" />
											</span>
										</span>
										<div>
											<p className="app-notification__message">Mail server not working</p>
											<p className="app-notification__meta">5 min ago</p>
										</div>
									</span>
								</li>
								<li>
									<span className="app-notification__item link">
										<span className="app-notification__icon">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x text-success" />
												<i className="fa fa-money fa-stack-1x fa-inverse" />
											</span>
										</span>
										<div>
											<p className="app-notification__message">Transaction complete</p>
											<p className="app-notification__meta">2 days ago</p>
										</div>
									</span>
								</li>
								<div className="app-notification__content">
									<li>
										<span className="app-notification__item link">
											<span className="app-notification__icon">
												<span className="fa-stack fa-lg">
													<i className="fa fa-circle fa-stack-2x text-primary" />
													<i className="fa fa-envelope fa-stack-1x fa-inverse" />
												</span>
											</span>
											<div>
												<p className="app-notification__message">Lisa sent you a mail</p>
												<p className="app-notification__meta">2 min ago</p>
											</div>
										</span>
									</li>
									<li>
										<span className="app-notification__item link">
											<span className="app-notification__icon">
												<span className="fa-stack fa-lg">
													<i className="fa fa-circle fa-stack-2x text-danger" />
													<i className="fa fa-hdd-o fa-stack-1x fa-inverse" />
												</span>
											</span>
											<div>
												<p className="app-notification__message">Mail server not working</p>
												<p className="app-notification__meta">5 min ago</p>
											</div>
										</span>
									</li>
									<li>
										<span className="app-notification__item link">
											<span className="app-notification__icon">
												<span className="fa-stack fa-lg">
													<i className="fa fa-circle fa-stack-2x text-success" />
													<i className="fa fa-money fa-stack-1x fa-inverse" />
												</span>
											</span>
											<div>
												<p className="app-notification__message">Transaction complete</p>
												<p className="app-notification__meta">2 days ago</p>
											</div>
										</span>
									</li>
								</div>
							</div>
							<li className="app-notification__footer">
								<span className="link">See all notifications.</span>
							</li>
						</ul>
					</li>
					{/* <!-- User Menu--> */}
					<li className="dropdown">
						<span className="app-nav__item link" data-toggle="dropdown" aria-label="Open Profile Menu">
							<i className="fa fa-user fa-lg" />
						</span>
						<ul className="dropdown-menu settings-menu dropdown-menu-right">
							<li>
								<span className="dropdown-item link">
									<i className="fa fa-user fa-lg" /> Perfil
								</span>
							</li>
							<li onClick={() => firebase.auth().signOut()}>
								<span className="dropdown-item link">
									<i className="fa fa-sign-out fa-lg" /> Sair
								</span>
							</li>
						</ul>
					</li>
				</ul>
			</header>
		</>
	);
};
