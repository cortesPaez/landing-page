import './styles.css';
import { motion } from 'framer-motion';
interface ButtonProp {
	text: string;
}
export const Button = ({ text }: ButtonProp): JSX.Element => (
	<motion.button className="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
		{text}
	</motion.button>
);
