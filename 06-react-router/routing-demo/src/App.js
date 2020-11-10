import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
// import { AboutPage } from './components/AboutPage/AboutPage';
import { Error404Page } from './components/Error404Page/Error404Page';
import { lazy, Suspense } from 'react';

// / => HomePage
// /about => AboutPage
// 404 => Error404Page

// Promise<AboutPage>
const LazyAboutPage = lazy(
	() => import('./components/AboutPage/AboutPage') 
)


function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<ul>
				<li>
					<Link to="/">Homepage</Link>
				</li>
				<li>
					<Link to="/about/yariv?hello=world&foo=bar">About</Link>
				</li>
			</ul>
			
			
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route exact path="/">
						<HomePage />		
					</Route>
					<Route path="/about/:id">
						<LazyAboutPage />		
					</Route>				
					<Route>
						<Error404Page />		
					</Route>
				</Switch>				
			</Suspense>
			
		</BrowserRouter>
    </div>
  );
}

export default App;
