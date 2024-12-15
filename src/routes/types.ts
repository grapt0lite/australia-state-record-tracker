export interface Record {
    record_time: string;
    person: string;
	record_event: string;
    state: string;
    id: number;
    chosen_event: any;
}
export type PageData = {
    records: Record[];
    chosen_event: any; // Array of Track objects
};