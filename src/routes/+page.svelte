<script>
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

    <a href="./add">
        <button type="submit">作成</button>
    </a>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li in:fly={{ y: 20 }} out:slide>
				<span>{todo.title}</span>
				<span>{todo.description}</span>
				<a href="/change?id={todo.id}&title={todo.title}&description={todo.description}">
					<button type="submit">編集</button>
				</a>
				<form method="POST" action="?/delete" use:enhance>
					<input type="hidden" name="id" value={todo.id} />
					<input type="hidden" name="title" value={todo.title} />
					<input type="hidden" name="description" value={todo.description} />
					<button aria-label="Mark as complete">削除</button>
				</form>
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
