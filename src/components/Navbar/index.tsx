import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { Button } from '../Button/index';
import { motion } from 'framer-motion';
import './styles.css';

export const Navbar = (): JSX.Element => {
	return (
		<motion.div className="navbar" initial={{ y: -40 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
			<div className="navbar__items">
				<Logo className="navbar__logo" />
				<Button text="Get Early Access" />
			</div>
		</motion.div>
	);
};
