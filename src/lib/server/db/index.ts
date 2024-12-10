import Database from "better-sqlite3";
import type { Track } from "../../../routes/types";

const db = new Database('./data/chinook.db', { verbose: console.log });

export function getInitialTracks(): Track[] {
    const sql = `SELECT t.TrackId as trackId,
                        t.Name as trackName,
                        a.AlbumId as albumId,
                        a.Title as albumTitle,
                        at.ArtistId as artistId,
                        at.Name as artistName,
                        g.Name as genre
                 FROM tracks t
                 JOIN albums a ON t.AlbumId = a.AlbumId
                 JOIN artists at ON a.ArtistId = at.ArtistId
                 JOIN genres g ON t.GenreId = g.GenreId
                 LIMIT 50`;

    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows as Track[]; // Ensure the data conforms to Track[]
}