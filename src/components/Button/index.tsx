import './styles.css';

interface ButtonProp {
	text: string;
}
export const Button = ({ text }: ButtonProp): JSX.Element => <button className="button">{text}</button>;
