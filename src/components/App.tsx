import React from 'react';
import Navbar from './shared/navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/home';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
					</Switch>
			</BrowserRouter>
		</>
	);
}
