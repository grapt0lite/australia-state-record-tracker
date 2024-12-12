export interface Track {
    track_name: string;
    artist_name: string;
    album_title: string;
    genre: string;
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
    tracks: Track[]; // Array of Track objects
};