import React, { Component } from 'react';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<h2 style={{ color: '#ff0000' }}>
				<br />
				文章详情页 == {this.state.articleId}
				<br />
			</h2>
		);
	}
	componentDidMount() {
		console.log(this.props.match.params);
		let { params } = this.props.match;
		this.setState({
			articleId: params.id,
		});
	}
}

export default Details;
