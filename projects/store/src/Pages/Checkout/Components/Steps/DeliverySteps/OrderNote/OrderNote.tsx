import React from 'react';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { useDispatch, useSelector } from 'react-redux';

import styles from './OrderNote.module.scss';
import classNames from 'classnames';

export const OrderNote: React.FC = () => {
	const dispatch = useDispatch();
	const note = useSelector(orderSelector.note);

	return (
		<div className={styles.OrderNote}>
			{/* <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div> */}

			<textarea
				id="OrderNoteInput"
				onChange={event => dispatch(orderActions.setNote({ note: event.target.value }))}
				rows={3}
				value={note}
				placeholder="OBSERVAÇÕES DO PEDIDO"
				className={classNames('form-control', styles.textArea)}
			/>
		</div>
	);
};
