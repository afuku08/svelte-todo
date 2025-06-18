<script lang="ts">
    let{ children } = $props();
</script>

<link rel="stylesheet" href="/css/bootstrap.min.css" />

<nav>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="reactive">reactive</a>
    <a href="/bind">bind</a>
    <a href="/slot">slot</a>
</nav>

{@render children()}