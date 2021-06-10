

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

type State={
    job: string;
    done: boolean;
}[]
const todos: State = [
    { job:"Read" , done: true},
    { job:"eat" , done: true}, 
    { job:"doSport" , done: false}
];
const render = () => {
	appDiv.innerHTML = "";

	const toDosUl = document.createElement("ul");

	for (const todo of todos) {
		const toDosLi = document.createElement("li");
		toDosLi.textContent = todo.job;
		toDosUl.appendChild(toDosLi);

		const checkbox = document.createElement("input")
		checkbox.setAttribute("type", "checkbox");
		checkbox.checked=todo.done;
		toDosUl.appendChild(checkbox);
	}
	const addInput = document.createElement("input");
	addInput.setAttribute("type", "string");

	const addButton = document.createElement("input");
	addButton.setAttribute("type", "submit");
	addButton.setAttribute("value", "Add ToDos");

	const addForm = document.createElement("form");
	addForm.appendChild(addInput);
	addForm.appendChild(addButton);
	addForm.addEventListener("submit", (event) => {
		event.preventDefault();
		todos.push({job: addInput.value , done : false});
		render();
	});
    appDiv.appendChild(toDosUl);
	appDiv.appendChild(addForm);
};
render();

