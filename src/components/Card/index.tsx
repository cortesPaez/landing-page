/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';

interface Card {
	icon: ReactNode;
	title: string;
	paragraph: string;
}

export const Card = ({ icon, title, paragraph }: Card): JSX.Element => {
	return (
		<div className="middlecontent__services-item">
			<div>{icon}</div>
			<div>
				<h1 className="middlecontent__services-title">{title}</h1>
				<p className="middlecontent__services-paragraph">{paragraph}</p>
			</div>
		</div>
	);
};
