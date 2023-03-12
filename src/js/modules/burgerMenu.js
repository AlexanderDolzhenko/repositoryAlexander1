function Burgermenu() {
    const burgerOpened = 'body_burger-opened';

    const bodyNode = document.querySelector('body');
    const burgerControl = document.querySelector('.burger-menu__control');
    const burgerCoverSpace = document.querySelector('.cover-space__burger');
    
    burgerControl.addEventListener('click', (_event) => {
        if (bodyNode.classList.contains(burgerOpened)) {
            bodyNode.classList.remove(burgerOpened);
        } else {
            bodyNode.classList.add(burgerOpened);
        }
    });
    
    burgerCoverSpace.addEventListener('click', (_event) => {
        bodyNode.classList.remove(burgerOpened);
    });
}
export {Burgermenu};