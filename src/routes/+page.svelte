<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let { data, form } = $props();

	function goToEdit(todo: any) {
		goto(`/change?id=${encodeURIComponent(todo.id)}&title=${encodeURIComponent(todo.title)}&description=${encodeURIComponent(todo.description)}`);
	}
</script>

<div class="container">

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<div class="container text-left">
		
		<div class="row row-cols-4 p-1" in:fly={{ y: 20 }} out:slide>
		{#each data.todos as todo (todo.id)}
			<div class="col">
				<div class="mx-1 my-1 border py-1 px-2 todo-item" role="button" tabindex="0" on:click={() => goToEdit(todo)}>
					<input type="checkbox" bind:checked={todo.done} on:click|stopPropagation />
					<h5>{todo.title}</h5>
					<p class="todo-txt-limit">{todo.description}</p>
				</div>
			</div>
			{/each}
		</div>	
	</div>
</div>