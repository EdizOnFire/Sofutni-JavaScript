function solve(arr) {
    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist;
            this.name = name;
            this.time = time;
        }
    }

    let n = Number(arr.shift());
    let desiredPlaylist = arr.pop();
    for (let i = 0; i < n; i++) {
        let songData = arr[i].split("_");
        let currentSong = new Song(songData[0], songData[1], songData[2]);
        if (currentSong.playlist === desiredPlaylist) {
            console.log(currentSong.name);
        } else if (desiredPlaylist === "all") {
            console.log(currentSong.name);
        }
    }
}

solve([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "all",
]);
