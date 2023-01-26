
function getCard({name, imgPath, price, count}) {
    const card = document.createElement('div');
    card.classList.add('goodsCard')

    const cardhead = document.createElement('div');
    cardhead.innerText = `${name}`;
    cardhead.classList.add('cardHeader');
    card.appendChild(cardhead);

    const cardImg = document.createElement('div');
    cardImg.classList.add('cardImg');
    card.appendChild(cardImg);

    const rate = document.createElement('div');
    rate.classList.add('rateGood');
    rate.innerText = '';
    card.appendChild(rate);

    const pictures = document.createElement('img');
    pictures.classList.add('imgGood');
    pictures.src = `${imgPath}`;
    cardImg.appendChild(pictures);

    const cardfooter = document.createElement('div');
    cardfooter.classList.add('cardFooter');
    card.appendChild(cardfooter);

    const prices = document.createElement('div');
    prices.classList.add('cardPrice');
    prices.innerText = `${price}`;
    cardfooter.appendChild(prices);

    const stockCount = document.createElement('div');
    stockCount.classList.add('stockNumber');
    stockCount.innerText = `${count}`;
    cardfooter.appendChild(stockCount);

    return card
}

export {getCard};


/* Альтернатива, очень продвинутая

function getElement(tag, innerText, attributes) {
    const el = document.createElement(tag);
    Object.keys(attributes).forEach(attribute => {
      el[attribute] = attributes[attribute]
    })
    el.innerText = innerText || '';
    
    return el
  }
  function getCard({name, imgPath, price, count}) {
    const card = getElement('div','' , {className: 'card'} );

    const img = getElement('img', '', {src: imgPath, className: 'card__img'} );
    card.appendChild(img);

    const footer = document.createElement('div');
    footer.classList.add('card__footer');

    const priceEl = document.createElement('div');
    priceEl.classList.add('card__price');
    priceEl.innerText = price;

    const countEl = document.createElement('div');
    countEl.classList.add('card__count');
    countEl.innerText = count;

    const nameEl = document.createElement('div');
    nameEl.classList.add('card__name');
    nameEl.innerText = name;

    const inputEl = document.createElement('input');
    inputEl.type = 'number';
    inputEl.value = 2;
    inputEl.name = 'input-bbbb';
    inputEl.addEventListener('change', ({target: {value}}) => console.log(value))

    footer.append(priceEl, countEl, inputEl);
    card.appendChild(nameEl);
    card.appendChild(footer);
    return card;
  } */