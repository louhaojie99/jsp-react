import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<ul className="my-list">
				<li>{true ? 'JSpang.com' : '技术胖'}</li>
				<li>黄金叶</li>
				<li>大中华</li>
				<li>玉溪</li>
			</ul>
		);
		// var child1 = React.createElement('li', null, 'JSP.com');
		// var child2 = React.createElement('li', null, 'I Love React');
		// var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
	}
}

export default App;
