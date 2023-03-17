const auth = document.querySelector('.authForm');

const authFormOpen = () => {
   auth.classList.remove('hide');
   
}
const authFormClose = () => {
    
    auth.classList.add('hide');
   
}

export {authFormOpen, authFormClose};