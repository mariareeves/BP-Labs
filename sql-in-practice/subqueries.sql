-- Subqueries
-- Get all invoices where the unit_price on the invoice_line is greater than $0.99.
select * from invoices where invoice_id in (SELECT invoice_id from invoice_line where unit_price > 0.99)

-- Get all playlist tracks where the playlist name is Music.
SELECT * from playlist_tracks where playlist_id in ( SELECT playlist_id from playlists where playlist_name = 'Music'
);

-- Get all track names for playlist_id 5.
SELECT track_name from tracks where track_id in (SELECT track_id from playlist_tracks where playlist_id = 5);

-- Get all tracks where the genre is Comedy.
SELECT * from tracks where genre_id( SELECT genre_id from genres where genre_name = 'Comedy')

-- Get all tracks where the album is Fireball.
SELECT * from tracks where album_id in(SELECT album_id from albums where album_name = "Fireball")

-- Get all tracks for the artist Queen ( 2 nested subqueries ).
SELECT from tracks where album_id in (SELECT album_id from artists where artist_name = 'Queen')