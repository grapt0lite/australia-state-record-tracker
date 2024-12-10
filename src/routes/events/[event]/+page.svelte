<script lang="ts">
    export let data;
    import EventStamp from '../../../components/EventStamp.svelte';
    let event: String = data.data.chosen_event;
</script>

<main>
    <div>
        <div class="flex items-center justify-center h-32 gap-10">
            <EventStamp {event} />
            <h1 class="text-5xl">
                {event}
            </h1>
            <EventStamp {event} />
        </div>
    </div>
</main>