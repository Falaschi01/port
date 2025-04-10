/* Menu hamburguer */
let body = document.querySelector("body");
let menu = document.getElementById("menu");
let menubtn = document.getElementById("menu-btn");
let blurOverlay = document.getElementById("blur-overlay"); // nova camada de desfoque

function menuclick() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        blurOverlay.classList.add("active"); // ativa o desfoque
        menubtn.textContent = "✖";
    } else {
        menu.style.display = 'none';
        blurOverlay.classList.remove("active"); // remove o desfoque
        menubtn.textContent = "menu";
    }
}

/* Changer color body */
const cores = [
    { fundo: "rgb(19, 19, 31)", bola: "rgb(19, 19, 31)" },
    { fundo: "rgba(22, 53, 78, 0.911)", bola: "rgba(22, 53, 78, 0.911)" }
    
];

const toggle = document.getElementById("colorToggle");
const bola = document.querySelector(".color-ball");

let rotacao = 0;

toggle.addEventListener("change", () => {
    const estado = toggle.checked ? 1 : 0;
    const corAtual = cores[estado];
    document.body.style.backgroundColor = corAtual.fundo;
    bola.style.backgroundColor = corAtual.bola;

    rotacao += 360;

    let deslocamentoX = "2.5rem"; // valor para telas grandes

    if (window.innerWidth <= 300) {
        deslocamentoX = "1.2rem"; // valor para o responsivo
    }

    const deslocamento = estado === 0 
        ? "translateY(-50%) translateX(0)" 
        : `translateY(-50%) translateX(${deslocamentoX})`;

    bola.style.transform = `${deslocamento} rotate(${rotacao}deg)`;
});

/* Slides project*/
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('arrow-left');
const nextButton = document.getElementById('arrow-right');

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

window.addEventListener('resize', updateSlidePosition);

/* TranslatX sections*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.classList.add('hidden');
      }
    });
  });
  
  const targets = document.querySelectorAll('.max-width');
  targets.forEach(target => observer.observe(target));

