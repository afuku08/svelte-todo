import { fail } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }: RequestEvent) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }: RequestEvent) => {
		const data = await request.formData();
        const userid = cookies.get('userid');
        const description = data.get('description');

        if (typeof userid !== 'string' || typeof description !== 'string') {
            return fail(400, {
                error: 'Invalid user ID or description',
            });
        }

		try {
			db.createTodo(userid, 'test', description);
		} catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
			return fail(422, {
				description: data.get('description'),
				error: message,
			});
		}
	},

	delete: async ({ cookies, request }: RequestEvent) => {
		const data = await request.formData();
        const userid = cookies.get('userid');
        const description = data.get('description');
		const id = data.get('id');

		console.log(description);

        if (typeof userid !== 'string' || typeof description !== 'string') {
            return fail(400, {
                error: 'Invalid user ID or description',
            });
        }

		if (id === null) {
			return fail(400, {
				error: 'Invalid ID',
			});
		}

		db.deleteTodo(userid, id);
	}
};
