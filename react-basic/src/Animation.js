import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

class Animation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: true,
		};
		this.toToggole = this.toToggole.bind(this);
	}
	render() {
		return (
			<div>
				<CSSTransition
					in={this.state.isShow} //用于判断是否出现的状态
					timeout={2000} //动画持续时间
					classNames="boss-text" //className值，防止重复
					unmountOnExit // 退场删除dom
				>
					<div>BOSS级人物-孙悟空</div>
				</CSSTransition>
				<div className={this.state.isShow ? 'show' : 'hidden'}>Boos级人物-贝吉塔</div>
				<div>
					<button onClick={this.toToggole}>召唤Boos</button>
				</div>
			</div>
		);
	}
	toToggole() {
		this.setState({
			isShow: this.state.isShow ? false : true,
		});
	}
}

export default Animation;
