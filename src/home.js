import './style.css';
import homeImage from '../media/SakuraTrattoria.png'

const loadHomePage = () => {
    const title = document.createElement('h1');
    const main = document.createElement('div');
    const image = new Image();
    const headline = document.createElement('p');
    content.textContent = "";
    

    title.textContent = 'TRATTORIA SAKURA';
    main.setAttribute('id', 'main');
    image.src = homeImage;
    image.alt = 'Photo of a delicious looking pizza topped with cuts of sashimi';
    image.id = 'homeImage';
    headline.setAttribute('id', 'headline');
    headline.innerHTML = 'Trattoria Sakura blends Italian and Japanese cuisines, offering a fusion of flavors in a stylish setting. Dishes like sushi-style bruschetta and miso-infused risotto showcase the creativity of the chefs, using fresh, locally-sourced ingredients. Experience a unique culinary journey that celebrates the best of both worlds at Sakura Trattoria. Explore our delicious menu today!';
    main.append(image, headline);
    content.append(title, main);
}
export { loadHomePage };