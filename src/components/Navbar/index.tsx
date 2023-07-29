import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import './styles.css';
import { Button } from '../Button/index';

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Logo />
				<Button text="Get Early Access" />
			</div>
		</div>
	);
};
