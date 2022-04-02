import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Money from './Money';
import Getup from './Getup';

function Index() {
	return (
		<div className="topNav">
			<ul>
				<li>
					<Link to="/workplace/money">程序员加薪秘籍</Link>
				</li>
				<li>
					<Link to="/workplace/getup">程序员早期攻略</Link>
				</li>
			</ul>
			<div className="videoContent">
				<div>
					<h3>视频教程</h3>
				</div>
				<hr />
				<Redirect to="/workplace/money"></Redirect>
				<Route path="/workplace/money" component={Money}></Route>
				<Route path="/workplace/getup" component={Getup}></Route>
			</div>
		</div>
	);
}

export default Index;
