<script>
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<h1>TODO新規作成</h1>

{#if form?.error}
    <p class='error'>{form.error}</p>
{/if}

<form method="POST" action="add">
    <div class="row">
        <label for="title">タイトル</label>
        <input type="text" id="title" name="title" placeholder="Title" autocomplete="off" required/>
    </div>

    <div class="row">
        <label for="description">詳細</label>
        <textarea id="description" name="description" placeholder="Description" autocomplete="off"></textarea>
    </div>

    <button type="submit">作成</button>
</form>