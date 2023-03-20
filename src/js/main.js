import { Slider } from "./modules/gallery.js";
Slider();
import { Burgermenu } from "./modules/burgerMenu.js";
Burgermenu();
import { StickyMenu } from "./modules/stickyMenu.js";
StickyMenu();
import { scrollToPage } from "./modules/scrollTo.js";
scrollToPage()
import { remainingTimer } from "./modules/timer.js";
remainingTimer();
import "./modules/modal_start.js";
import "./modules/subscribe.js";

const LS_CONTACT_KEY = 'callRequest';
let currentCaller = null;

const callRequest = (name, phone) => {
    return new Promise((res, rej) => {
        const callers = JSON.parse(localStorage.getItem(LS_CONTACT_KEY) || '[]');
        const uniqueCaller = !callers.some(caller => caller.name === name &&
            caller.phone === phone);
            if (uniqueCaller) {
                const newCaller = {
                    id: Date.now(),
                    name,
                    phone
                }
                callers.push(newCaller);
                localStorage.setItem(LS_CONTACT_KEY, JSON.stringify(callers));
                currentCaller = newCaller;



                res(newCaller);
            }
            else {
                rej(new Error("You have already left your contacts!"))
            }
    });
}

const callHandler = (e) => {
    e.preventDefault();
    const { target: {
        elements: {
            name,
            phone}}
        } = (e);
        if (!name.value) {
            name.parentElement.classList.add('invalid');
            name.parentElement.dataset.error = 'Not empty!';
        return;
        }
        if (!phone.value) {
            phone.parentElement.classList.add('invalid');
            phone.parentElement.dataset.error = 'Not empty!';
            return;
        }
        // 8 (999) 123-45-64 типа такого
        if (!phone.value.match(/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/)) {
            phone.parentElement.classList.add('invalid');
            phone.parentElement.dataset.error = 'Wrong phone format!';
            return;
        }
        callRequest(name.value, phone.value)
        .catch((e) => {
            console.log(e)
        })
}
const onFieldChangeHandCall = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}
const getStarted = document.querySelector('#contactModal');
const nameFieldCont = getStarted.querySelector('input[name="name"]');
const phoneFieldCont = getStarted.querySelector('input[name="phone"]');

nameFieldCont.addEventListener('input', onFieldChangeHandCall);
phoneFieldCont.addEventListener('input', onFieldChangeHandCall);
getStarted.addEventListener('submit', callHandler)









