document.addEventListener('DOMContentLoaded', (event) => {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('myVideo');
    const playButton = document.getElementById('play-button');
    const subtitlesContainer = document.querySelector('.subtitles-container');

    videoContainer.addEventListener('click', () => {
        playButton.classList.add('hidden');

        video.muted = false;
        video.play().catch(error => {
            console.error("Video playback failed:", error);
        });

        subtitlesContainer.classList.remove('hidden');

    }, { once: true });

    video.addEventListener('ended', function() {
        window.location.href = '8report.html';
    });
});