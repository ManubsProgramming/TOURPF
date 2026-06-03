const slides = [
    {
        image:'img/maroaga.jpeg',
        title: 'Cachoeira do Maroaga',
        description: 'A Cachoeira do Maroaga é uma das mais belas cachoeiras da região de Presidente Figueiredo, no estado do Amazonas.'
    },

    {
        image: 'img/calangohotel.jpg',
        title:'Hotel Do Calango Azul',
        description:'O Hotel Calango Azul se trata de um hotel aconchegante e confortavel',
    },

    {
        image: 'img/anauerestaurante.jpg',
        title: 'Restaurante Anauê',
        description:'O Restaurante Anauê é conhecido por sua culinária regional e ambiente acolhedor, oferecendo pratos típicos da Amazônia em uma culminar experiência gastronômica',
    },

    {
        image:'img/Festacupu.jpeg',
        title: 'Festa do Cupuaçu',
        description: 'A Festa do Cupuaçu é um evento cultural que celebra a tradição e a identidade da comunidade local.'
    }
]

let current=0; /*controlar slide atual*/

const mainImg = document.getElementById('mainImg') /*seleciona a imagem principal*/
const title = document.getElementById('title') /*seleciona o título*/
const description = document .getElementById('description')

const leftImg = document.getElementById('leftImg') /*seleciona a imagem esquerda*/
const rightImg = document.getElementById('rightImg') /*seleciona a imagem direita*/

function updateCarrossel() {
   mainImg.src = slides[current].image;/*atualiza a imagem principal com a imagem do slide atual*/
   title.textContent = slides[current].title; /*atualiza o titulo com o titulo do slide atual*/
   description.textContent = slides[current].description;

   let leftIndex = (current - 1 + slides.length) % slides.length; /*calcula o indice da imagem anterior*/
   let rightIndex = (current + 1) % slides.length; /*calcula o indice da imagem seguinte*/

   leftImg.src = slides[leftIndex].image;
   rightImg.src = slides[rightIndex].image;
}
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateCarrossel();
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateCarrossel();
});
 
updateCarrossel()
