import { json } from '@sveltejs/kit';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$env/static/private';

const sql = neon(DATABASE_URL);

export async function POST({ request }) {
  try {
    const { id } = await request.json();

    // Validate input
    if (!id) {
      return json({ error: 'ID is required' }, { status: 400 });
    }

    // Move the entry from the records table to flagged table
    await sql`
      WITH moved AS (
        DELETE FROM public.records
        WHERE id = ${id}
        RETURNING *
      )
      INSERT INTO public.flagged (record_time, person, record_event, state, r_type)
      SELECT record_time, person, record_event, state, r_type
      FROM moved
    `;

    return json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return json({ error: 'Failed to move data' }, { status: 500 });
  }
}
