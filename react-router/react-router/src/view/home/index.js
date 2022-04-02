import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		// 编程式重定向
		this.props.history.push('/home');
	}
	render() {
		return <h1>Hello World！！！</h1>;
	}
}

export default Home;
