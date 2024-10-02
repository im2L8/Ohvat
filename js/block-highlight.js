window.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.why-tg-block');
    const windowHeight = window.innerHeight;
    blocks.forEach((block, index) => {
    const blockTop = block.offsetTop;
    const blockBottom = blockTop + block.offsetHeight;
    if (blockTop < window.scrollY + windowHeight / 2 &&
        blockBottom > window.scrollY + windowHeight / 2) {
            blocks.forEach(b => b.classList.remove('on-sight'));
            block.classList.add('on-sight');
        }
    });
});