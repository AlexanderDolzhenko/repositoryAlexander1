import { eventBus } from "./EventBus.js";
import { ACTIONS } from "./actions.js";

import { login } from './firebase.js';
import { withEmptyValueCheck, withEmailValueCheck} from './validators.js';
const setWarning = (el, warning) => {
    el.parentElement.classList.add('invalid');
    el.parentElement.dataset.error = warning;
}

const emailValidators = [withEmptyValueCheck, withEmailValueCheck];
const passwordValidators = [withEmptyValueCheck];
const checkValidity = (validators, value) => validators.reduce((acc, fn) => fn(acc), value)

const loginHandler = (e) => {
    e.preventDefault();
    const {target: {
        elements
    }
    } = e;

    const validators = {
        email: emailValidators,
        password: passwordValidators
    }

    let formError = false;
    
    Object.keys(validators).forEach(field => {
        const {error} = checkValidity(validators[field], elements[field].value);
        
        if(error) {
            setWarning(elements[field], error);
            formError = true;
        }
    })

    if(formError) {
        return;
    }

    login(elements.email.value, elements.password.value)
        .then(({user}) => {
            eventBus.dispatch(ACTIONS.login, user);
        })
        .catch((e) => {
            eventBus.dispatch(ACTIONS.logout);
            const noLogin = document.querySelector('#loginBtn');
            noLogin.innerText = 'Please, create a new account';
            console.log(e)
        })
}

const onFieldChangeHandler = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}

const loginForm = document.querySelector('#login');
const emailField = loginForm.querySelector('input[name="email"]');
const passwordField = loginForm.querySelector('input[name="password"]');


emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);
loginForm.addEventListener('submit', loginHandler);