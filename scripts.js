document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.classList.add('fade-out');
        loadingScreen.addEventListener('animationend', () => {
            loadingScreen.style.display = 'none';
        });
    }, 1000); // Adjust the timeout duration as needed
})