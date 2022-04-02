import React from 'react';
// 引入路由
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Welcome from './view/welcome';
import Home from './view/home';
import List from './view/list';
import Details from './view/list/Details';

// 无状态组件
function AppRouter() {
	return (
		<Router>
			<div className="wrapper">
				<aside className="aside">
					<ul>
						<li>
							{/* <Redirect to={'/home/'}></Redirect> */}
							<Link to="/">首页</Link>
						</li>
						<li>
							<Link to="/list">列表页</Link>
						</li>
					</ul>
				</aside>

				<section className="main">
					<Route path={'/'} exact component={Welcome}></Route>
					<Route path={'/home'} exact component={Home}></Route>

					{/* 路由传参, 动态ID */}
					{/*
					 * 路由传参, 动态ID
					 * /list 					文章列表页
					 * /list/details	文章详情页
					 */}
					<Route path={'/list'} exact component={List}></Route>
					<Route path={'/list/details/:id'} exact component={Details}></Route>
				</section>
			</div>
		</Router>
	);
}

export default AppRouter;
