//song playlist
const songName = [
  "Classic Soft Saxphone - Jazz Music",
  "1-datassette",
  "2-sunjammer",
  "3-datassette",
  "4-com truise",
  "5-abe mangger",
  "6-gods of the new age",
  "7-tahlhoff garten and untitled",
  "8-connectedness locus",
  "9-datassette",
  "10-unity gain temple",
];
//textual functions
const changePlaying = (currentMusic) => {
  playing.innerHTML = "Now Playing: ";
  playing.innerHTML += songName[currentMusic].toUpperCase();
};
