document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById("audio-element");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const totalDurationDisplay = document.getElementById("total-duration");
    const nowPlayingTitle = document.getElementById("now-playing-title");
    const nowPlayingChannel = document.getElementById("now-playing-channel");
    const nowPlayingDuration = document.getElementById("now-playing-duration");
    const themeToggleButton = document.querySelector(".theme-toggle");
    const searchInput = document.getElementById("search-bar");
    const playPauseButton = document.querySelector(".play-pause-button");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentAudioSrc = null;
    let currentSongIndex = 0;

    const songs = [
        { title: "Tauba Tauba", singer: "Karan Aujla", src: "audio/Tauba Tauba.mp3", duration: "3:45" },
        { title: "Softly", singer: "Karan Aujla", src: "audio/Softly.mp3", duration: "2:59" },
        { title: "Gumaan", singer: "Talha Anjum", src: "audio/Gumaan.mp3", duration: "4:20" },
        { title: "Been A While", singer: "KR$NA", src: "audio/been a while.mp3", duration: "3:48" },
        { title: "Levels", singer: "Sidhu Moose Wala", src: "audio/Level.mp3", duration: "3:52" },
        { title: "Lifestyle", singer: "Sidhu Moose Wala", src: "audio/lifestyle.mp3", duration: "4:18" },
        { title: "Hoshwalon Ko Khabar Kya", singer: "Jagjit Singh", src: "audio/hoshwalon.mp3", duration: "5:07" },
        { title: "One Bottle Down", singer: "Yo Yo Honey Singh", src: "audio/one bottle down.mp3", duration: "3:17" },
        { title: "Hothon Se Chhu Lo Tum", singer: "Jagit Singh", src: "audio/hothon.mp3", duration: "4:57" },
        { title: "Gulabi Aankhein", singer: "Sanam", src: "audio/gulabi.mp3", duration: "3:17" },
        
    ];

    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggleButton.textContent = "🌞";
    }

    themeToggleButton.addEventListener("click", toggleTheme);

    audioElement.addEventListener("loadedmetadata", () => {
        totalDurationDisplay.textContent = formatTime(audioElement.duration);
        progressBar.max = audioElement.duration;
    });

    function updateProgressBar() {
        progressBar.value = audioElement.currentTime;
        currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
        if (!audioElement.paused) {
            requestAnimationFrame(updateProgressBar);
        }
    }

    audioElement.addEventListener("play", () => requestAnimationFrame(updateProgressBar));

    progressBar.addEventListener("input", () => {
        audioElement.currentTime = progressBar.value;
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

    prevButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; 
        loadSong(currentSongIndex);
    });

    nextButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length; 
        loadSong(currentSongIndex);
    });

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audioElement.src = song.src;
        currentAudioSrc = song.src;

        nowPlayingTitle.textContent = `Title: ${song.title}`;
        nowPlayingChannel.textContent = `Singer: ${song.singer}`;
        nowPlayingDuration.textContent = `Duration: ${song.duration}`;

        audioElement.load();
        audioElement.play();
        playPauseButton.textContent = "⏸️"; 
    }


    loadSong(currentSongIndex);

    const thumbnails = document.querySelectorAll(".thumbnail-row");
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const audioSrc = thumbnail.getAttribute("data-audio-src");
            const videoTitle = thumbnail.getAttribute("data-title");
            const videoAuthor = thumbnail.getAttribute("data-author");
            const videoDuration = thumbnail.getAttribute("data-duration");

            if (audioSrc && audioSrc !== currentAudioSrc) {
                audioElement.src = audioSrc;
                currentAudioSrc = audioSrc;

                nowPlayingTitle.textContent = `Title: ${videoTitle}`;
                nowPlayingChannel.textContent = `Singer: ${videoAuthor}`;
                nowPlayingDuration.textContent = `Duration: ${videoDuration}`;

                audioElement.play();
                playPauseButton.textContent = "⏸️";
            }
        });
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const videoRows = document.querySelectorAll(".thumbnail-row");

        videoRows.forEach((row) => {
            const title = row.getAttribute("data-title").toLowerCase();
            if (title.includes(searchTerm)) {
                row.style.display = "flex";
            } else {
                row.style.display = "none";
            }
        });
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-theme");
        const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", theme);
        themeToggleButton.textContent = theme === "dark" ? "🌞" : "🌙";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger-menu");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    hamburgerBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        mainContent.classList.toggle("shifted"); 

        const likeButtons = document.querySelectorAll(".like-button");
    likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked"); 
        });
    });
});
    });;
