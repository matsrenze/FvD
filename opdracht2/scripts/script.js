// JavaScript Document

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
let currentAudio = null;
let speeltAf = false;

songs.forEach((song) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const songName = document.createElement("p");
  const artistName = document.createElement("p");

  img.src = song.coverImage;
  img.alt = "Cover Image";

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

    const audio = new Audio(song.MusicContent);
    audio.play();
    currentAudio = audio;
    console.log("playing muzic");
    playpauseButton.src = "./images/pauseKnop.svg";
    speeltAf = true;
  });
});

// Code For the play/pause Button

playpauseButton.addEventListener("click", () => {
  if (currentAudio) {
    if (speeltAf) {
      currentAudio.pause();
      speeltAf = false;
      playpauseButton.src = "./images/play.svg";
    } else {
      currentAudio.play();
      speeltAf = true;
      playpauseButton.src = "./images/pauseKnop.svg";
    }
  }
});
