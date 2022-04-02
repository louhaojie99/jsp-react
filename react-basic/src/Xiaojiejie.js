import React, { Component, Fragment } from 'react';
import { getAction } from './network/api';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import XiaojiejieItem from './XiaojiejieItem';
import Animation from './Animation';
import axios from 'axios';
import './style.css';

/**
 * Fragment相当于Vue中的template模板不会渲染出dom节点
 * Component组件类
 * dangerouslySetInnerHTML 解析html标签
 */
class Xiaojiejie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '脸部护理',
			list: ['基础按摩', '精油推背', '刮痧按摩'],
		};
	}

	// 生命周期
	// componentWillMount() {
	// 	console.log('1-componentWillMount-----组件将要挂载到页面的时刻');
	// }
	componentDidMount() {
		// console.log('2-componentDidMount-----组件将挂载完成的时刻');
		getAction('../static/mylist.json')
			.then(res => {
				console.log('数据获取成功：', res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}
	// shouldComponentUpdate() {
	// 	console.log('3-shouldComponentUpdate-----组件更新之前');
	// 	return true;
	// }
	// componentWillUpdate() {
	// 	console.log('4-shouldComponentUpdate-----组件更新之后');
	// }
	// componentWillReceiveProps() {
	// 	console.log('5-componentWillReceiveProps-----props');
	// }

	render() {
		// console.log('render-----挂载中');

		return (
			<Fragment>
				{/* 第一次写注释   */}
				<div>
					<label htmlFor="jspang">增加服务: </label>
					<input
						id="jspang"
						className="input"
						value={this.state.inputValue}
						onChange={this.inputChange.bind(this)}
						ref={input => {
							this.input = input;
						}}
					/>
					<button onClick={this.addList.bind(this)}>增加服务</button>
				</div>
				<ul
					ref={ul => {
						this.ul = ul;
					}}
				>
					<TransitionGroup>
						{this.state.list.map((item, index) => {
							return (
								<CSSTransition
									timeout={2000}
									classNames="boss-text"
									unmountOnExit
									appear={true}
									key={index + item}
								>
									<XiaojiejieItem
										key={index + item}
										content={item}
										index={index}
										deleteItem={this.deleteItem.bind(this)}
									></XiaojiejieItem>
								</CSSTransition>
								/* <li
								key={index}
								onClick={this.deleteItem.bind(this, index)}
								dangerouslySetInnerHTML={{ __html: item }}
							></li> */
							);
						})}
					</TransitionGroup>
				</ul>
				<h2 className="footMessage">今天过得很开心，服务很满意！</h2>
				<hr />
				<Animation></Animation>
			</Fragment>
		);
	}

	inputChange() {
		// console.log(this);
		// console.log(e.target.value);
		this.setState({
			inputValue: this.input.value,
		});
	}

	// 增加服务项
	addList() {
		const { list: serveList, inputValue } = this.state;
		if (!inputValue) return;
		this.setState(
			{
				// list: [...serveList, inputValue],
				list: serveList.concat([inputValue]),
				inputValue: '',
			},
			// setState回调
			() => {
				console.log(this.ul.querySelectorAll('li').length);
			}
		);
	}

	// 删除服务项
	deleteItem(index) {
		// this.state.list.splice(index, 1);  // 不推荐不利于维护
		let list = this.state.list;
		list.splice(index, 1);
		this.setState({
			list,
		});
	}
}

export default Xiaojiejie;
