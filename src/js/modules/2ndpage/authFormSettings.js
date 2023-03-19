import { eventBus } from "./EventBus.js";
import { ACTIONS } from "./actions.js";


const auth = document.querySelector('.authForm');
const outLog = document.querySelector('.buttonlogout');

const authFormOpen = () => {
   auth.classList.remove('hide');
}
const authFormClose = () => {
   auth.classList.add('hide');
}



const outlogShow = () => {
    outLog.classList.add('active');
 }
 const outlogHide = () => {
    outLog.classList.remove('active');
 }

 eventBus.subscribe(ACTIONS.login, outlogShow);
 eventBus.subscribe(ACTIONS.login, authFormClose);
 eventBus.subscribe(ACTIONS.logout, outlogHide);
 eventBus.subscribe(ACTIONS.logout, authFormOpen);

export {authFormOpen, authFormClose, outlogShow, outlogHide};