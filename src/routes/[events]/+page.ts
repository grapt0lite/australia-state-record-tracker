export const load = ({ data, params }) => {
    const chosen_event: string = params.events;
    return {
      chosen_event,
      ...data
    }
  }