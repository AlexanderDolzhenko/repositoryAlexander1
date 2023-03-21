import { eventBus } from "./EventBus.js";
import { ACTIONS } from "./actions.js";

import { createAccount, login } from './firebase.js';
import { withEmptyValueCheck, withEmailValueCheck, withUserNameLengthCheck } from './validators.js';

const setWarning = (el, warning) => {
    el.parentElement.classList.add('invalid');
    el.parentElement.dataset.error = warning;
}

const emailValidators = [withEmptyValueCheck, withEmailValueCheck];
const passwordValidators = [withEmptyValueCheck];
const userNameValidators = [withEmptyValueCheck, withUserNameLengthCheck];
const checkValidity = (validators, value) => validators.reduce((acc, fn) => fn(acc), value);

const createHandler = (e) => {
    e.preventDefault();
    const {target: {
        elements
    }
    } = e;

    const validators = {
        email: emailValidators,
        password: passwordValidators,
        userName: userNameValidators
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

    createAccount(elements.email.value, elements.password.value, elements.userName.value)
        .then(({user}) => {
            eventBus.dispatch(ACTIONS.createAccount, user);
            
            const noCreate = document.querySelector('#createBtn');
            noCreate.innerText = 'Account created successfully!';
        })
        .catch((e) => {
            const noCreate = document.querySelector('#createBtn');
            noCreate.innerText = 'System error or Such user already exists';
            console.log(e)
        })
}

const onFieldChangeHandler = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}

const createForm = document.querySelector('#create');
const emailFieldCreate = createForm.querySelector('input[name="email"]');
const passwordFieldCreate = createForm.querySelector('input[name="password"]');
const userNmaeFieldCreate = createForm.querySelector('input[name="userName"]')


emailFieldCreate.addEventListener('input', onFieldChangeHandler);
passwordFieldCreate.addEventListener('input', onFieldChangeHandler);
userNmaeFieldCreate.addEventListener('input', onFieldChangeHandler);
createForm.addEventListener('submit', createHandler);