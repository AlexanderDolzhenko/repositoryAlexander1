        const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal');
    function openModal() {
            modal.classList.add('active');
    }
    modalTrigger.addEventListener('click', openModal)
    function closeModal() {
            modal.classList.remove('active');
    }
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('active')) {
            closeModal();
        }
    })
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.
            documentElement.scrollHeight - 1 && document.documentElement.clientWidth > 700) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

