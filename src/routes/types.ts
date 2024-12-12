export interface Record {
    record_time: string;
    person: string;
    date_set: string;
    offical: string;
	record_event: string;
}


export type Album = {
	albumId: number;
	albumTitle: string;
	artistId: number;
	artistName: string;
};

export type AlbumTrack = {
	trackId: number;
	trackName: string;
	trackMs: number;
};

export type PageData = {
    records: Record[]; // Array of Track objects
};