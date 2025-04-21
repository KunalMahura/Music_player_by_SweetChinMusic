document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById("audio-element");
    const playPauseButton = document.getElementById("play-pause-button");
    const currentSongTitle = document.getElementById("current-song-title");
    const currentArtist = document.getElementById("current-artist");
    let currentAudioSrc = null;

    const songCards = document.querySelectorAll(".song-card");
    songCards.forEach((card) => {
        card.addEventListener("click", () => {
            const audioSrc = card.getAttribute("data-audio-src");
            const title = card.getAttribute("data-title");
            const artist = card.getAttribute("data-artist");

            if (audioSrc && audioSrc !== currentAudioSrc) {
                audioElement.src = audioSrc;
                currentAudioSrc = audioSrc;

                currentSongTitle.textContent = title;
                currentArtist.textContent = artist;

                audioElement.play();
                playPauseButton.textContent = "⏸️"; 
            }
        });
    });

    playPauseButton.addEventListener("click", () => {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = "⏸️";
        } else {
            audioElement.pause();
            playPauseButton.textContent = "⏯️";
        }
    });

    audioElement.addEventListener("ended", () => {
        playPauseButton.textContent = "⏯️";
    });
});
