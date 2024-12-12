<script lang="ts">
    import '../../tailwind.css'
    import EventStamp from '../../components/EventStamp.svelte';
    import type { PageData } from "../$types";
    export let data: PageData;

</script>

<div>
    <div class="flex items-center justify-center h-32 gap-10">
        <EventStamp event="{data.chosen_event}" />
        <h1 class="text-5xl">
            {data.chosen_event}
        </h1>
        <EventStamp event="{data.chosen_event}" />
    </div>
</div>

{console.log(data.records)}

<h1>Hello!</h1>

<div class="w-[70vw] mx-auto mt-30">
    <table class="table-auto w-full border-collapse">
        <thead>
            <tr>
                <th class="border rounded px-4 py-2">Time</th>
                <th class="border px-4 py-2">Person</th>
                <th class="border px-4 py-2">Date</th>
                <th class="border px-4 py-2">Official</th>
                <th class="border px-4 py-2">Event</th>
            </tr>
        </thead>
        <tbody>
            {#each data.records as record}
                <tr>
                    <td class="border px-4 py-2">{record.record_time}</td>
                    <td class="border px-4 py-2">{record.person}</td>
                    <td class="border px-4 py-2">{record.date_set}</td>
                    <td class="border px-4 py-2">{record.official}</td>
                    <td class="border px-4 py-2">{record.record_event}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
