import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

import { eventBus } from "./EventBus.js";
import { ACTIONS } from "./actions.js";

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

export {logout, getUser, login, createAccount}