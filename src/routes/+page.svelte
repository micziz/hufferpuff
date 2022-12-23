<script lang="ts">
	import { goto } from '$app/navigation';
	import Title from '../components/title.svelte';
	let query = '';

	async function handleSubmit() {
		goto(`/search/${query}`);
	}
</script>

<Title />

<form action="" class="" on:submit|preventDefault={handleSubmit}>
	<div class="formDiv">
		<input class="input is-rounded" id="input" type="text" bind:value={query} name="" />
	</div>
	<div id="inputSubmit">
		<input id="btns" class="button" type="submit" name="Search" value="Search" />
	</div>
</form>

<div id="links">
	<span>
		<a href="/about">About</a>
	</span>
	-
	<span>
		<a href="/tos">Terms Of Service</a>
	</span>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';

	#links {
		position: fixed;
		text-align: center;
		bottom: 1rem;
		width: 100%;
	}

	.formDiv {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 6rem;
	}

	#input {
		width: 36rem;
		height: 2rem;
	}

	a {
		color: black;
		text-decoration: none;
	}

	a:hover {
		color: blue;
		text-decoration: none;
		cursor: pointer;
	}

	#inputSubmit {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}

	#btns:hover {
		background-color: whitesmoke;
	}
</style>
