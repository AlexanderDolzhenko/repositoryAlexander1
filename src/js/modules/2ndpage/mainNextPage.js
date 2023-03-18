import { Burgermenu } from "../burgerMenu.js";
Burgermenu();
import { StickyMenu } from "../stickyMenu.js";
StickyMenu();
import { canvasAnimation } from "./canvasAnimation.js";
import { authFormOpen, authFormClose, outlogShow, outlogHide } from "./authFormSettings.js";
canvasAnimation();
import { eventBus } from "./EventBus.js";
import { ACTIONS } from "./actions.js";




import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC2X72pO_Nh0u93El8rt9SWf5RbFGGKhxA",
  authDomain: "it-academy-auth.firebaseapp.com",
  projectId: "it-academy-auth",
  storageBucket: "it-academy-auth.appspot.com",
  messagingSenderId: "543578464885",
  appId: "1:543578464885:web:e9005bd63c99a8614c4e3c"
};


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const createAccount = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await await updateProfile(auth.currentUser, {
        displayName
    })
    await sendEmailVerification(auth.currentUser)
}

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);


const logout = () => signOut(auth).then(() => {
    eventBus.dispatch(ACTIONS.logout);
});


const application = async() => {
    await signin('gispapirke@gufum.com', 'test123');
    // await signup('cuknulopse@gufum.com', 'test123');
    await updateProfile(auth.currentUser, {
        displayName: 'User Name',
    })
    console.log(auth.currentUser);
}



const getUser = () => {  
    return new Promise(res => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
              res(user);
            } else {
              res(null);
            }
          });
    })
}

const CURRENT_USER = 'currentUser';

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
}
const onFieldChangeHandler = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}
emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);
loginForm.addEventListener('submit', loginHandler);

loginForm.addEventListener('submit', () => {
    login();
    outlogShow();
    authFormClose();

})


outLog.addEventListener('click', () => {
    logout();
    outlogHide();
    authFormOpen();
})



getUser().then(currentUser => {
    if (currentUser) {
        const userNameSpan = document.querySelector('#userName');
        const {displayName: name} = currentUser;
        userNameSpan.style.display = 'block';
        userNameSpan.innerText = name;
}
})
