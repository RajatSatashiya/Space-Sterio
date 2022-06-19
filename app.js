const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const trackSelection = document.querySelectorAll(".track");
const music = document.querySelector(".music");
const musicSource = document.querySelector(".musicSource");
const volupBtn = document.querySelector(".volup");
const voldownBtn = document.querySelector(".voldown");
const forwardBtn = document.querySelector(".forward");
const backwardBtn = document.querySelector(".backward");
const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const playing = document.querySelector(".playing");
const voltext = document.querySelector(".voltext");

//values
var trackValue = "lofi";
var currentMusic = 0;
var vol = 10;
var index = 0;

const lofiPlaylist = [
  "https://datashat.net/music_for_programming_1-datassette.mp3",
  "https://datashat.net/music_for_programming_2-sunjammer.mp3",
  "https://datashat.net/music_for_programming_3-datassette.mp3",
  "https://datashat.net/music_for_programming_4-com_truise.mp3",
  "https://datashat.net/music_for_programming_5-abe_mangger.mp3",
  "https://datashat.net/music_for_programming_6-gods_of_the_new_age.mp3",
  "https://datashat.net/music_for_programming_7-tahlhoff_garten_and_untitled.mp3",
  "https://datashat.net/music_for_programming_8-connectedness_locus.mp3",
  "https://datashat.net/music_for_programming_9-datassette.mp3",
  "https://datashat.net/music_for_programming_10-unity_gain_temple.mp3",
];
const jazzPlaylist = ["./songs/Classic Soft Saxophone Jazz Music.mp3"];
const classicalPlaylist = [
  "./songs/Arthur Collins - In Ragtime Land 1912 Vintage Sheet Music Rag Time.mp3",
  "./songs/Sophie Tucker - Some Of These Days (1927).mp3",
  "./songs/Josef Strauss - Feuerfest Polka.mp3",
];
const romanPlaylist = ["./songs/AetasRomana.mp3"];
const playlists = {
  lofi: lofiPlaylist,
  retro: jazzPlaylist,
  classical: classicalPlaylist,
  roman: romanPlaylist,
};

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//select track
trackSelection.forEach((track) => {
  track.addEventListener("click", (e) => {
    index = 0;
    trackValue = e.target.innerHTML.split(" ")[0].toLowerCase();
    document.body.style.background = `url("./background/${trackValue}.png")`;
    document.body.style.backgroundSize = "cover";
    music.src = playlists[trackValue][0];
    startPause();
  });
});

//increase volume
volupBtn.addEventListener("click", () => {
  if (vol != 10) {
    vol += 1;
    music.volume = vol / 10;
    voltext.innerHTML = music.volume * 100 + " % ";
  }
});

//decrease volume
voldownBtn.addEventListener("click", () => {
  if (vol != 0) {
    vol -= 1;
    music.volume = vol / 10;
    voltext.innerHTML = music.volume * 100 + " % ";
  }
});

//forward the music
forwardBtn.addEventListener("click", () => {
  music.currentTime += 20;
});

//backward the music
backwardBtn.addEventListener("click", () => {
  music.currentTime -= 20;
});

//start
startBtn.addEventListener("click", () => {
  startPause();
});

const startPause = () => {
  if (music.paused) {
    music.play();
    changePlaying(index);
    startBtn.classList.remove("fa-play-circle");
    startBtn.classList.add("fa-pause-circle");
  } else {
    music.pause();
    startBtn.classList.add("fa-play-circle");
    startBtn.classList.remove("fa-pause-circle");
  }
};

//next music
nextBtn.addEventListener("click", () => {
  index = (index + 1) % playlists[trackValue].length;

  music.src = playlists[trackValue][index];
  music.load();
  music.play();
  changePlaying(index);
});

prevBtn.addEventListener("click", () => {
  if (index != 0) {
    index--;
    music.src = playlists[trackValue][index];
    music.load();
    music.play();
    changePlaying(index);
  } else {
    index = playlists[trackValue].length - 1;
    music.src = playlists[trackValue][index];
    music.load();
    music.play();
    changePlaying(index);
  }
});

const changePlaying = (index) => {
  var title = playlists[trackValue][index].split("/");
  playing.innerHTML = "Now Playing: ";
  playing.innerHTML += title[title.length - 1].split(".")[0].toUpperCase();
};
