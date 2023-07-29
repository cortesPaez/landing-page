/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';
import './styles.css';

interface Card {
	icon: ReactNode;
	title: string;
	paragraph: string;
}

export const Card = ({ icon, title, paragraph }: Card): JSX.Element => {
	return (
		<div className="card">
			<div>{icon}</div>
			<div>
				<h1 className="card__title">{title}</h1>
				<p className="card__paragraph">{paragraph}</p>
			</div>
		</div>
	);
};
