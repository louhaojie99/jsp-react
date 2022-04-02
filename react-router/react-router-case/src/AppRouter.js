import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// 模拟后台动态路由数据
import { routeConfigData } from './router/config';

function AppRouter() {
	return (
		<Router>
			<div className="app_container">
				<div className="aside">
					<h2>一级导航</h2>
					<ul>
						{routeConfigData.map((item, index) => {
							return (
								<li key={index}>
									<Link to={item.path}>{item.title}</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="main">
					<Switch>
						{routeConfigData.map((item, index) => {
							return (
								<Route
									key={index}
									path={item.path}
									exact={item.exact}
									component={item.component}
								></Route>
							);
						})}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default AppRouter;
