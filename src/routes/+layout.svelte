<script lang="ts">
	import { page } from '$app/stores';

    let{ children } = $props();
    const currentPath = $derived(() => $page.url.pathname)
</script>

<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/my-sheet.css" />

<div class="container">
    <nav>
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="reactive">reactive</a>
        <a href="/bind">bind</a>
        <a href="/slot">slot</a>
    </nav>
    
    <nav class="navbar navbar-expand-lg navbar-orange">
        <div class="container-fluid">
        <a class="navbar-brand" href="/">TODOs</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link {currentPath() === '/' ? 'active navbar-selected' : ''}" aria-current="page" href="/">一覧</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {currentPath() === '/add' ? 'active navbar-selected' : ''}" href="/add">作成</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>  

    {@render children()}
</div>

<style>
    .navbar-orange{
        background-color: #FFD47F;
        color: white;
    }

    .navbar-selected{
        background-color: #ffaa00;
        color: white;
    }
</style>