const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const logo = document.querySelector('.logo');


burger.addEventListener("click", () => {
  //toggle nav
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");

});

logo.addEventListener("click", () => {
  //toggle nav
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-links", ".logo").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}));


var nav = document.getElementById('nav');
var isScrolling;

window.addEventListener('scroll', function () {
  // Adiciona a classe "hidden" para esconder a barra de navegação
  nav.classList.add('hidden');

  // Limpa o timeout se a página continuar rolando
  clearTimeout(isScrolling);

  // Define um timeout para mostrar a barra de navegação novamente após 500ms
  isScrolling = setTimeout(function () {
    nav.classList.remove('hidden');
  }, 5);
});

