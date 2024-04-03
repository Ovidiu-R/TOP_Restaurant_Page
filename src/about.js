import './style.css';

const loadAbout = () => {
    content.textContent = "";
    const wrapper = document.createElement('div')
    const section1 = document.createElement('h2');
    const paragraph1 = document.createElement('p');
    const section2 = document.createElement('h2');
    const paragraph2 = document.createElement('p');
    const section3 = document.createElement('h2');
    const paragraph3 = document.createElement('p');
    const section4 = document.createElement('h2');
    const paragraph4 = document.createElement('p');

    wrapper.classList.add('about');
    section1.textContent = 'Where Italian Tradition Meets Japanese Innovation:';
    paragraph1.textContent = "Welcome to Trattoria Sakura, the epitome of culinary fusion where the rich heritage of Italian cuisine harmoniously blends with the artistry and innovation of Japanese culinary techniques. At Trattoria Sakura, we redefine the dining experience, offering a tantalizing journey for your taste buds in an atmosphere that resonates with modernity and warmth.";
    section2.textContent = 'Innovation Through Fusion:';
    paragraph2.textContent = "At the heart of Trattoria Sakura lies our commitment to culinary innovation. Our chefs expertly marry the bold flavors of Italy with the delicate subtleties of Japan, crafting dishes that are as visually stunning as they are delectable. From inventive sushi rolls infused with Italian herbs and flavors to classic Italian pastas adorned with Japanese-inspired garnishes, every dish is a masterpiece of creativity and flavor fusion.";
    section3.textContent = 'Atmosphere of Elegance and Comfort:';
    paragraph3.textContent = "Step into Trattoria Sakura and immerse yourself in an ambiance that effortlessly marries elegance with comfort. Our restaurant's sleek and modern design, accented with traditional Japanese motifs and Italian flair, creates a welcoming space where guests can unwind and savor each moment. Whether you're enjoying an intimate dinner for two or celebrating a special occasion with friends and family, our inviting atmosphere sets the stage for unforgettable dining experiences.";
    section4.textContent = 'Beyond Buzzwords:';
    paragraph4.textContent = "At Trattoria Sakura, we go beyond the buzzwords to deliver an exceptional dining experience that transcends expectations. From our commitment to using only the freshest and highest quality ingredients to our dedication to impeccable service, every aspect of Trattoria Sakura reflects our passion for excellence. We strive to create not just a meal, but a culinary journey that ignites the senses and leaves a lasting impression. Join us at Trattoria Sakura and indulge in the fusion of tradition and innovation, where every dish tells a story and every moment is savored. Experience the magic of Italo-Japanese cuisine in a setting that captivates the senses and leaves you craving more.";
    content.style.marginTop = '100px';

    wrapper.append(section1, paragraph1, section2, paragraph2, section3, paragraph3, section4, paragraph4)
    content.append(wrapper);
}

export {loadAbout};