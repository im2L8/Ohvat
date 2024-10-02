const aboutUsBlocks = document.querySelectorAll('.about-us-block');

function checkVisibility(block) {
    const rect = block.getBoundingClientRect();
    const threshold = 0.5;
    return (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
    (rect.top <= window.innerHeight * threshold && rect.bottom >= 0);
}

window.addEventListener('scroll', () => {
    aboutUsBlocks.forEach(block => {
        if (checkVisibility(block)) {
            block.classList.add('on-visible');
        }
    });
});