<script lang='ts'>
    import '../tailwind.css';
    import EventButton from '../components/EventButton.svelte';
</script>

<main>
    <div>
        <p class="text-sm ">Made by Ethan Annane</p>
        <h1 class="text-center mt-5 text-5xl ">Australian State Records</h1>
        <p class="text-2xl mt-10 mr-40 ml-40 rounded pt-5 pl-5 pr-5 pb-5 custom-border-gradient">
            The Australian State Record Tracker is a straightforward way to keep up with the top performances in WCA events across all of Australia. It features rankings for each event in every state, so you can easily see who’s at the top in your area and across the country. Whether you're new to speedcubing or have been competing for a while, this website makes it easy to track your own progress, set new goals, and see how you compare to others. It's updated regularly to reflect the latest records, so you’ll always know who’s leading in each event. Whether you're chasing personal bests or just want to see where you stand, this tracker is the go-to spot to stay up to date on the Australian speedcubing.
        </p>        
        <h1 class="mt-20 text-center text-3xl">NxN</h1>
        <div class="flex items-center justify-center h-64 gap-10">
            <EventButton event="2x2" />
            <EventButton event="3x3" />
            <EventButton event="4x4" />
            <EventButton event="5x5" />
            <EventButton event="6x6" />
            <EventButton event="7x7" />
        </div>
        <h1 class="text-center text-3xl">Non-Cube</h1>
        <div class="flex items-center justify-center h-64 gap-10">
            <EventButton event="Square-1" />
            <EventButton event="Skewb" />
            <EventButton event="Pyraminx" />
            <EventButton event="Megaminx" />
            <EventButton event="Clonk" />
        </div>
        <h1 class=" text-center text-3xl">Special Events</h1>
        <div class="flex items-center justify-center h-64 gap-10">
            <EventButton event="3x3 Blindfolded" />
            <EventButton event="4x4 Blindfolded" />
            <EventButton event="5x5 Blindfolded" />
            <EventButton event="Multiblind" />
            <EventButton event="FMC" />
            <EventButton event="One Handed" />
        </div>
    </div>
</main>