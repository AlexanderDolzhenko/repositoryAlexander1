function modalWindow() {
    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal');


    function openModal() {
        if (document.documentElement.clientWidth > 700) {
            modal.style.display = "block";
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        } else if (document.documentElement.clientWidth < 700) {
            modal.style.display = "block";
            modal.classList.add('show');
            modal.classList.remove('hide');
        }
    }

    modalTrigger.addEventListener('click', openModal)

    function closeModal() {
        if (document.documentElement.clientWidth > 700) {
            modal.style.display = "none";
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
        else if (document.documentElement.clientWidth < 700) {
            modal.style.display = "none";
            modal.classList.add('hide');
            modal.classList.remove('show');
        }

    }


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
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


    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/icons/spinner.svg',
        success: 'Thanks! We will contact You soon!',
        failure: 'Fail 404...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            document.querySelector('.modal').append(statusMessage);

           /*const request = new XMLHttpRequest();
            request.open('POST', 'https://js-diploma-test-default-rtdb.europe-west1.firebasedatabase.app/');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');*/

/* closer.addEventListener('click', () => {})
modal.classlist.remove('СЮДА ДИВ КОТОРЫЙ РЕМУВАЕМ') */

            const formData = new FormData(form); 

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            const json = JSON.stringify(object);

            localStorage.setItem('local', json);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    statusMessage.remove();
                    form.reset();
                } else {
                    showThanksModal(message.failure);
                }
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            closeModal();
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');

        }, 4000);
    }




}

export { modalWindow }