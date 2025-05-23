'use strict';



/**
 * all music information
 */

const musicData = [
    {
    backgroundImage: "./assets/images/Wavy.jpg",
    posterUrl: "./assets/images/Wavy.jpg",
    title: "Wavy",
    album: "Wavy",
    year: 2024,
    artist: "Karan Aujla",
    musicPath: "./assets/music/Wavy - Karan Aujla.mp3",
  },
  {
    backgroundImage: "./assets/images/hothon.jpg",
    posterUrl: "./assets/images/hothon.jpg",
    title: "Hothon se chhu lo tum",
    album: "Dard-E-Jigar",
    year: 1981,
    artist: "Jagjit Singh",
    musicPath: "./assets/music/hothon.mp3",
  },
  {
    backgroundImage: "./assets/images/tumsehi.jpg",
    posterUrl: "./assets/images/tumsehi.jpg",
    title: "Tum Se Hi",
    album: "Jab We Met",
    year: 2007,
    artist: "Pritam X Mohit Chauhan",
    musicPath: "./assets/music/tumsehi.mp3",
  },
  {
    backgroundImage: "./assets/images/Brown.jpg",
    posterUrl: "./assets/images/Brown.jpg",
    title: "Brown Rang",
    album: "International Villager",
    year: 2011,
    artist: "YoYo Honey Singh",
    musicPath: "./assets/music/brown.mp3",
  },
  {
    backgroundImage: "./assets/images/desikalakar.jpg",
    posterUrl: "./assets/images/desikalakar.jpg",
    title: "Desi Kalakaar",
    album: "Desi Kalakaar",
    year: 2014,
    artist: "YoYo Honey Singh",
    musicPath: "./assets/music/desikalakar.mp3",
  },
    {
    backgroundImage: "./assets/images/level.jpg",
    posterUrl: "./assets/images/level.jpg",
    title: "Level",
    album: "Level",
    year: 2024,
    artist: "Sidhu Moosewala",
    musicPath: "./assets/music/level.mp3",
  },
    {
    backgroundImage: "./assets/images/gumaan.jpg",
    posterUrl: "./assets/images/gumaan.jpg",
    title: "Gumaan",
    album: "Gumaan",
    year: 2022,
    artist: "Talha Anjum",
    musicPath: "./assets/music/Gumaan.mp3",
  },
    {
    backgroundImage: "./assets/images/softly.jpg",
    posterUrl: "./assets/images/softly.jpg",
    title: "Softly",
    album: "Making Memories",
    year: 2024,
    artist: "Karan Aujla",
    musicPath: "./assets/music/Softly.mp3",
  },
    {
    backgroundImage: "./assets/images/Dairy.jpg",
    posterUrl: "./assets/images/Dairy.jpg",
    title: "Dairy",
    album: "Judda2",
    year: 2015,
    artist: "Amrinder Gill",
    musicPath: "./assets/music/Dairy.mp3",
  },
     {
    backgroundImage: "./assets/images/Tareefan.jpg",
    posterUrl: "./assets/images/Tareefan.jpg",
    title: "Tareefan",
    album: "Tareefan",
    year: 2024,
    artist: "Karan Aujla",
    musicPath: "./assets/music/Tareefan.mp3",
  },
    
  {
    backgroundImage: "./assets/images/hothon.jpg",
    posterUrl: "./assets/images/hothon.jpg",
    title: "Hothon se chhu lo tum",
    album: "Dard-E-Jigar",
    year: 1981,
    artist: "Jagjit Singh",
    musicPath: "./assets/music/hothon.mp3",
  },
  {
    backgroundImage: "./assets/images/tumsehi.jpg",
    posterUrl: "./assets/images/tumsehi.jpg",
    title: "Tum Se Hi",
    album: "Jab We Met",
    year: 2007,
    artist: "Pritam X Mohit Chauhan",
    musicPath: "./assets/music/tumsehi.mp3",
  },
  {
    backgroundImage: "./assets/images/Sanu.jpg",
    posterUrl: "./assets/images/Sanu.jpg",
    title: "Sanu ek pal chain na aave",
    album: "Bolo ali Bolo",
    year: 1992 ,
    artist: "Nusrat Fateh Ali Khan",
    musicPath: "./assets/music/Sanu.mp3",
  },
    {
    backgroundImage: "./assets/images/luka.jpg",
    posterUrl: "./assets/images/luka.jpg",
    title: "Luka Chippi",
    album: "Luka Chippi",
    year: 2022,
    artist: "Seedhe Maut",
    musicPath: "./assets/music/luka.mp3",
  },
 
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
