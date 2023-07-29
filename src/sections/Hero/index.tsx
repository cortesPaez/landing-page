import { ReactComponent as HeroImage } from '../../assets/svg/hero-image.svg';
import { ReactComponent as BackgroundCircle } from '../../assets/svg/hero-background-circle.svg';
import { Button } from '../../components';
import './styles.css';

export const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="hero__info">
					<div className="hero__texts">
						<h1 className="hero__title">Event Registration Reimagined</h1>
						<p className="hero__subtitle">
							Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it
							sounds amazing?
						</p>
					</div>
					<Button text="Get Early Access" />
				</div>
				<HeroImage className="hero__image" />
				<BackgroundCircle className="hero__background" />
			</div>
		</>
	);
};
