import React from 'react';
// 连接器
import { connect } from 'react-redux';

const TodoList = props => {
	const { inputValue, list, inputChangeValue, clickBtn, deleteItemDataBtn } = props;
	console.log(inputValue);
	return (
		<div>
			<input value={inputValue} onChange={inputChangeValue} />
			<button type="button" onClick={clickBtn}>
				提交
			</button>
			<ul>
				{list.map((item, index) => {
					return (
						<li key={index} onClick={() => deleteItemDataBtn(index)}>
							{index} -------- {item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

// class TodoList extends Component {
// 	// eslint-disable-next-line
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		const { inputValue, inputChangeValue, clickBtn, deleteItemDataBtn } = this.props;
// 		return (
// 			<div>
// 				<input value={inputValue} onChange={inputChangeValue} />
// 				<button type="button" onClick={clickBtn}>
// 					提交
// 				</button>
// 				<ul>
// 					{this.props.list.map((item, index) => {
// 						return (
// 							<li key={index} onClick={() => deleteItemDataBtn(index)}>
// 								{index} -------- {item}
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

// 连接器的映射关系
const stateProps = state => {
	return {
		inputValue: state.inputValue,
		list: state.list,
	};
};

const dispatchToProps = dispatch => {
	return {
		inputChangeValue(e) {
			const action = {
				type: 'chang_input_value',
				value: e.target.value,
			};
			dispatch(action);
		},
		clickBtn() {
			const action = {
				type: 'add_input_value',
			};
			dispatch(action);
		},
		deleteItemDataBtn(index) {
			const action = {
				type: 'delete_item_value',
				index,
			};
			dispatch(action);
		},
	};
};

export default connect(stateProps, dispatchToProps)(TodoList);
