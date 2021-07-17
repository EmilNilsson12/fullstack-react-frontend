import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './partials/NavBar';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<div id='page-body'>
					<Switch>
						<Route path='/' component={HomePage} exact />
						<Route path='/about' component={About} />
						<Route path='/about-us' component={AboutPage} />
						<Route path='/articles-list' component={ArticlesListPage} />
						<Route path='/article/:name' component={ArticlePage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
