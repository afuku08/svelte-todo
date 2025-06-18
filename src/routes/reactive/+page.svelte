<script lang="ts">
    let count = $state(0);
    let square = $derived(count * count);

    function increment() {
        count += 1;
    }

    $effect(() => {
        if (square >= 1000) {
            alert("1000を超えました");
        }
    });
</script>

<button onclick={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<h3>掛け算：{square}</h3>