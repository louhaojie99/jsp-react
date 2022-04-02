import React, { Component } from 'react';
import PropTypes from 'prop-types';

class YoungLadyItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.name = this.props.name;
	}

	/**
	 * 组件第一次存在于虚拟dom中，函数是不会被执行的
	 * 如果已经存在于虚拟dom中，函数才会被执行
	 */
	// componentWillReceiveProps() {
	// 	console.log('5-componentWillReceiveProps-----props');
	// }
	// componentWillUnmount() {
	// 	console.log('6-componentWillUnmount-----组件被删除之前');
	// }

	// 性能优化
	shouldComponentUpdate(nextProps, nextState) {
		// let flag = true;
		// nextProps.content !== this.props.content ? (flag = true) : (flag = false);
		// return flag;
		if (nextProps.content !== this.props.content) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		console.log('child-render');
		// 获取父组件传递过来的值
		return (
			<li onClick={this.handleClick}>
				{this.props.avname}为您-{this.props.content}
			</li>
		);
	}

	handleClick() {
		// console.log(this.props.index);
		this.props.deleteItem(this.props.index);
	}
}

// 传值类型预校验
YoungLadyItem.propTypes = {
	content: PropTypes.string,
	index: PropTypes.number,
	deleteItem: PropTypes.func,
	avname: PropTypes.string.isRequired, // 必须传递的
};

// 默认值
YoungLadyItem.defaultProps = {
	avname: '迪丽热巴',
};

export default YoungLadyItem;
