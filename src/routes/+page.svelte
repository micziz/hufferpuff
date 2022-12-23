<script lang="ts">
	import { goto } from "$app/navigation";
    import Title from '../components/title.svelte'
    let query: string;

    async function handleSubmit(){
        goto(`/search/${query}`)
    }

</script>

<Title />

<div class="formDiv">
    <form action="" class="" on:submit|preventDefault={handleSubmit}>
        <input 
            class="input is-rounded"
            id="input"
            type="text" 
            bind:value={query}
            name="" 
        >
    </form>
</div>


<div id="links">
    <a href="/about">About - </a> 
    <a href="/tos">Terms Of Service - </a>
    <a href="/pp">Privacy policy</a>
</div>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    
    #links{
        text-align: center;
        margin-top: 22rem;
    }
    
    .formDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6rem;
    }

    #input{
        width: 36rem;
        height: 2rem;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: blue; 
        text-decoration:none; 
        cursor:pointer;  
    }
</style>