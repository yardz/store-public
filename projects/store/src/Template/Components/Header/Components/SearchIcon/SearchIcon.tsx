import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import cloneDeep from 'lodash/cloneDeep';
import * as Yup from 'yup';
import { HeaderContext } from '@App/Template/Components/Header/HeaderContext';

import styles from './SearchIcon.module.scss';

const validationSchema = Yup.object().shape({
	search: Yup.string().trim().required('Campo obrigatório'),
});

export const SearchIcon: React.FC = () => {
	const { menu, setMenu } = useContext(HeaderContext);

	return (
		<div className={styles.search}>
			<button type="button" className={styles.btnSearch} onClick={() => setMenu({ mobile: false, search: !menu.search })}>
				<FontAwesomeIcon icon={faSearch} className={classNames(styles.icon, { [styles.iconActive]: menu.search })} />
			</button>
			<div className={classNames(styles.searchBar, { [styles.searchBarOpen]: menu.search })}>
				<Formik
					initialValues={cloneDeep({ search: '' })}
					validationSchema={validationSchema}
					onSubmit={async ({ search }, actions) => {
						actions.setSubmitting(true);
						// redirect para a página de busca?
						// console.log({ search });
						if (search) return false;
						return true;
					}}>
					{({ isSubmitting }) => (
						<Form>
							<div className="input-group">
								<Field
									type="text"
									className={classNames('form-control', styles.searchInput)}
									placeholder="Buscar"
									aria-label="Buscar"
									name="search"
								/>
								<button
									className={classNames('btn', 'btn-outline-secondary', styles.searchButton)}
									disabled={isSubmitting}
									type="submit"
									id="button-search">
									<FontAwesomeIcon icon={faSearch} className={classNames(styles.icon)} />
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
