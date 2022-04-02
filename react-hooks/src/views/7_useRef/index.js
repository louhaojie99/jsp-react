import React, { useEffect, useRef, useState } from 'react';

function useRefDemo() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
		inputEl.current.value = 'Hello, JSpang';
		console.log(inputEl);
	};
	// useRef保存变量
	const [Text, setText] = useState('jspang');
	const textRef = useRef();
	useEffect(() => {
		textRef.current = Text;
		console.log('textRef.current: ', textRef.current);
	});
	return (
		<>
			<input ref={inputEl} type="text"></input>
			<button onClick={onButtonClick}>在input上展示文字</button>
			<br />
			<br />
			<input value={Text} onChange={(e) => setText(e.target.value)} />
		</>
	);
}

export default useRefDemo;
