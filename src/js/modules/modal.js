function modalWindow() {
    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
        

    function openModal() {
        modal.style.display = "block";
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    modalTrigger.addEventListener('click', openModal)

    function closeModal() {
        modal.style.display = "none";
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    })

    function showModalByScroll() {
        viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (window.pageYOffset + document.documentElement.clientHeight >= document.
            documentElement.scrollHeight -1 && viewPortWidth > 700) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        } 
        
    }
    window.addEventListener('scroll', showModalByScroll);
}

export { modalWindow }