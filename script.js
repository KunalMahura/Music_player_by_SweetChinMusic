const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

// Music playback logic
const playButton = document.querySelector('.play-button');
const audioPlayer = document.getElementById('audio-player');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.classList.add('bx-pause');
    playButton.classList.remove('bxs-right-arrow');
  } else {
    audioPlayer.pause();
    playButton.classList.remove('bx-pause');
    playButton.classList.add('bxs-right-arrow');
  }
});
