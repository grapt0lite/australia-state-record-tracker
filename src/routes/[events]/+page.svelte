<script lang="ts">
    import '../../tailwind.css'
    import EventStamp from '../../components/EventStamp.svelte';
    import type { PageData } from "../$types";
    export let data: PageData;

</script>

<div>
    <div class="flex items-center justify-center h-32 gap-10">
        <EventStamp event="2x2" />
        <h1 class="text-5xl">
            {data}
        </h1>
        <EventStamp event="2x2" />
    </div>
</div>

<h1>Hello!</h1>

<div class="w-[70vw] mx-auto mt-30">
    <table class="table-auto w-full border-collapse">
        <thead>
            <tr>
                <th class="border rounded px-4 py-2">Track</th>
                <th class="border px-4 py-2">Artist</th>
                <th class="border px-4 py-2">Album</th>
                <th class="border px-4 py-2">Genre</th>
            </tr>
        </thead>
        <tbody>
            {#each data.tracks as track}
                <tr>
                    <td class="border px-4 py-2">{track.trackName}</td>
                    <td class="border px-4 py-2">{track.artistName}</td>
                    <td class="border px-4 py-2">{track.albumTitle}</td>
                    <td class="border px-4 py-2">{track.genre}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
