// JavaScript Document

// Repository van Alle Muziekjes en de bijpassende attributen.

const songs = [
  {
    coverImage: "./images/prayer-cover.jpg",
    songName: "Dawn",
    artistName: "Akira Ashikawa",
    MusicContent: "./sounds/Dawn.mp3",
    duration: 313,
    trackValue: 0,
  },
  {
    coverImage: "./images/taykcover.jpg",
    songName: "Gotta Blast",
    artistName: "Tay-K",
    MusicContent: "./sounds/gottablast.mp3",
    duration: 131,
    trackValue: 1,
  },
  {
    coverImage: "./images/fantaisieIMG.jpg",
    songName: "Fantaisie Sign",
    artistName: "Carla Vallet",
    MusicContent: "./sounds/FantaisieSign.mp3",
    duration: 298,
    trackValue: 2,
  },
  {
    coverImage: "./images/kimba.jpg",
    songName: "Having Fun",
    artistName: "Kimba Unit",
    MusicContent: "./sounds/Dawn.mp3",
    duration: 330,
    trackValue: 3,
  },
  {
    coverImage: "./images/ssx.jpg",
    songName: "SSX",
    artistName: "The Hellp",
    MusicContent: "./sounds/Ssx.mp3",
    duration: 216,
    trackValue: 4,
  },
  {
    coverImage: "./images/aroundfur.jpg",
    songName: "Shove it",
    artistName: "Deftones",
    MusicContent: "./sounds/summer.mp3",
    duration: 225,
    trackValue: 5,
  },
  {
    coverImage: "./images/hef.jpg",
    songName: "Stoomtrein",
    artistName: "Hef",
    MusicContent: "./sounds/Stoomtrein.mp3",
    duration: 200,
    trackValue: 6,
  },
];

const ul = document.querySelector("section div ul");

const playpauseButton = document.querySelector(
  "section:nth-of-type(3) div img:nth-of-type(2)"
);

const skipForwardButton = document.querySelector(
  "section:nth-of-type(3) div img:nth-of-type(3)"
);
const skipBackwardButton = document.querySelector(
  "section:nth-of-type(3) div img:nth-of-type(1)"
);

const playSong = (song) => {
  if (currentAudio) {
    currentAudio.pause();
  }
};

const VinylRotate = document.querySelector(
  "section:nth-of-type(4) img:nth-of-type(2)"
);

const CurrentSongImage = document.querySelector(
  "section:nth-of-type(2) > img:first-of-type"
);

const CurrentSongImageVinyl = document.querySelector(
  "section:nth-of-type(4) img:nth-of-type(2)"
);

const CurrentSongTitle = document.querySelector("section:nth-of-type(2) h2");
const CurrentSongArtist = document.querySelector("section:nth-of-type(2) h3");

let currentAudio = null;
let speeltAf = false;
let currentTrackValue = -1;

songs.forEach((song) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const songName = document.createElement("p");
  const artistName = document.createElement("p");

  img.src = song.coverImage;
  img.alt = "Current Song Cover";

  songName.textContent = song.songName;
  artistName.textContent = song.artistName;

  li.dataset.trackValue = song.trackValue;

  li.appendChild(img);
  li.appendChild(songName);
  li.appendChild(artistName);

  ul.appendChild(li);
  // When an image in the Your Tracks menu is clicked the following function is activated, and the
  // Corresponding song starts playing.

  img.addEventListener("click", (e) => {
    var clickTrackValue = parseInt(e.target.closest("li").dataset.trackValue);
    // Code For the play/pause Button
    goToSong(songs[clickTrackValue]);
  });
});

// // Code For the play/pause Button

const playPause = () => {
  if (currentAudio) {
    if (speeltAf) {
      currentAudio.pause();
      speeltAf = false;
      playpauseButton.src = "./images/play.svg";
      VinylRotate.classList.remove("playing");
      console.log("Pause");
    } else {
      currentAudio.play();
      speeltAf = true;
      playpauseButton.src = "./images/pauseKnop.svg";
      VinylRotate.classList.add("playing");
      console.log("Play");
    }
  }

  handleVoiceRecognition();
};

playpauseButton.addEventListener("click", playPause);

const goToSong = (song) => {
  currentTrackValue = song.trackValue;
  playSong(song);
  console.log(song.trackValue);

  currentTrackValue = song.trackValue;

  // Replacing image in accordance with a song | Feedback
  CurrentSongImage.src = song.coverImage;
  CurrentSongImageVinyl.src = song.coverImage;
  playpauseButton.src = "./images/pauseKnop.svg";

  // Replaces Text content in accordance with the currently playing track

  CurrentSongTitle.textContent = song.songName;
  CurrentSongArtist.textContent = song.artistName;

  const audio = new Audio(song.MusicContent);
  audio.play();
  currentAudio = audio;
  console.log("playing music");

  speeltAf = true;
  VinylRotate.classList.add("playing");

  // This code is responsible for moving the slider in accordance with the progress of the current track.

  const musicSlider = document.querySelector("input");
  musicSlider.value = 0;
  musicSlider.max = song.duration;

  // Adds an eventlistener to the slider that links the progress of the song to the value of the slider input.
  // This gives the user the ability to skip the progress of the track to a desired point.

  musicSlider.addEventListener("input", () => {
    audio.currentTime = musicSlider.value;
  });

  //Increases the slider value in accordance with the progress of the song in seconds.

  const updateSlider = () => {
    musicSlider.value = audio.currentTime;
  };

  // This eventlistener activates UpdateSlider everytime the the songs progresses a second.
  audio.addEventListener("timeupdate", updateSlider);

  //Removes previous eventlistener when the song has ended.
  audio.addEventListener("ended", () => {
    audio.removeEventListener("timeupdate", updateSlider);
    goToNextSong();
  });

  handleVoiceRecognition();
};

const goToNextSong = () => {
  var songToPlay;

  if (currentTrackValue == -1) {
    songToPlay = 0;
  } else if (currentTrackValue == songs.length - 1) {
    songToPlay = 0;
  } else {
    songToPlay = currentTrackValue + 1;
  }
  goToSong(songs[songToPlay]);
};

const goToPrevSong = () => {
  var songToPlay;

  if (currentTrackValue == -1) {
    songToPlay = songs.length - 1;
  } else if (currentTrackValue == 0) {
    songToPlay = songs.length - 1;
  } else {
    songToPlay = currentTrackValue - 1;
  }
  goToSong(songs[songToPlay]);
};

skipForwardButton.addEventListener("click", goToNextSong);
skipBackwardButton.addEventListener("click", goToPrevSong);

// Hamburger Menu

const BurgerButton = document.querySelector(
  "section:nth-of-type(2) > button"
);
const BurgerOpen = document.querySelector("section:nth-of-type(1)");
const BurgerCloseButton = document.querySelector(
  "section:nth-of-type(1) div:nth-of-type(1) button"
);

BurgerButton.addEventListener("click", () => {
  BurgerOpen.classList.add("MenuOpen");
  console.log("Open");
});

BurgerCloseButton.addEventListener("click", () => {
  BurgerOpen.classList.remove("MenuOpen");
  console.log("close");
});

// Voice Recognition

const handleVoiceRecognition = () => {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  // Configure recognition options
  recognition.lang = "en-US";

  // Start recognition
  recognition.start();

  console.log("Listening");

  // Event handler for voice recognition results
  recognition.onresult = (event) => {
    const transcript =
      event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log("Recognized speech:", transcript);

    // Check if the recognized speech matches the command "boring"
    if (transcript.includes("skip")) {
      goToNextSong();
    }
    if (transcript.includes("boring")) {
      goToNextSong();
    }

    if (transcript.includes("back")) {
      goToPrevSong();
    }

    if (transcript.includes("scratch")) {
      const scratchFX = new Audio("./sounds/recordScratch.mp3");
      scratchFX.play();

      VinylRotate.classList.remove("playing");
      VinylRotate.classList.add("scratch");
      setTimeout(() => {
        goToNextSong();
        VinylRotate.classList.remove("scratch");
        VinylRotate.classList.add("playing");
      }, 1100);
    }

    if (transcript.includes("pause")) {
      playPause();
    }

    if (transcript.includes("play")) {
      playPause();
    }

  };

  // Event handler for voice recognition errors
  recognition.onerror = (event) => {
    console.error("Voice recognition error:", event.error);
  };
};

handleVoiceRecognition();
