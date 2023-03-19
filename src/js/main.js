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
import { modalWindow } from "./modules/modal_start.js";
modalWindow();


const LS_EMAIL_KEY = 'subscribe';
let currentSubscriber = null;

const subscribeButton = document.querySelector('#subscribe');


const sendEmail = (email) => {
  return new Promise((res, rej) => {
    const subscribers = JSON.parse(localStorage.getItem(LS_EMAIL_KEY) || '[]');
    const uniqueEmail = !subscribers.some(subscriber => subscriber.email === email)
    if(uniqueEmail) {
      const newSubscriber = {
        id: Date.now(),
        email
      }
      subscribers.push(newSubscriber);
      localStorage.setItem(LS_EMAIL_KEY, JSON.stringify(subscribers));
      currentSubscriber = newSubscriber;
      res(newSubscriber);
    }
    else {
      rej(new Error ("Such email is already existing"))
    }
  })
}


const subscribeHandler = (e) => {
  e.preventDefault();
  const {target: {
  elements: {
  email}}
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

  
  sendEmail(email.value)
  .catch((e) => {
      console.log(e)
  }) 
}




const emailFieldSub = subscribeButton.querySelector('input[name="email"]');
  const onFieldChangeHandlerSub = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}
emailFieldSub.addEventListener('input', onFieldChangeHandlerSub);





subscribeButton.addEventListener('submit', subscribeHandler)