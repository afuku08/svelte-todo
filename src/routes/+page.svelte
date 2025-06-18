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
        <button type="submit" class="btn btn-success">作成</button>
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
							<button type="submit" class="btn btn-primary">編集</button>
						</a>
					</div>
					<div class="col">
						<form method="POST" action="?/delete" use:enhance>
							<input type="hidden" name="id" value={todo.id} />
							<input type="hidden" name="title" value={todo.title} />
							<input type="hidden" name="description" value={todo.description} />
							<button class="btn btn-danger" aria-label="Mark as complete">削除</button>
						</form>
					</div>
				</div>
			</div>
		</div>	
		{/each}
	</div>
</div>