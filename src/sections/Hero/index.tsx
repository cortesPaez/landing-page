import { ReactComponent as HeroImage } from '../../assets/svg/hero-image.svg';
import { ReactComponent as BackgroundCircle } from '../../assets/svg/hero-background-circle.svg';
import { Button } from '../../components';
import './styles.css';
import { motion } from 'framer-motion';

export const Hero = (): JSX.Element => {
	return (
		<>
			<div className="hero">
				<div className="hero__info">
					<motion.div className="hero__texts" initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }}>
						<h1 className="hero__title">Event Registration Reimagined</h1>
						<p className="hero__subtitle">
							Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it
							sounds amazing?
						</p>
						<Button text="Get Early Access" />
					</motion.div>
				</div>
				<motion.div className="hero__image" initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }}>
					<HeroImage className="hero__image" />
				</motion.div>
				<BackgroundCircle className="hero__background" />
			</div>
		</>
	);
};
