const defaultState = {
	inputValue: 'jspang',
	list: ['杨幂', '迪丽热巴'],
};

//eslint-disable-next-line
export default (state = defaultState, action) => {
	if (action.type === 'chang_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === 'add_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.inputValue);
		return newState;
	}
	if (action.type === 'delete_item_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
	return state;
};
