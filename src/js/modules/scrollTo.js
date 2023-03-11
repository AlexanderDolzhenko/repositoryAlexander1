function scrollToPage() {
    const scrollDown = document.getElementById('scroll-action');
    const scrollToNode = document.getElementById('scroll-to');

    let currentScroll;
    let scrollAnimation;

    scrollDown.addEventListener('click', (event) => {
        event.preventDefault();
        stopAnimation();

        currentScroll = window.scrollY;
        startAnimation(scrollToNode.offsetTop - 80);
    });
    function startAnimation(newScrollY) {
        const formulaScroll = (newScrollY - currentScroll);

        currentScroll += formulaScroll * 0.08;
        window.scrollTo(0, currentScroll);
        if (Math.abs(formulaScroll) > 1) {
            scrollAnimation = window.requestAnimationFrame(() => startAnimation(newScrollY));
        } else {
            window.scrollTo(0, newScrollY);
            stopAnimation();
        }
    }

    function stopAnimation() {
        window.cancelAnimationFrame(scrollAnimation);
        scrollAnimation = undefined;
    }
}

export { scrollToPage };