export function getCard({name, imgPath, price, count}) {
    const card = document.createElement('div');
    card.innerHTML = `${name}`;
    
    
    return card
}


