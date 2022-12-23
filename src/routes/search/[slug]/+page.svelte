<script lang="ts">
    export let data: any;


    let query: string;

    async function handleSubmit(){
        window.location.href = `/search/${query}`
    }

    
    async function getData() {
        let res = await fetch(`/api?q=${data.slug}`)
        let json: any = await res.json()
        console.log(json)
        return json;
    }

    let promise = getData()
</script>

{#await promise}
<h1 class="title is-2" style="text-align: center; margin-top: 5rem;">Loading</h1>
{:then dataX} 

<a href="/">
    <h1 class="title is-2" id="title">
        HufferPuff
    </h1>
</a>

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

    {#each dataX.results as result}
        <a class="" href={result.url}>
            <h1 class="title is-4" id="links" style="margin-top: 2rem; margin-bottom: 1rem;">{@html result.title}</h1>
        </a>
        <p id="style">{@html result.description}</p>
    {/each}
{/await}

<div style="margin-bottom: 2rem;">

</div>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

    #style{
        max-width: 50%;
    }

    #input{
        margin-top: 1rem;
        max-width: 40%;
    }

    #title{
        margin-top: 2rem;
        color: black;
        text-decoration: none;
    }
    
    #title:hover{
        color:black; 
        text-decoration:none; 
        cursor:pointer;  
    }
    

    #links{
        color: black;
        text-decoration: none;
    }

    #links:hover {
        color:blue; 
        text-decoration:none; 
        cursor:pointer;  
    }

    h1{
        color: black;
        text-decoration: none;
    } 
</style>