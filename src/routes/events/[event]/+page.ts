export async function load({params}) {
    const chosen_event = params.event;

    return { data: { chosen_event } };
}
