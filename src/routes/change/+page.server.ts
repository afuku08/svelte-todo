import { fail, redirect } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export const actions = {
    default: async ({ cookies, request }: RequestEvent) => {
            const data = await request.formData();
            const userid = cookies.get('userid');
            const todoid = data.get('todoid');
            const title = data.get('title');
            const description = data.get('description');
    
            if (typeof userid !== 'string' || typeof todoid !== 'string' ||  typeof title !== 'string' || typeof description !== 'string') {
                return fail(400, {
                    error: 'Invalid user ID, title or description',
                });
            }

            if (!title) {
                return fail(400, {
                    errors: {
                        title: 'required'
                    },
                    title: title?.toString() ?? '',
                    description: description?.toString() ?? ''
                });
            }
    
            try {
                db.updateTodo(userid, todoid, title, description);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error';
                return fail(422, {
                    description: data.get('description'),
                    error: message,
                });
            }
            throw redirect(303, '/');
        },
}