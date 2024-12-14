<script lang='ts'>
    import '../tailwind.css';
    import EventButton from '../components/EventButton.svelte';
</script>

<p class="text-sm ">Made by Ethan Annane</p>

<main>
    <div>
        <div>
            <h1 class="text-center mt-5 text-5xl ">Australian Unoficial Records</h1>
        </div>
        <div class="text-2xl mt-10 mr-40 ml-40 rounded pt-5 pl-5 pr-5 pb-5 custom-border-gradient">
            The Australian Unnoficial Records Tracker is a simple way to keep up with the top performances in WCA events across all of Australia. It features rankings for each event in every state, so you can easily see who’s at the top in your area and across the country. Click on an event to start, or submit your record in the Oceania Cubing Discord Server.
        </div>        
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
            <EventButton event="Clock" />
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

<style>
    .custom-border-gradient {
        border-width: 8px;
        border-image: linear-gradient(to top right, #4f46e5, #7c3aed, #ec4899) 1;
        border-radius: 3rem;
    }
</style>