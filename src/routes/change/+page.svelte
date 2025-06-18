<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	const { data, form } = $props();

    const { id, title, description } = data;
</script>

<h1>TODO内容編集</h1>

{#if form?.error}
    <p class='error'>{form.error}</p>
{/if}

<h1>{id}</h1>

<form method="POST">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" value={title} autocomplete="off" required/>

    <label for="description">Description</label>
    <textarea id="description" name="description" value={description} autocomplete="off"></textarea>

    <button type="submit">作成</button>
</form>