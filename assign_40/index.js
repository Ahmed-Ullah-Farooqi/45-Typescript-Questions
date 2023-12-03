"use strict";
function make_album(artist_name, album_title, no_tracks) {
    if (no_tracks === undefined) {
        return {
            artist: artist_name,
            title: album_title,
        };
    }
    else {
        return {
            artist: artist_name,
            title: album_title,
            tracks: no_tracks
        };
    }
}
let d1 = make_album("Atif Aslam", "Doorie", 4);
let d2 = make_album("Arijit singh", "Kesariya");
let d3 = make_album("Nusrat fateh ali khan", "Mustt Mustt");
console.log(d1);
console.log(d2);
