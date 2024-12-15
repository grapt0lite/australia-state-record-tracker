<script lang="ts">
    import '../../../tailwind.css'
	import type { PageData } from "../$types";

    export let data: PageData;

    const unflagHandler = async (e: Event, id: number) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/unflag', {
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
                alert('Record unflagged successfully!');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to unflag record');
        }
    };

    const removeRecordHandler = async (e: Event, id: number) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/remove_record', {
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
                alert('Record removed successfully!');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to remove record');
        }
    };
</script>

<button class="mt-5 ml-5"><a href="/" class="bg-transparent hover:text-purple-300 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded custom-border-gradient">Back</a></button>

<h1 class="flex items-center justify-center h-32 gap-10 text-5xl">
    Flagged Items
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
            {#each data.flagged_items as record, i}
                <tr>
                    <td class="border px-4 py-2 flex items-center space-x-2">
                        <span><svg on:click={(e) => unflagHandler(e, record.id)} height="200px" width="200px" version="1.1" class="h-6 w-6" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:white;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path> </g> </g></svg></span>
                        <svg on:click={(e) => removeRecordHandler(e, record.id)} class="h-8 w-8 fill-current text-white " width="800px" height="800px" viewBox="0 0 24 24" fill="000000" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="white"/>
                    </td>
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