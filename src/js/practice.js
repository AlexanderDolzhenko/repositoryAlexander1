export function getCard({name, imgPath, price, count}) {
    const card = document.createElement('div');
    card.innerHTML = `${name}`;
    card.classList.add('cardgood');

    const pictures = document.createElement('img');
    pictures.src = `${imgPath}`;
    card.appendChild(pictures);

    const prices = document.createElement('div');
    prices.classList.add('cardprice');
    prices.innerHTML = `${price}`;
    card.appendChild(prices);

    const stockCount = document.createElement('input');
    stockCount.classList.add('stocknumber');
    // place for input type
    stockCount.innerHTML = `${count}`;
    card.appendChild(stockCount);

    return card
}


const card = getCard({name: 'Milky way'}, {imgPath: '/img/milky.jpg'}, {price: '2$'}, {count: '2'});

document.body.appendChild(card);
