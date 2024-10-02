const button = document.querySelector('.to-top-button')

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});