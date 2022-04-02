import React, { Component } from 'react';

class WelCome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		setTimeout(() => {
			this.props.history.replace('/home');
			// this.props.history.push('/home');
		}, 2000);
	}
	render() {
		return <div>欢迎回家，即将进入首页！！！</div>;
	}
}

export default WelCome;
