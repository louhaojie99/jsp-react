import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
	useEffect(() => {
		console.log(`useEffect=> 老弟, 你来了! Index页面`);
		return () => {
			console.log(`useEffect=> 老弟, 我走了! Index页面`);
		};
	}, []);
	return <h2>JSPang.com</h2>;
}
function List() {
	useEffect(() => {
		console.log(`useEffect=> 老弟, 你来了! List页面`);
		return () => {
			console.log(`useEffect=> 老弟, 我走了! List页面`);
		};
	}, []);
	return <h2>List-Page</h2>;
}
/**
 * useEffect，参数一相当于componentDidMount和componentDidUpdate
 * useEffect，参数二数组
 */
function useEffectDemo() {
	const [count, setCount] = useState(1);
	useEffect(() => {
		console.log(`useEffect=> ${count}`);
	}, [count]);
	return (
		<div>
			<div>
				<p>当前计数器的时间：{count}</p>
				{/* prettier-ignore */}
				<button onClick={() => {setCount(count + 1);}}>
					增加
				</button>
			</div>
			<hr />
			<Router>
				<ul>
					<li>
						<Link to="/">首页</Link>
					</li>
					<li>
						<Link to="/list/">列表</Link>
					</li>
				</ul>
				<Route path="/" exact component={Index} />
				<Route path="/list/" component={List} />
			</Router>
		</div>
	);
}

export default useEffectDemo;
