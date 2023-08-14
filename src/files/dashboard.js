import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Hamburger from './hamburger';
import Sidebar from './sidebar';

const Dashboard = () => {
	
		return (
			<Router>
				<div className="Dashboard">
					<Switch>
						<Route exact path = "/dashboard">
							<Sidebar />
						</Route>
						<Route exact path = "/dashboard_1">
							<Hamburger />
						</Route>
					</Switch>
				</div>
			</Router>
			
			
		)
}

export default Dashboard