import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function useContextDemo() {
	const [count, setCount] = useState(1);
	return (
		<div>
			<p>当前计数器的值: {count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				增加
			</button>
			{/* 父子组件传参 */}
			<CountContext.Provider value={count}>
				<Counter />
			</CountContext.Provider>
		</div>
	);
}

function Counter() {
	const count = useContext(CountContext);
	// 子组件接收数值
	return <h3>子组件: {count}</h3>;
}

export default useContextDemo;
