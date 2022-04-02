import React from 'react';
import { useWinSize } from '../../utils';

function Example() {
	const size = useWinSize();
	return (
		<div>
			页面的Size: {size.width}x{size.height}
		</div>
	);
}

export default Example;
