// JavaScript Document

// Repository van Alle Muziekjes en de bijpassende attributen.

const songs = [
  {
    coverImage: "./images/prayer-cover.jpg",
    songName: "Dawn",
    artistName: "Akira Ashikawa",
    MusicContent: "./sounds/Dawn.mp3",
  },
  {
    coverImage: "./images/cover-placeholder.svg",
    songName: "Song 2",
    artistName: "Artist 2",
    MusicContent: "./sounds/Dawn.mp3",
  },
  {
    coverImage: "./images/cover-placeholder.svg",
    songName: "Song 3",
    artistName: "Artist 3",
    MusicContent: "./sounds/Dawn.mp3",
  },
  {
    coverImage: "./images/cover-placeholder.svg",
    songName: "Song 4",
    artistName: "Artist 4",
    MusicContent: "./sounds/Dawn.mp3",
  },
  {
    coverImage: "./images/cover-placeholder.svg",
    songName: "Song 5",
    artistName: "Artist 5",
    MusicContent: "./sounds/Dawn.mp3",
  },
];

const ul = document.querySelector("section div ul");
const playpauseButton = document.querySelector(
  "section:nth-of-type(3) div img:nth-of-type(2)"
);
const VinylRotate = document.querySelector(
  "section:nth-of-type(4) img:nth-of-type(2)"
);

const CurrentSongImage = document.querySelector(
  "section:nth-of-type(2) > img:first-of-type"
);

const CurrentSongImageVinyl = document.querySelector(
  "section:nth-of-type(4) img:nth-of-type(2)"
);

let currentAudio = null;
let speeltAf = false;

songs.forEach((song, index) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const songName = document.createElement("p");
  const artistName = document.createElement("p");

  img.src = song.coverImage;
  img.alt = "Current Song Cover";

  songName.textContent = song.songName;
  artistName.textContent = song.artistName;

  li.appendChild(img);
  li.appendChild(songName);
  li.appendChild(artistName);

  ul.appendChild(li);

  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
    }

    CurrentSongImage.src = song.coverImage;
    CurrentSongImageVinyl.src = song.coverImage;

    const audio = new Audio(song.MusicContent);
    audio.play();
    currentAudio = audio;
    console.log("playing muzic");
    playpauseButton.src = "./images/pauseKnop.svg";
    speeltAf = true;
    VinylRotate.classList.add("playing");
  });
});

// Code For the play/pause Button

playpauseButton.addEventListener("click", () => {
  if (currentAudio) {
    if (speeltAf) {
      currentAudio.pause();
      speeltAf = false;
      playpauseButton.src = "./images/play.svg";
      VinylRotate.classList.remove("playing");
    } else {
      currentAudio.play();
      speeltAf = true;
      playpauseButton.src = "./images/pauseKnop.svg";
      VinylRotate.classList.add("playing");
    }
  }
});

// Hamburger Menu

const BurgerButton = document.querySelector(
  "section:nth-of-type(2) > img:nth-of-type(2)"
);
const BurgerOpen = document.querySelector("section:nth-of-type(1)");
const BurgerCloseButton = document.querySelector(
  "section:nth-of-type(1) div:nth-of-type(1) img"
);

BurgerButton.addEventListener("click", () => {
  BurgerOpen.classList.add("MenuOpen");
  console.log("Open");
});

BurgerCloseButton.addEventListener("click", () => {
  BurgerOpen.classList.remove("MenuOpen");
  console.log("close");
});
