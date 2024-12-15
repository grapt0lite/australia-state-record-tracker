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
SELECT *,
       CASE 
           WHEN record_time LIKE '%/% %' THEN 
               -- Calculate the total points: X - (Y - X) = 2X - Y
               (2 * CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 1), '/', 1) AS NUMERIC)) - 
               CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 1), '/', 2) AS NUMERIC)
           ELSE 
               -- Default points if not in multiblind format
               0
       END AS points,
       CASE 
           WHEN record_time LIKE '%/% %' THEN 
               -- Convert minute:second.millisecond to total seconds for multiblind time
               (CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 2), ':', 1) AS NUMERIC) * 60) + 
               CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 2), ':', 2) AS NUMERIC)
           WHEN record_time LIKE '%:%' THEN 
               -- Convert minute:second.millisecond to total seconds for regular times
               (CAST(SPLIT_PART(record_time, ':', 1) AS NUMERIC) * 60) + 
               CAST(SPLIT_PART(record_time, ':', 2) AS NUMERIC)
           ELSE 
               -- Assume it's already in seconds for regular times
               CAST(record_time AS NUMERIC)
       END AS time_in_seconds
FROM public.records
WHERE record_event LIKE ${chosen_event}
  AND r_type LIKE 'single'
ORDER BY points DESC, time_in_seconds ASC;


    ` as unknown as Record[];

    console.log(response_single)

    const response_average = await sql`
SELECT *,
       CASE 
           WHEN record_time LIKE '%/% %' THEN 
               -- Compute the ranking value for 12/13 45:56.32
               CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 1), '/', 1) AS NUMERIC) - 
               (CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 1), '/', 2) AS NUMERIC) - 
                CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 1), '/', 1) AS NUMERIC))
           ELSE 
               -- Default ranking value for normal times
               0
       END AS rank_value,
       CASE 
           WHEN record_time LIKE '%/% %' THEN 
               -- Convert minute:second.millisecond to total seconds for 12/13 format
               (CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 2), ':', 1) AS NUMERIC) * 60) + 
               CAST(SPLIT_PART(SPLIT_PART(record_time, ' ', 2), ':', 2) AS NUMERIC)
           WHEN record_time LIKE '%:%' THEN 
               -- Convert minute:second.millisecond to total seconds for regular times
               (CAST(SPLIT_PART(record_time, ':', 1) AS NUMERIC) * 60) + 
               CAST(SPLIT_PART(record_time, ':', 2) AS NUMERIC)
           ELSE 
               -- Assume it's already in seconds for regular times
               CAST(record_time AS NUMERIC)
       END AS time_in_seconds
FROM public.records
WHERE record_event LIKE ${chosen_event}
  AND r_type LIKE 'single'
ORDER BY rank_value ASC, time_in_seconds ASC;
    ` as unknown as Record[];

    return {
        records_single: response_single,
        records_average: response_average,
        chosen_event
    };
}