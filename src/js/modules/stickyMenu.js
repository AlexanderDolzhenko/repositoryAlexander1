function StickyMenu() {
    const headerScroll = 'header_scrolled';
    const headerClass = document.querySelector('.header');
    toggleHeader();
    window.addEventListener('scroll', (toggleHeader));
function toggleHeader() {
    if (window.scrollY >= 20 
        && !headerClass.classList.contains(headerScroll)) {
        headerClass.classList.add(headerScroll);
    } else if (window.scrollY < 20 
        && headerClass.classList.contains(headerScroll)) {
        headerClass.classList.remove(headerScroll);
    }
}
}
export { StickyMenu };