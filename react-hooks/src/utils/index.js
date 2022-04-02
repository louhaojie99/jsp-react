/**
 * 自定义Hooks函数
 */
import { useState, useEffect, useCallback } from 'react';

/* 获取浏览器的窗口大小  */
function useWinSize() {
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
	});
	const onResize = useCallback(() => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
		});
	}, []);
	useEffect(() => {
		window.addEventListener('resize', onResize, false);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return size;
}

export { useWinSize };
