<script lang="ts">
    import '../../tailwind.css'
    import EventStamp from '../../components/EventStamp.svelte';
    import type { PageData } from "../$types";
    export let data: PageData;


    let state: string = "All";

    const flagHandler = async (e: Event, id: number) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/move_record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            });

            const data = await response.json();

            if (data.success) {
                alert('Record flagged successfully!');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to flag record');
        }
    };
</script>

<div class="justify-center flex items-center gap-5 mt-5 ml-5">
    <!-- Button -->
    <button class="mt-5 ml-5">
        <a href="/" class="bg-transparent hover:text-purple-300 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded custom-border-gradient">
            Back
        </a>
    </button>
    
    <!-- Other Elements (Flexed Horizontally) -->
    <div class="flex items-center justify-center h-32 gap-10">
        <EventStamp event="{data.chosen_event}" />
        <h1 class="text-5xl">
            {data.chosen_event}
        </h1>
        <EventStamp event="{data.chosen_event}" />
    </div>

    <!-- Select Box and Dropdown Icon -->
    <div class="relative flex items-center">
        <select bind:value={state} 
                class="block appearance-none bg-white border border-white text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-white" 
                id="grid-state">
            <option>All</option>
            <option>WA</option>
            <option>QLD</option>
            <option>NT</option>
            <option>VIC</option>
            <option>SA</option>
            <option>NSW</option>
            <option>ACT</option>
            <option>TAS</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg class="fill-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</div>


{#if data.chosen_event != "Multiblind"}
<h1 class="flex items-center justify-center h-32 gap-10 text-5xl">
    Single
</h1>
{/if}

<div class="w-[70vw] mx-auto mt-30">
    <table class="table-auto w-full border-collapse">
        <thead>
            <tr>
                <th class="border px-2 py-2">Rank</th>
                <th class="border rounded px-4 py-2">Result</th>
                <th class="border px-4 py-2">Person</th>
                <th class="border px-4 py-2">State</th>
            </tr>
        </thead>
        <tbody>
            {#each data.records_single.filter(record => state === "All" || record.state === state) as record, i}
                <tr>
                    <td class="border px-4 py-2 flex items-center space-x-2">
                        <span>{i + 1}</span> <!-- Ranking based on the filtered records -->
                        <svg on:click={(e) => flagHandler(e, record.id)} class="h-5 w-5 fill-current text-white " height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 65.456 65.456" xml:space="preserve">
                            <g>
                                <path d="M57.427,5.031C53.76,1.646,49.895,0,45.611,0c-5.052,0-9.663,2.314-14.123,4.553c-4.012,2.014-7.801,3.916-11.432,3.916
                                    c-2.742,0-5.203-1.092-7.745-3.438c-0.875-0.808-2.146-1.021-3.238-0.543c-1.023,0.448-1.698,1.425-1.78,2.526
                                    c-0.147,0.354-0.23,0.742-0.23,1.149v54.293c0,1.657,1.343,3,3,3s3-1.343,3-3V44.807c2.222,1.1,4.536,1.66,6.992,1.66
                                    c0,0,0.001,0,0.002,0c5.051-0.001,9.662-2.314,14.122-4.553c4.013-2.014,7.803-3.915,11.434-3.915c2.742,0,5.203,1.092,7.744,3.438
                                    c0.875,0.81,2.146,1.023,3.238,0.544c1.092-0.478,1.797-1.557,1.797-2.748V7.235C58.392,6.397,58.042,5.599,57.427,5.031z
                                     M52.392,33.534C50.236,32.506,47.989,32,45.613,32c-5.052,0-9.664,2.314-14.125,4.553c-4.012,2.013-7.801,3.914-11.431,3.915
                                    h-0.001c-2.393,0-4.572-0.833-6.778-2.605V12.934c2.156,1.029,4.403,1.535,6.779,1.535c5.052,0,9.664-2.314,14.123-4.553
                                    C38.192,7.902,41.982,6,45.612,6c2.395,0,4.574,0.833,6.78,2.605V33.534z"/>
                            </g>
                        </svg>
                    </td>
                    <td class="border px-4 py-2">{record.record_time}</td>
                    <td class="border px-4 py-2">{record.person}</td>
                    <td class="border px-4 py-2">{record.state}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>



{#if data.chosen_event != "Multiblind" }
<h1 class="flex items-center justify-center h-32 gap-10 text-5xl mt-20">
    Average
</h1>

<div class="w-[70vw] mx-auto mt-30 mb-20">
    <table class="table-auto w-full border-collapse">
        <thead>
            <tr>
                <th class="border px-2 py-2">Rank</th>
                <th class="border rounded px-4 py-2">Result</th>
                <th class="border px-4 py-2">Person</th>
                <th class="border px-4 py-2">State</th>
            </tr>
        </thead>
        <tbody>
            {#each data.records_average.filter(record => state === "All" || record.state === state) as record, i}
                <tr>
                    <td class="border px-4 py-2 flex items-center space-x-2">
                        <span>{i + 1}</span> <!-- Ranking based on the filtered records -->
                        <svg on:click={(e) => flagHandler(e, record.id)} class="h-5 w-5 fill-current text-white " height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 65.456 65.456" xml:space="preserve">
                            <g>
                                <path d="M57.427,5.031C53.76,1.646,49.895,0,45.611,0c-5.052,0-9.663,2.314-14.123,4.553c-4.012,2.014-7.801,3.916-11.432,3.916
                                    c-2.742,0-5.203-1.092-7.745-3.438c-0.875-0.808-2.146-1.021-3.238-0.543c-1.023,0.448-1.698,1.425-1.78,2.526
                                    c-0.147,0.354-0.23,0.742-0.23,1.149v54.293c0,1.657,1.343,3,3,3s3-1.343,3-3V44.807c2.222,1.1,4.536,1.66,6.992,1.66
                                    c0,0,0.001,0,0.002,0c5.051-0.001,9.662-2.314,14.122-4.553c4.013-2.014,7.803-3.915,11.434-3.915c2.742,0,5.203,1.092,7.744,3.438
                                    c0.875,0.81,2.146,1.023,3.238,0.544c1.092-0.478,1.797-1.557,1.797-2.748V7.235C58.392,6.397,58.042,5.599,57.427,5.031z
                                     M52.392,33.534C50.236,32.506,47.989,32,45.613,32c-5.052,0-9.664,2.314-14.125,4.553c-4.012,2.013-7.801,3.914-11.431,3.915
                                    h-0.001c-2.393,0-4.572-0.833-6.778-2.605V12.934c2.156,1.029,4.403,1.535,6.779,1.535c5.052,0,9.664-2.314,14.123-4.553
                                    C38.192,7.902,41.982,6,45.612,6c2.395,0,4.574,0.833,6.78,2.605V33.534z"/>
                            </g>
                        </svg>
                    </td>
                    <td class="border px-4 py-2">{record.record_time}</td>
                    <td class="border px-4 py-2">{record.person}</td>
                    <td class="border px-4 py-2">{record.state}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>


{/if}

<style>
    .custom-border-gradient {
        border-width: 3px;
        border-image: linear-gradient(to top right, #4f46e5, #7c3aed, #ec4899) 1;
    }
</style>
