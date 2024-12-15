
<script>
    let { event } = $props();
</script>

<a href="/{event}">
    <button class="vw-2 vh-2 bg-grey-100 shadow-2xl text-white shadow-slate-900 rounded flex items-center justify-center hover:bg-slate-200 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
    <img src="/event/{event}.svg" alt="333 Event Logo" class="vh-2 vw-2 svg-black" />
</button></a>


<style>
    button {
        transition: 0.4s;
        width: 7vw;
        height: 7vw;
    }
   
    button:hover {
        width: 10vw;
        height: 10vw;
    }
    .svg-black {
    filter: invert(1);
  }

    .svg-black:hover {
        filter: none;
    }
</style>