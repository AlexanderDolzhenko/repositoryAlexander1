import { getCard } from "./modules/practice.js";
const card = getCard({
    name: 'Milky way', 
    imgPath: '/img/milky.jpg', 
    price: '2 $',
    count: '2'});
    
    document.body.appendChild(card);