<script lang="ts">
    import '../../tailwind.css'
    import EventStamp from '../../components/EventStamp.svelte';
    import type { PageData } from "../$types";
    export let data: PageData;
</script>

<div>
    <button class="mt-5 ml-5"><a href="/" class="bg-transparent hover:text-purple-300 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded custom-border-gradient">Back</a></button>
    <div class="flex items-center justify-center h-32 gap-10">
        <EventStamp event="{data.chosen_event}" />
        <h1 class="text-5xl">
            {data.chosen_event}
        </h1>
        <EventStamp event="{data.chosen_event}" />
    </div>
</div>

<h1 class="flex items-center justify-center h-32 gap-10 text-5xl">
    Single
</h1>

<div class="w-[70vw] mx-auto mt-30">
    <table class="table-auto w-full border-collapse">
        <thead>
            <tr>
                <th class="border px-2 py-2">Rank</th>
                <th class="border rounded px-4 py-2">Time</th>
                <th class="border px-4 py-2">Person</th>
                <th class="border px-4 py-2">State</th>

            </tr>
        </thead>
        <tbody>
            {#each data.records_single as record, i}
                <tr>
                    <td class="border px-4 py-2">{i + 1}</td>
                    <td class="border px-4 py-2">{record.record_time}</td>
                    <td class="border px-4 py-2">{record.person}</td>
                    <td class="border px-4 py-2">{record.state}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<h1 class="flex items-center justify-center h-32 gap-10 text-5xl mt-20">
    Average
</h1>

<div class="w-[70vw] mx-auto mt-30">
    <table class="table-auto w-full border-collapse">
        <thead>
            <tr>
                <th class="border px-2 py-2">Rank</th>
                <th class="border rounded px-4 py-2">Time</th>
                <th class="border px-4 py-2">Person</th>
                <th class="border px-4 py-2">State</th>

            </tr>
        </thead>
        <tbody>
            {#each data.records_average as record, i}
                <tr>
                    <td class="border px-4 py-2">{i + 1}</td>
                    <td class="border px-4 py-2">{record.record_time}</td>
                    <td class="border px-4 py-2">{record.person}</td>
                    <td class="border px-4 py-2">{record.state}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .custom-border-gradient {
        border-width: 3px;
        border-image: linear-gradient(to top right, #4f46e5, #7c3aed, #ec4899) 1;
    }
</style>
