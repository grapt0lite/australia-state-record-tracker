<script>
    import '../tailwind.css';
    let { event } = $props();
</script>

<div class="w-20 h-20 bg-grey-100 shadow-xl text-white shadow-slate-900 rounded flex items-center justify-center hover:bg-slate-200 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
    <img src="/event/{event}.svg" alt="333 Event Logo" class="h-25 w-25 svg-white" />
</div>



<style>
    .svg-white {
        filter: invert(1);
    }
</style>