import { ReactComponent as Logo } from '../../assets/svg/footer-logo.svg';
import { Button } from '../../components';
import './styles.css';

export const Footer = () => {
	return (
		<>
			<div className="footer">
				<div>
					<h1 className="footer__title">Create your event with RegiM</h1>
					<p className="footer__paragraph">
						Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next
						hybrid event from registration to executing a flawless event.
					</p>
					<Button text="Get Early Access" />
				</div>
			</div>
			<div className="footer__info">
				<div className="footer__info-logo-container">
					<hr />
					<Logo className="footer__info-logo" />
					<hr />
				</div>
				<div className="footer__info-texts">
					<p className="footer__copyright">
						© RegiM 2022. Made with love by <span className="footer__copyright--white">Landify</span>
					</p>
					<p className="footer__copyright">
						For further details, drop a mail to{' '}
						<a href="mailto:hello@landify.design" className="footer__copyright--white">
							hello@landify.design
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
