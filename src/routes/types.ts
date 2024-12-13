export interface Record {
    record_time: string;
    person: string;
    date_set: string;
    offical: string;
	record_event: string;
}
export type PageData = {
    records: Record[]; // Array of Track objects
};