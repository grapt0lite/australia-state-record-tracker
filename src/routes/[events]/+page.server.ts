import { neon } from '@neondatabase/serverless';
import type { Record } from '../types';
import { DATABASE_URL } from '$env/static/private';

const connectionString: string =
    DATABASE_URL;

const sql = neon(connectionString);

export async function load({ params }) {
    const chosen_event: string = params.events;
    // Explicitly cast the response to Track[] after the query execution
    const response = await sql`
    SELECT * 
    FROM public.records 
    WHERE record_event LIKE ${'%' + chosen_event + '%'}
    ORDER BY record_time ASC
    ` as unknown as Record[];

    return {
        records: response,
        chosen_event
    };
}