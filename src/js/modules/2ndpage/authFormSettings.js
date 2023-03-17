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

export {authFormOpen, authFormClose, outlogShow, outlogHide};