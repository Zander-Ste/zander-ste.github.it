navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
document.getElementById('webcam').srcObject = stream;
})
.catch(err => {
console.error('Webcam error:', err);
});
