// 无状态组件 - 列表页
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * React Router 动态传值
 *
 * 1、设置规则
 * 2、传递值
 * 3、接收值
 * 4、显示内容
 */
class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{ cid: 100, title: '深化教育' },
				{ cid: 200, title: '实划职能' },
				{ cid: 300, title: '优化环境' },
				{ cid: 400, title: '建章立制' },
			],
		};
	}
	render() {
		return (
			<>
				<ul style={{ fontSize: '30px', margin: '20px', textDecoration: 'none' }}>
					{this.state.list.map((item, index) => {
						return (
							<li key={index}>
								<Link to={'/list/details/' + item.cid}>{item.title}</Link>
							</li>
						);
					})}
				</ul>
			</>
		);
	}
	componentDidMount() {
		const { params } = this.props.match;
		// console.log(params);
		this.setState({
			id: params.id,
		});
	}
}

export default List;
