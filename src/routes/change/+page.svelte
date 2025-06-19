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

<form method="POST" action="change">
    <input type="hidden" name="todoid" value={id}/>

    <div class="row">
        <label for="title">タイトル</label>
        <input type="text" id="title" name="title" value={title} autocomplete="off" required/>
    </div>

    <div class="row">
        <label for="description">詳細</label>
        <textarea id="description" name="description" value={description} autocomplete="off"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">作成</button>
</form>