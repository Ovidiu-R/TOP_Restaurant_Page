import {loadHomePage} from './home';
import {loadMenu} from './menu';
import {loadAbout} from './about';


const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');
const content = document.getElementById('content');

loadHomePage();
home.addEventListener('click', () => {
    loadHomePage();
});
menu.addEventListener('click', () => {
    loadMenu();
});
about.addEventListener('click', () => {
    loadAbout();
});

