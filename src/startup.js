import './style.css';

const loadHomePage = () => {
    const title = document.createElement('h1');
    const main = document.createElement('div');
    const image = document.createElement('img');
    const headline = document.createElement('p');
    const content = document.getElementById('content');
    title.textContent = 'SAKURA TRATTORIA';
    main.setAttribute('id', 'main');
    image.setAttribute('src', '../media/SakuraTrattoria.png');
    image.setAttribute('alt', 'Photo of a delicious looking pizza topped with cuts of sashimi');
    headline.innerHTML = 'Sakura Trattoria blends Italian and Japanese cuisines, offering a fusion of flavors in a stylish setting. Dishes like sushi-style bruschetta and miso-infused risotto showcase the creativity of the chefs, using fresh, locally-sourced ingredients. Experience a unique culinary journey that celebrates the best of both worlds at Sakura Trattoria. Explore our delicious menu today!';
    main.append(image, headline);
    content.append(title, main);
}
export { loadHomePage };