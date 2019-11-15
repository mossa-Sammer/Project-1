import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, HatsPage } from './pages';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
