function getCard({name, imgPath, price, count}) {
    const card = document.createElement('div');
    card.innerHTML = `${name}`;
    const pictures = document.createElement('img');
    pictures.innerHTML= `${imgPath}`;
    const prices = document.createElement('span');
    prices.innerHTML= `${price}`;
    const stockCount = document.createElement('input');
    stockCount.innerHTML= `${count}`;
    
    return card, pictures, prices, stockCount;
}

const card = getCard({name: 'Milky way'}, {imgPath: '/img/milky.jpg'}, {price: '2$'}, {count: '2'});

document.body.appendChild(card);

