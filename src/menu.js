import './style.css';
import menu from '../media/menu.jpeg'

const loadMenu = () => {
    content.textContent = "";
    content.style.marginTop = '0px';
    content.style.marginLeft = '0px';
    content.style.marginRight = '0px';
    const myMenu = new Image();
    myMenu.src = menu;
    myMenu.alt = 'Delicious-looking, totally not AI-generated menu';
    myMenu.classList.add('menu');
    content.append(myMenu);
}

export {loadMenu};