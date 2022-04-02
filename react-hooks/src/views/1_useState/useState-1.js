/**
 * useState
 *
 */
import React, { useState } from 'react';

function useState1() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You Clickd {count} times</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				增加
			</button>
		</div>
	);
}

export default useState1;
