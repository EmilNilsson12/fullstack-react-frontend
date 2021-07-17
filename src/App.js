import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Route path='/' component={HomePage} exact />
				<Route path='/about' component={About} />
			</div>
		</Router>
	);
}

export default App;
