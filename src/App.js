import "./style.css";
import { MyButton, FancyButton, TodoList } from "./Buttons";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>testing</h1>
				<FancyButton />
				<MyButton />
				<TodoList />
			</header>
		</div>
	);
}

export default App;
