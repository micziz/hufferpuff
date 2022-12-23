<script lang="ts">
	export let data: any;

	let pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	let query: string;

	async function handleSubmit() {
		window.location.href = `/search/${query}`;
	}

	async function getData(page: any) {
		let res = await fetch(`/api?q=${data.slug}&page=${page}`);
		let json: any = await res.json();
		return json;
	}

	let promise = getData('1');

	function reLoad(page: any) {
		promise = getData(page);
	}
</script>

{#await promise}
	<h1 class="title is-2" style="text-align: center; margin-top: 5rem;">Loading</h1>
{:then dataX}
	<a href="/">
		<h1 class="title is-2" id="title">HufferPuff</h1>
	</a>

	<div class="formDiv">
		<form action="" class="" on:submit|preventDefault={handleSubmit}>
			<input class="input is-rounded" id="input" type="text" bind:value={query} name="" />
		</form>
	</div>

	{#each dataX.results as result}
		<a class="" href={result.url}>
			<h1 class="title is-4" id="links" style="margin-top: 2rem; margin-bottom: 1rem;">
				{@html result.title}
			</h1>
		</a>
		<p id="style">{@html result.description}</p>
	{/each}

	<div id="pagintation">
		{#each pages as page}
			<button
				class="button"
				id="btns"
				on:click={() => {
					reLoad(page);
				}}
			>
				{page}
			</button>
		{/each}
	</div>
{/await}

<div style="margin-bottom: 2rem;" />

<style>
	@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';

	#style {
		max-width: 50%;
	}

	#input {
		margin-top: 1rem;
		max-width: 40%;
	}

	#title {
		margin-top: 2rem;
		color: black;
		text-decoration: none;
	}

	#title:hover {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}

	#links {
		color: black;
		text-decoration: none;
	}

	#links:hover {
		color: blue;
		text-decoration: none;
		cursor: pointer;
	}

	h1 {
		color: black;
		text-decoration: none;
	}

	#pagintation {
		margin-top: 2rem;
	}

	#btns {
		margin-left: 0.5rem;
	}

	#btns:hover {
		background-color: whitesmoke;
	}
</style>
