<script lang="ts">
    import '../../../tailwind.css';
    let fullName = "";
    let result = "";
    let event = "";
    let state = "";
    let type = "";

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/add_record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    result: result,
                    person: fullName,
                    record_event: event,
                    state: state,
                    r_type: type
                })
            });

            const data = await response.json();

            if (data.success) {
                alert('Record submitted successfully!');
                // Reset form fields
                fullName = "";
                result = "";
                event = "";
                state = "";
                type = "";
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit record');
        }
    };
</script>

<button class="mt-5 ml-5"><a href="/" class="bg-transparent hover:text-purple-300 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded custom-border-gradient">Back</a></button>

<h1 class="text-center mt-5 text-5xl">
    Submit Your Record
</h1>

<div class="flex flex-row mt-20 justify-center items-center">
    <form class="w-full max-w-lg" on:submit={handleSubmit}>
        <div class="justify-center flex flex-wrap gap-3 mb-6">
            <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-name">
                    Full Name
                </label>
                <input bind:value={fullName} 
                       class="appearance-none block w-full bg-white text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                       id="grid-name" 
                       type="text" 
                       placeholder="John">
            </div>
        </div>

        <div class="flex flex-wrap gap-3 mb-6">
            <div class="w-full px-2">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-result">
                    Result
                </label>
                <input bind:value={result} 
                       class="appearance-none block w-full bg-white text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                       id="grid-result" 
                       type="text" 
                       placeholder="10.23">
            </div>
        </div>

        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-event">
                    Event
                </label>
                <div class="relative">
                    <select bind:value={event} 
                            class="block appearance-none w-full bg-white border border-white text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-white" 
                            id="grid-event">
                        <option>2x2</option>
                        <option>3x3</option>
                        <option>4x4</option>
                        <option>5x5</option>
                        <option>6x6</option>
                        <option>7x7</option>
                        <option>3x3 Blindfolded</option>
                        <option>4x4 Blindfolded</option>
                        <option>5x5 Blindfolded</option>
                        <option>Multiblind</option>
                        <option>FMC</option>
                        <option>One Handed</option>
                        <option>Pyraminx</option>
                        <option>Megaminx</option>
                        <option>Square-1</option>
                        <option>Skewb</option>
                        <option>Clock</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg class="fill-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-type">
                    Type
                </label>
                <div class="relative">
                    <select bind:value={type} 
                            class="block appearance-none w-full bg-white border border-white text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-white" 
                            id="grid-type">
                        <option>average</option>
                        <option>single</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg class="fill-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                    State
                </label>
                <div class="relative">
                    <select bind:value={state} 
                            class="block appearance-none w-full bg-white border border-white text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-white" 
                            id="grid-state">
                        <option>WA</option>
                        <option>QLD</option>
                        <option>NT</option>
                        <option>VIC</option>
                        <option>SA</option>
                        <option>NSW</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg class="fill-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div> 

        <div class="flex justify-left mt-4">
            <button
              type="submit"
              class="bg-transparent hover:bg-purple-300 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
        </div>       
    </form>
</div>



<style>
    .custom-border-gradient {
        border-width: 3px;
        border-image: linear-gradient(to top right, #4f46e5, #7c3aed, #ec4899) 1;
    }
</style>
