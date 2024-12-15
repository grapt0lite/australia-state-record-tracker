import { neon } from '@neondatabase/serverless';
import type { Record } from '../../types';
import { DATABASE_URL } from '$env/static/private';

const connectionString: string =
    DATABASE_URL;

const sql = neon(connectionString);

export async function load({  }) {
    // Explicitly cast the response to Track[] after the query execution
    const flagged_items = await sql`
    SELECT * 
    FROM public.flagged
    ` as unknown as Record[];

    return {
        flagged_items: flagged_items
    };
}