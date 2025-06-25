<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	const { data, form } = $props();

    const { id, title, description } = data;
</script>

<h1 class="my-2">TODO内容編集</h1>

{#if form?.error}
    <p class='error'>{form.error}</p>
{/if}

<form method="POST" action="/change" class="form-horizontal">
    <input type="hidden" name="todoid" value={id}/>

    <div class="form-group">
        <label class="control-label" for="title">タイトル</label>
        <input class="form-control" type="text" id="title" name="title" value={title} autocomplete="off" required/>
    </div>

    <div class="form-group mt-3">
        <label class="control-label" for="description">詳細</label>
        <textarea class="form-control" id="description" name="description" value={description} autocomplete="off"></textarea>
    </div>

    <div class="text-center mt-3">
        <button type="submit" class="btn btn-orange">作成</button>
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