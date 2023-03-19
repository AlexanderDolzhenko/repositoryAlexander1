import { Burgermenu } from "../burgerMenu.js";
Burgermenu();
import { StickyMenu } from "../stickyMenu.js";
StickyMenu();
import { canvasAnimation } from "./canvasAnimation.js";
import { authFormOpen, authFormClose, outlogShow, outlogHide } from "./authFormSettings.js";
canvasAnimation();
import { eventBus } from "./EventBus.js";
import { ACTIONS } from "./actions.js";

import { logout, getUser, login, createAccount} from './firebase.js';

import "./loginForm.js";



const setUserStatus = (user) => {
    
    const userName = document.querySelector('#userName');
    if(user) {
            userName.style.display = 'block';
            userName.innerText = user.displayName;
    } else { 
        userName.style.display = 'none';
        userName.innerText = '';
    }
}

eventBus.subscribe(ACTIONS.login, setUserStatus);
eventBus.subscribe(ACTIONS.logout, setUserStatus);


const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', login)

const outLog = document.querySelector('.buttonlogout');
outLog.addEventListener('click', logout)


async function initialize() {
    const {location: {pathname}} = window;
    eventBus.dispatch(ACTIONS.changeRoute, pathname);
    
    const currentUser = await getUser();
    setUserStatus(currentUser);
}

initialize();


const createForm = document.querySelector('#create');


const onBeforeUnload = (e) => {
 e.preventDefault();
 e.returnValue = "Are you sure?";
    
return "Are you sure?";

}

 window.addEventListener('beforeunload', onBeforeUnload);



