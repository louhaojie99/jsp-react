import React from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './color';

function useReducerProduct() {
	return (
		<div>
			<Color>
				<ShowArea />
				<Buttons />
			</Color>
		</div>
	);
}

export default useReducerProduct;
