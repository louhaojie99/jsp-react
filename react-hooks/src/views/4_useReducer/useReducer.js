// useReducer
// function countReducer(state, action) {
// 	switch (action.type) {
// 		case 'add':
// 			return state + 1;
// 		case 'sub':
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// }

import React, { useReducer } from 'react';

function useReducerDemo() {
	const [count, dispatch] = useReducer((state, action) => {
		console.log(state, action);
		switch (action) {
			case 'add':
				return state + 1;
			case 'sub':
				return state - 1;
			default:
				return state;
		}
	}, 0);
	return (
		<div>
			<h3>现在的分数是：{count}</h3>
			<button
				onClick={() => {
					dispatch('add');
				}}
			>
				increase
			</button>
			<button
				onClick={() => {
					dispatch('sub');
				}}
			>
				decrease
			</button>
		</div>
	);
}

export default useReducerDemo;
