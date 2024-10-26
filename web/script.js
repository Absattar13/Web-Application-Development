function playSound(note) {
    const audio = new Audio(`Sounds/${note}.wav`);
    audio.play();
}