import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { Button } from '../Button/index';
import './styles.css';

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Logo className="navbar__logo" />
				<Button text="Get Early Access" />
			</div>
		</div>
	);
};
