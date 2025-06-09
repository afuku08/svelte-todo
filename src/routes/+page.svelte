<script>
    const todos = $state([
        { id: 1, title: "Hello, Svelte"},
        { id: 2, title: "Svelte is awesome"},
    ]);

    let uid = todos.length + 1;
</script>

<h1>home</h1>

<div>
    <input
        placeholder="todo"
        onkeydown={(e) => {
            if (e.key !== 'Enter') return;

            todos.push({
                id: uid++,
                title: e.currentTarget.value
            });

            e.currentTarget.value = '';
        }}
    />
</div>

{#snippet showTodo(post)}
    <article>
        <h2>{post.title}</h2>
    </article>
{/snippet}

{#each todos as todo}
    {@render showTodo(todo)}
{/each}

