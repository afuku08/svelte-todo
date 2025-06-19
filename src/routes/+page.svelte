<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<div class="container">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

    <a href="./add">
        <button type="submit" class="btn btn-success m-3">作成</button>
    </a>

	<div class="container text-left">
		
		<div class="row row-cols-4 p-1" in:fly={{ y: 20 }} out:slide>
		{#each data.todos as todo (todo.id)}
			<div class="col mx-1 border">
				<input type="checkbox" bind:checked={todo.done} />
				<h5>{todo.title}</h5>
				<p>{todo.description}</p>
				<div class="row">
					<a href="/change?id={todo.id}&title={todo.title}&description={todo.description}">
						<button type="submit" class="btn btn-primary">編集</button>
					</a>
					<form method="POST" action="?/delete" use:enhance>
						<input type="hidden" name="id" value={todo.id} />
						<input type="hidden" name="title" value={todo.title} />
						<input type="hidden" name="description" value={todo.description} />
						<button class="btn btn-danger" aria-label="Mark as complete">削除</button>
					</form>
				</div>
			</div>
			{/each}
		</div>	
	</div>
</div>