export const load = ({ data, params }) => {
    const chosen_event = params.events;
    return {
      chosen_event,
      ...data
    }
  }