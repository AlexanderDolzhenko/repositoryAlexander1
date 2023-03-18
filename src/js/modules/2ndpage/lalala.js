import { Burgermenu } from "../burgerMenu.js";
Burgermenu();
import { StickyMenu } from "../stickyMenu.js";
StickyMenu();
import { authFormOpen, authFormClose, outlogShow, outlogHide } from "./authFormSettings.js";

const LS_AUTH_KEY = 'auth';
let currentUser = null;



const CURRENT_USER = 'currentUser';
const createAccount = (email, password, userName) => {
    return new Promise((res, rej) => {
        const users = JSON.parse(localStorage.getItem(LS_AUTH_KEY) || '[]');
        const isUnique = !users.some(user => user.email === email &&
            user.password === password &&
            user.userName === userName)
        if (isUnique) {
            const newUser = {
                id: Date.now(),
                email,
                password,
                userName,
            }
            users.push(newUser);
            localStorage.setItem(LS_AUTH_KEY, JSON.stringify(users));
            currentUser = newUser;
            res(newUser);
        } else {
            rej(new Error("Can't create user with such credentials"));
        }
    });
};


const login = (email, password) => {
    return new Promise((res, rej) => {
        const users = JSON.parse(localStorage.getItem(LS_AUTH_KEY) || '[]');
        const user = users.find(user => user.email === email 
            && user.password === password);

        if (user) {
            setTimeout(() => {
                currentUser = user;
                res(user);
            }, 200)
        } else {
            rej('Wrong credentials')
        }


    })
};

const logout = () => {
    return new Promise(res => {
        currentUser = null;
        res(null);
    })
};

const getUser = () => {
    return new Promise((res) => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
        currentUser = user;
        }
        res(currentUser);
    })
};
const outLog = document.querySelector('.buttonlogout');
const loginForm = document.querySelector('#login');
const createForm = document.querySelector('#create');
const emailField = loginForm.querySelector('input[name="email"]');
const passwordField = loginForm.querySelector('input[name="password"]');

const loginHandler = (e) => {
    e.preventDefault();
    const {target: {
    elements: {
    email,
    password}}
    } = (e);
    if(!email.value) {
        email.parentElement.classList.add('invalid');
        email.parentElement.dataset.error = 'Not empty!';
        return;
    }
    if(!email.value.match(/[a-z0-9]+@[a-z]+\.\w{2,4}/)) {
        email.parentElement.classList.add('invalid');
        email.parentElement.dataset.error = 'Wrong email format!';
        return;
    }

    if(!password.value) {
        password.parentElement.classList.add('invalid');
        password.parentElement.dataset.error = 'Not empty!';
        return;
    }

    login(email.value, password.value)
    .then((user) => {
        authFormClose();
        outlogShow();
        const userNameSpan = document.querySelector('#userName');
        userNameSpan.style.display = 'block';
        userNameSpan.innerText = user.userName;
        localStorage.setItem('CURRENT_USER', JSON.stringify(user));
    })
    .catch((e) => {
        console.log(e)
    }) 
}

    
   


const onFieldChangeHandler = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}
emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);
loginForm.addEventListener('submit', loginHandler);

getUser().then(currentUser => {
    if (currentUser) {
        const userNameSpan = document.querySelector('#userName');
        const {displayName: name} = currentUser;
        userNameSpan.style.display = 'block';
        userNameSpan.innerText = name;
}
})



outLog.addEventListener('click', () => {
    logout();
    outlogHide();
    authFormOpen();
})






