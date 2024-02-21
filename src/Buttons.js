import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export function MyButton() {
	return <button>I'm a button</button>;
}

export function TodoList() {
	const [nextId, setNextId] = useLocalStorage("nextId", 0);
	const [name, setName] = useState("");
	const [check, setCheck] = useState(false);
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || []
	);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	// const [todos, setTodos] = useState([]);

	return (
		<div>
			<h1>React useState hurts my head </h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<input type="checkbox" onChange={(e) => setCheck(!check)} />
			completed?
			<button
				onClick={() => {
					setTodos([{ id: nextId, name: name, checked: check }, ...todos]);
					setNextId(nextId + 1);
				}}>
				Add
			</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.checked}
							onChange={(e) => setCheck(!check)}
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
