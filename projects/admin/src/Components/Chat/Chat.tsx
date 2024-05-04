// Esse componente por hora está desatualizado. Acredito que não iremos utiliza-lo.
// Caso ele serja utilizado, precisamos refatorar o componente.

import React from 'react';

// import { InputForm } from '../InputForm';
import { Button } from '../Button';
interface Message {
	id: string;
	imageProfile: string;
	sended: string;
	textMessage: string;
	nameProfile: string;
}

interface Props {
	messages: Message[];
	loggedBy: string;
	onChange: () => void;
	onClick: () => void;
}

export const Chat: React.FC<Props> = ({ messages, loggedBy, onChange, onClick }) => {
	return (
		<div className="messanger">
			<div className="messages">
				{messages.map(message => (
					<div key={message.id} className={`message ${message.sended === loggedBy ? 'me' : ''}`}>
						<img alt="" src={message.imageProfile} />
						<p className="info">{message.textMessage}</p>
					</div>
				))}
			</div>
			<div className="sender">
				{/* Deixar Qual input ??/  */}
				{/* <InputForm
					type="text"
					placeholder="Send Message"
					id="InputChatSend"
					name="InputChatSend"
					label=""
					onChange={() => console.log('chat')}
					value=""
					large
				/> */}
				<input type="text" placeholder="Send Message" onChange={onChange} />
				<Button color="primary" icon={<i className="fa fa-lg fa-fw fa-paper-plane" />} onClick={onClick} label="" />
			</div>
		</div>
	);
};
