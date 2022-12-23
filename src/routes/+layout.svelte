<svelte:head>
    <title>HufferPuff - Private search Engine</title> 
</svelte:head>

<main>

    <slot/>
</main>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap');
    

    main{
        font-family: 'Noto Sans Mono', monospace;
    }
</style>