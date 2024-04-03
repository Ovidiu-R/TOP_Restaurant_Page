import './style.css';

const loadMenu = () => {
    content.textContent = "";
    content.style.marginTop = '0px';
    content.style.marginLeft = '0px';
    content.style.marginRight = '0px';
    const menu = document.createElement('img');
    menu.setAttribute('src', '../media/menu.jpeg');
    menu.setAttribute('alt', 'Delicious-looking, totally not AI-generated menu');
    menu.classList.add('menu');
    content.append(menu);
}

export {loadMenu};