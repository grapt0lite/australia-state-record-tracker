
<script>
    let { event } = $props();
</script>
<a href="/events/{event}">
    <button class="w-20 h-20 bg-grey-100 shadow-xl text-white shadow-slate-900 rounded flex items-center justify-center hover:bg-slate-200 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
    <img src="/event/{event}.svg" alt="333 Event Logo" class="h-25 w-25 svg-black" />
</button></a>


<style>
    button {
        transition: 0.4s;
    }
   
    button:hover {
        width: 150px;
        height: 150px;
    }
</style>