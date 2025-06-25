<script>
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<h1 class="my-2">TODO新規作成</h1>

{#if form?.error}
    <p class='error'>{form.error}</p>
{/if}

<form method="POST" action="/add" class="form-horizontal">
    <div class="form-group">
        <label class="control-label" for="title">タイトル</label>
        <input class="form-control" type="text" id="title" name="title" placeholder="Title" autocomplete="off" required/>
    </div>

    <div class="form-group mt-3">
        <label class="control-label" for="description">内容</label>
        <textarea class="form-control" id="description" name="description" placeholder="Description" autocomplete="off"></textarea>
    </div>

    <div class="text-center mt-3">
        <button class="btn btn-orange" type="submit">作成</button>
    </div>
</form>

<style>
    .btn-orange {
    background-color: orange;
    color: white;
    }

    .btn-orange:hover {
    background-color: darkorange;
    }
</style>