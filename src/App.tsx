import { Navbar } from './components';
import { Footer, Hero, MiddleContent as Services, Tools } from './sections';
import './styles.css';

const App = () => {
	return (
		<>
			<div className="home__container">
				<Navbar />
				<Hero />
				<Services />
				<Tools />
			</div>
			<Footer />
		</>
	);
};

export default App;
