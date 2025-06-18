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

	<div class="container text-center">
		<div class="row">
			<div class="col">
				<h4>タイトル</h4>
			</div>
			<div class="col">
				<h4>詳細</h4>
			</div>
			<div class="col">
				<h4>操作</h4>
			</div>
		</div>
		<!-- <ul>
			<li>
				<span>タイトル</span>
				<span>詳細</span>
			</li>
		</ul> -->
		
		{#each data.todos as todo (todo.id)}
		<div class="row" in:fly={{ y: 20 }} out:slide>
			<div class="col">
				{todo.title}
			</div>
			<div class="col">
				{todo.description}
			</div>
			<div class="col">
				<div class="row">
					<div class="col">
						<a href="/change?id={todo.id}&title={todo.title}&description={todo.description}">
							<button type="submit">編集</button>
						</a>
					</div>
					<div class="col">
						<form method="POST" action="?/delete" use:enhance>
							<input type="hidden" name="id" value={todo.id} />
							<input type="hidden" name="title" value={todo.title} />
							<input type="hidden" name="description" value={todo.description} />
							<button aria-label="Mark as complete">削除</button>
						</form>
					</div>
				</div>
			</div>
		</div>	
		{/each}
	</div>
</div>
<!-- <style>
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

	li {
		display: flex;
		align-items: center;
	}
</style> -->
