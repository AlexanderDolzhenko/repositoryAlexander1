import { Burgermenu } from "./modules/burgerMenu.js";
Burgermenu();
import { StickyMenu } from "./modules/stickyMenu.js";
StickyMenu();
import { authFormOpen, authFormClose } from "./modules/authFormSettings.js";

const LS_AUTH_KEY = 'auth';
let currentUser = null;

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
        res(currentUser);
    })
};

const loginForm = document.querySelector('#enterSite');
const outlog = document.querySelector('#exitSite');

const loginHandler = (e) => {
    e.preventDefault();
    console.log('on login');
    authFormClose
    
}
loginForm.addEventListener('submit', loginHandler);