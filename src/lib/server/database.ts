// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
import type { Todo } from '$lib/types';
const db = new Map();

export function getTodos(userid: string) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			title: 'First ToDo',
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid: string, title: string, description: string) {
	if (title === '' || description === '') {
		throw new Error('todo must have a title and description');
	}

	const todos = db.get(userid);

	if (todos.find((todo: Todo) => todo.title === title)) {
		throw new Error('todos title must be unique');
	}

	todos.push({
		id: crypto.randomUUID(),
		title,
		description,
		done: false
	});
}

export function deleteTodo(userid: string, todoid: FormDataEntryValue) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo: Todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

export function updateTodo(userid: string, todoid: string, title: string, description: string) {
	if (title === '' || description === '') {
		throw new Error('todo must have a title and description');
	}

	const todos = db.get(userid);
	const index = todos.findIndex((todo: Todo) => todo.id === todoid);

	todos[index].title = title;
	todos[index].description = description;
}
