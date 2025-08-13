document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.querySelector('.button-container');
    const openPopupBtn = document.getElementById('open-popup-btn');

    openPopupBtn.addEventListener('click', () => {

        const newWindow = window.open('5popup1.html', 'PopupMessages', 'width=400,height=600');
        
        if (newWindow) {
            openPopupBtn.remove();
            

            const goToPage4Btn = document.createElement('button');
            goToPage4Btn.id = 'nextpage-btn';
            goToPage4Btn.textContent = 'Access Live Updates';
            buttonContainer.appendChild(goToPage4Btn);


            goToPage4Btn.addEventListener('click', () => {
                window.location.href = '7news.html';
            });
        }
    });
});