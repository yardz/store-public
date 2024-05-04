import React from 'react';
import styles from './FooterNote.module.scss';

interface Props {}

export const FooterNote: React.FC<Props> = () => (
	<div className={styles.footerNote}>
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col">
					<p className={styles.text}>
						Lab77® Comércio e Serviços ltda epp. Design sustentável e produtos sob demanda. <br />
						Av. das Américas 500, bl. 14 nº 105 Barra da Tijuca, Rio de Janeiro - RJ. 22640-100
					</p>
				</div>
			</div>
		</div>
	</div>
);
