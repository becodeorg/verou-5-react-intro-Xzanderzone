import "./style.css";
import { TodoList } from "./Buttons";
import Calendar from "./components/calendar";

function App() {
	return (
		<div className="App">
			<TodoList />
			<Calendar events="wtf" />
		</div>
	);
}

export default App;
