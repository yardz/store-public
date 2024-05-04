import React from 'react';
import { FormFields } from 'Components';

import styles from './Password.module.scss';

export const Password: React.FC = () => {
	return (
		<div className="tile">
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Senhas</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal type="password" label="Nova Senha" placeholder="Senha" name="newPassword" id="name" />
				</div>
				<div className="col-lg-8">
					<div className={styles.centerText}>
						A senha deve ter no mínimo 6 caracteres sendo alfanuméricos e caracteres especiais. (A-Z, a-z, 0-9, !@#$#%)
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<FormFields.Input.TextHorizontal type="password" label="Confirmar Senha" placeholder="Senha" name="repeatPassord" id="name" />
				</div>
				<div className="col-lg-8">
					<div className={styles.centerText}>
						A senha deve ter no mínimo 6 caracteres sendo alfanuméricos e caracteres especiais. (A-Z, a-z, 0-9, !@#$#%) e ser identica ao
						campo nova senha
					</div>
				</div>
			</div>
		</div>
	);
};
