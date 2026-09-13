let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(array);

const evenNums = array.filter((value, index) => {
  if (value % 2 == 0) {
    return value;
  }
});

console.log(evenNums);


let array2 = [10, 20, 3, 40, 5, 6, 70, 8, 9, 10, 11, 12, 13, 140];

const divisibleByTen = array2.filter((item) => item % 10 == 0);

console.log(divisibleByTen);

const songs = 
[
  { title: "Song 1", artist: "Artist A", duration: 180 },
  { title: "Song 2", artist: "Artist B", duration: 240 },
  { title: "Song 3", artist: "Artist A", duration: 210 },
  { title: "Song 4", artist: "Artist C", duration: 300 },
];

const longSongs = songs.filter((song) => song.duration > 200 );

console.log(longSongs);

const words = ["keyboard", "mouse", "monitor", "laptop", "desktop", "tablet"];

function findLongWords(word) {
  return word.length > 6;
}

const longWords = words.filter(findLongWords);

console.log(longWords);