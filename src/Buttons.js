import { useState } from "react";
let nextId = 0;

export function MyButton() {
	return <button>I'm a button</button>;
}

export function FancyButton() {
	return <button>I'm a test</button>;
}

export function TodoList() {
	const [name, setName] = useState("");
	const [check, setCheck] = useState(false);
	const [todos, setTodos] = useState([]);
	return (
		<div>
			<h1>React useState hurts my head </h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			{/* <input type="checkbox" onChange={(e) => setCheck(e.target.value)} /> */}
			<button
				onClick={() => {
					setTodos([{ id: nextId++, name: name, checked: check }, ...todos]);
				}}>
				Add
			</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							// checked={todo.checked}
							onChange={(e) => setCheck(e.target.value)}
						/>{" "}
						{todo.name}
						{/* delete button */}
						<button
							onClick={() => {
								setTodos(todos.filter((a) => a.id !== todo.id));
							}}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
