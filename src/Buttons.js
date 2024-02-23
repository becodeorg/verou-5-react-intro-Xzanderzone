import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export function TodoList() {
	const [nextId, setNextId] = useLocalStorage("nextId", 0);
	const [name, setName] = useState("");
	const [check, setCheck] = useState(false);
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function moveTodoUp(index) {
		if (index > 0) {
			const updatedTodos = [...todos];
			[updatedTodos[index], updatedTodos[index - 1]] = [
				updatedTodos[index - 1],
				updatedTodos[index],
			];
			setTodos(updatedTodos);
		}
	}
	function moveTodoDown(index) {
		if (index < todos.length - 1) {
			const updatedTodos = [...todos];
			[updatedTodos[index], updatedTodos[index + 1]] = [
				updatedTodos[index + 1],
				updatedTodos[index],
			];
			setTodos(updatedTodos);
		}
	}

	function toggleCheck(index) {
		const updatedTodos = [...todos];
		updatedTodos[index] = {
			...updatedTodos[index],
			checked: !updatedTodos[index].checked,
		};
		setTodos(updatedTodos);
	}

	return (
		<div>
			<h1>Todo List React </h1>
			<input
				value={name}
				placeholder="stop procastinating "
				onChange={(e) => setName(e.target.value)}
				className="name"
			/>
			<input type="checkbox" onChange={(e) => setCheck(!check)} />
			completed?
			<button
				className="buttonAdd"
				onClick={() => {
					setTodos([{ id: nextId, name: name, checked: check }, ...todos]);
					setNextId(nextId + 1);
				}}>
				Add
			</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.checked}
							className="checkbox"
							onChange={() => toggleCheck(index)}
						/>
						{todo.name}
						<br />
						<br />
						{/* extra buttons */}
						<button
							className="buttonDelete"
							onClick={() => {
								setTodos(todos.filter((a) => a.id !== todo.id));
							}}>
							Delete
						</button>{" "}
						<button
							className="buttonMove"
							onClick={() => {
								moveTodoUp(index);
							}}>
							move up
						</button>
						<button
							className="buttonMove"
							onClick={() => {
								moveTodoDown(index);
							}}>
							move down
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
