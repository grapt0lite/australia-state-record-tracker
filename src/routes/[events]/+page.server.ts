import { neon } from '@neondatabase/serverless';
import type { Track } from '../types';
import { DATABASE_URL } from '$env/static/private';

const connectionString: string =
    DATABASE_URL;

const sql = neon(connectionString);

export async function load() {
    // Explicitly cast the response to Track[] after the query execution
    const response = await sql`
        SELECT track_name, artist_name, album_title, genre 
        FROM tracks
    ` as unknown as Track[];

    return {
        tracks: response,
    };
}