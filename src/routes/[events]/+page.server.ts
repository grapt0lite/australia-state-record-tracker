import { neon } from '@neondatabase/serverless';
import type { Record } from '../types';
import { DATABASE_URL } from '$env/static/private';

const connectionString: string =
    DATABASE_URL;

const sql = neon(connectionString);

export async function load({ params }) {
    const chosen_event: string = params.events;
    // Explicitly cast the response to Track[] after the query execution
    const response_single = await sql`
    SELECT * 
    FROM public.records 
    WHERE record_event LIKE ${'%' + chosen_event + '%'}
        AND r_type LIKE 'single'
    ORDER BY record_time ASC
    ` as unknown as Record[];

    const response_average = await sql`
    SELECT * 
    FROM public.records 
    WHERE record_event LIKE ${'%' + chosen_event + '%'}
        AND r_type LIKE 'average'
    ORDER BY record_time ASC
    ` as unknown as Record[];

    return {
        records_single: response_single,
        records_average: response_average,
        chosen_event
    };
}