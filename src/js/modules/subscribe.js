const LS_EMAIL_KEY = 'subscribe';
let currentSubscriber = null;

const subscribeButton = document.querySelector('#subscribe');
const subscribemod = document.querySelector('.subscribeMessage');

const sendEmail = (email) => {
    return new Promise((res, rej) => {
        const subscribers = JSON.parse(localStorage.getItem(LS_EMAIL_KEY) || '[]');
        const uniqueEmail = !subscribers.some(subscriber => subscriber.email === email);
        if (uniqueEmail) {
            const newSubscriber = {
                id: Date.now(),
                email
            }
            subscribers.push(newSubscriber);
            localStorage.setItem(LS_EMAIL_KEY, JSON.stringify(subscribers));
            currentSubscriber = newSubscriber;
            subscribemod.innerText = 'Thanks for your subscribe!';
            subscribemod.classList.add('active')
            setTimeout(() => subscribemod.classList.remove('active'), 1500)
            res(newSubscriber);
        }
        else {
            subscribemod.innerText = 'Such email is not unique';
            subscribemod.classList.add('active')
            setTimeout(() => subscribemod.classList.remove('active'), 1500)
            rej(new Error("Such email is not unique"))
        }
    })
}

const subscribeHandler = (e) => {
    e.preventDefault();
    const { target: {
        elements: {
            email } }
    } = (e);
    if (!email.value) {
        email.parentElement.classList.add('invalid');
        email.parentElement.dataset.error = 'Not empty!';
        return;
    }
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.\w{2,4}/)) {
        email.parentElement.classList.add('invalid');
        email.parentElement.dataset.error = 'Wrong email format!';
        return;
    }
    sendEmail(email.value)
        .catch((e) => {
            console.log(e)
        })
}
const emailFieldSub = subscribeButton.querySelector('input[name="email"]');
const onFieldChangeHandlerSub = ({ target }) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}
emailFieldSub.addEventListener('input', onFieldChangeHandlerSub);

subscribeButton.addEventListener('submit', subscribeHandler)
