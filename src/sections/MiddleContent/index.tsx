import { useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setServicesInfo } from '../../redux/serviceSlice';
import { Card } from '../../components';
import { mockServicesInfo } from './mockServicesInfo';
import { ReactComponent as PlayIcon } from '../../assets/svg/services-play.svg';
import image from '../../assets/svg/services-notebook.png';
import './styles.css';

interface Service {
	icon: ReactNode;
	title: string;
	paragraph: string;
}

export interface RootState {
	services: {
		servicesInfo: Service[];
	};
}

export const MiddleContent = () => {
	const dispatch = useDispatch();
	const servicesInfo = useSelector((state: RootState) => state.services.servicesInfo);

	useEffect(() => {
		dispatch(setServicesInfo(mockServicesInfo));
	}, [dispatch]);

	return (
		<div className="middlecontent">
			<div className="middlecontent__titles">
				<h1 className="middlecontent__title">All-in-one Event Platform</h1>
				<p className="middlecontent__subtitle">Deliver an exceptional event experience</p>
			</div>
			<div className="middlecontent__image-container">
				<div className="middlecontent__play">
					<PlayIcon className="middlecontent__play-icon" />
					<p className="middlecontent__play-text">See it in action (2 min)</p>
				</div>
				<img className="middlecontent__image" src={image} alt="notebook-img" />
			</div>
			<div className="middlecontent__services">
				{servicesInfo.map(({ icon, title, paragraph }: Service) => (
					<div key={title}>
						<Card icon={icon} title={title} paragraph={paragraph} />
					</div>
				))}
			</div>
		</div>
	);
};
