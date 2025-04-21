# main.py

import pygame
from mutagen.mp3 import MP3
from tkinter import filedialog, Tk, Button, Label

class MusicPlayer:
    def __init__(self, root):
        """
        Initializes the music player with a Tkinter GUI and pygame mixer.
        """
        self.root = root
        self.root.title("SweetChinMusic 🎵")
        self.root.geometry("300x150")

        pygame.init()
        pygame.mixer.init()

        self.filename = ""
        self.label = Label(root, text="No song loaded", wraplength=250)
        self.label.pack(pady=10)

        Button(root, text="Load Song", command=self.load_song).pack()
        Button(root, text="Play", command=self.play_music).pack()
        Button(root, text="Pause", command=self.pause_music).pack()
        Button(root, text="Unpause", command=self.unpause_music).pack()
        Button(root, text="Stop", command=self.stop_music).pack()

    def load_song(self):
        """
        Opens a file dialog to choose a song file.
        """
        self.filename = filedialog.askopenfilename(filetypes=[("MP3 files", "*.mp3")])
        if self.filename:
            pygame.mixer.music.load(self.filename)
            audio = MP3(self.filename)
            self.label.config(text=f"Loaded: {self.filename.split('/')[-1]}\nLength: {round(audio.info.length, 2)} sec")

    def play_music(self):
        """
        Starts playing the loaded music file.
        """
        if self.filename:
            pygame.mixer.music.play()

    def pause_music(self):
        """
        Pauses the currently playing music.
        """
        pygame.mixer.music.pause()

    def unpause_music(self):
        """
        Resumes the paused music.
        """
        pygame.mixer.music.unpause()

    def stop_music(self):
        """
        Stops the music playback.
        """
        pygame.mixer.music.stop()

if __name__ == "__main__":
    root = Tk()
    app = MusicPlayer(root)
    root.mainloop()
