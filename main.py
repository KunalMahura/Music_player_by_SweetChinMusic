# main.py

import pygame
from mutagen.mp3 import MP3
from tkinter import filedialog, Tk, Button, Label, Listbox, END, SINGLE, Scrollbar, RIGHT, Y

class MusicPlayer:
    def __init__(self, root):
        """
        Initializes the music player with a playlist and GUI using Tkinter and pygame.
        """
        self.root = root
        self.root.title("SweetChinMusic 🎵 Playlist Edition")
        self.root.geometry("400x400")

        pygame.init()
        pygame.mixer.init()

        self.playlist = []
        self.current_index = -1

        # Playlist Listbox
        self.listbox = Listbox(root, selectmode=SINGLE, width=50)
        self.listbox.pack(pady=10)

        scrollbar = Scrollbar(self.listbox)
        scrollbar.pack(side=RIGHT, fill=Y)
        self.listbox.config(yscrollcommand=scrollbar.set)
        scrollbar.config(command=self.listbox.yview)

        # Status Label
        self.label = Label(root, text="🎶 No song playing", wraplength=350)
        self.label.pack(pady=5)

        # Buttons
        Button(root, text="Add Songs", command=self.add_songs).pack(pady=2)
        Button(root, text="Play Selected", command=self.play_selected).pack(pady=2)
        Button(root, text="Play Next", command=self.play_next).pack(pady=2)
        Button(root, text="Play Previous", command=self.play_previous).pack(pady=2)
        Button(root, text="Pause", command=self.pause_music).pack(pady=2)
        Button(root, text="Unpause", command=self.unpause_music).pack(pady=2)
        Button(root, text="Stop", command=self.stop_music).pack(pady=2)

    def add_songs(self):
        """
        Adds multiple songs to the playlist using file dialog.
        """
        files = filedialog.askopenfilenames(filetypes=[("MP3 Files", "*.mp3")])
        for file in files:
            self.playlist.append(file)
            self.listbox.insert(END, file.split("/")[-1])

    def play_selected(self):
        """
        Plays the selected song from the playlist.
        """
        selected = self.listbox.curselection()
        if selected:
            self.current_index = selected[0]
            self.play_song(self.playlist[self.current_index])

    def play_song(self, filepath):
        """
        Loads and plays the specified song.
        """
        pygame.mixer.music.load(filepath)
        pygame.mixer.music.play()
        audio = MP3(filepath)
        self.label.config(text=f"Playing: {filepath.split('/')[-1]} ({round(audio.info.length)}s)")

    def play_next(self):
        """
        Plays the next song in the playlist.
        """
        if self.current_index + 1 < len(self.playlist):
            self.current_index += 1
            self.listbox.selection_clear(0, END)
            self.listbox.selection_set(self.current_index)
            self.play_song(self.playlist[self.current_index])

    def play_previous(self):
        """
        Plays the previous song in the playlist.
        """
        if self.current_index > 0:
            self.current_index -= 1
            self.listbox.selection_clear(0, END)
            self.listbox.selection_set(self.current_index)
            self.play_song(self.playlist[self.current_index])

    def pause_music(self):
        """Pauses the current music."""
        pygame.mixer.music.pause()

    def unpause_music(self):
        """Unpauses the music."""
        pygame.mixer.music.unpause()

    def stop_music(self):
        """Stops the music."""
        pygame.mixer.music.stop()

if __name__ == "__main__":
    root = Tk()
    app = MusicPlayer(root)
    root.mainloop()

