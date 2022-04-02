import TodoList from './view/TodoList';
// 提供器
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<TodoList></TodoList>
		</Provider>
	);
}

export default App;
