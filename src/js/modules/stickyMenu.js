function StickyMenu() {
    const headerScroll = 'header_scrolled';
    const headerClass = document.querySelector('.header');
    const stickyScroll = 20;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 20 
            && !headerClass.classList.contains(headerScroll)) {
            headerClass.classList.add(headerScroll);
        } else if (window.scrollY < 20 
            && headerClass.classList.contains(headerScroll)) {
            headerClass.classList.remove(headerScroll);
        }
    })


}

export { StickyMenu };