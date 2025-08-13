document.addEventListener('DOMContentLoaded', () => {
    const dialogueBox = document.getElementById('dialogue-box');
    const lines = document.querySelectorAll('#dialogue-text span');
    const nextPageButton = document.getElementById('next-page-button');
    const body = document.getElementById('dynamicBackground');
    const images = [
        'images/1scene1.jpg',
        'images/2scene1.jpg',
        'images/3scene1.jpg',
        'images/4scene1.jpg',
        'images/5scene1.jpg',
        'images/6scene1.jpg'
    ];
    let currentImageIndex = 0;
    

    const lineDelay = 2500;

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function changeBackground() {
        body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }


    const heading = document.querySelector('.Heading');

    const startDialogue = async () => {

        if (heading) {
            heading.style.display = 'none';
        }
        
        dialogueBox.classList.add('is-active');
        changeBackground();
        setInterval(changeBackground, 6000);


        for (let i = 1; i < lines.length; i++) {
            lines[i].classList.add('visible');
            lines[i].scrollIntoView({ behavior: 'smooth', block: 'end' });
            await wait(lineDelay);
        }

        nextPageButton.classList.add('visible');
    };


    dialogueBox.addEventListener('click', startDialogue, { once: true });
    

    document.addEventListener('click', () => {
        const audio = document.getElementById('background-audio');
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
    }, { once: true });
});

document.getElementById('next-page-button').addEventListener('click', function() {
    window.location.href = '3footage2.html';
});