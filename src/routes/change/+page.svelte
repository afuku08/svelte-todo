<script>
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<h1>TODO新規作成</h1>

{#if form?.error}
    <p class='error'>{form.error}</p>
{/if}

<form method="POST">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Title" autocomplete="off" required/>

    <label for="description">Description</label>
    <textarea id="description" name="description" placeholder="Description" autocomplete="off"></textarea>

    <button type="submit">作成</button>
</form>