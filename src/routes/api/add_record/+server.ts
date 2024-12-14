import { json } from '@sveltejs/kit';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$env/static/private';

const sql = neon(DATABASE_URL);

export async function POST({ request }) {
  try {
    const { result, person, record_event, state, r_type } = await request.json();

    // Validate input
    if (!result || !person || !record_event || !state || !r_type) {
      return json({ error: 'All values are required' }, { status: 400 });
    }

    await sql`
      INSERT INTO public.records (record_time, person, record_event, state, r_type)
      VALUES (${result}, ${person}, ${record_event}, ${state}, ${r_type})
    `;

    return json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return json({ error: 'Failed to insert data' }, { status: 500 });
  }
}
