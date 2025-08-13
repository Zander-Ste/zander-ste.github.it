document.getElementById('myButton').addEventListener('click', function() {
    window.location.href = '2footage1.html';
});

const popup = document.getElementById('popup');

function showPopup() {
    popup.style.display = 'flex';
}

function hidePopup() {
    popup.style.display = 'none';
}

window.addEventListener('load', showPopup);

document.addEventListener('click', function(event) {

    if (!popup.contains(event.target) || event.target === popup) {
        hidePopup();
    }
});