import { Pool } from 'pg';
import type { QueryResultRow } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export const query = async <T extends QueryResultRow>(text: string, params?: any[]): Promise<T[]> => {
    const client = await pool.connect();
    try {
        const res = await client.query<T>(text, params);
        return res.rows;
    } finally {
        client.release();
    }
};
