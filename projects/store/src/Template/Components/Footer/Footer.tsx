import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const SocialMedia = dynamic(() => import('./Components').then(mod => mod.SocialMedia));
const FooterMenu = dynamic(() => import('./Components').then(mod => mod.FooterMenu));
const DigitalStamp = dynamic(() => import('./Components').then(mod => mod.DigitalStamp));
const FooterNote = dynamic(() => import('./Components').then(mod => mod.FooterNote));

export const Footer: React.FC = () => {
	const { pathname } = useRouter();

	const hideMenuFooter = ['/pagamento', '/login', '/carrinho'].includes(pathname);
	if (hideMenuFooter) return null;

	return (
		<footer>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-2 col-md-1">
						<SocialMedia media="instagram" />
					</div>
					<div className="col-2 col-md-1">
						<SocialMedia media="facebook" />
					</div>
					<div className="col-2 col-md-1">
						<SocialMedia media="twitter" />
					</div>
					<div className="col-2 col-md-1">
						<SocialMedia media="linkedin" />
					</div>
				</div>
			</div>
			<FooterMenu />
			<DigitalStamp />
			<FooterNote />
		</footer>
	);
};
