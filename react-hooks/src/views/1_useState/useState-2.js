import React, { useState } from 'react';

function useState2() {
	// eslint-disable-next-line
	const [age, setAge] = useState(23);
	// eslint-disable-next-line
	const [sex, setSex] = useState('男');
	// eslint-disable-next-line
	const [work, setWork] = useState('前端程序员');
	return (
		<div>
			<p>我今年{age}岁了，</p>
			<p>性别{sex}</p>
			<p>我的职业是{work}!</p>
		</div>
	);
}

export default useState2;
