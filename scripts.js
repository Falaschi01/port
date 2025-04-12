const menu = document.getElementById("menu");
const menubtn = document.getElementById("menu-btn");
const blurOverlay = document.getElementById("blur-overlay");

/*Abrir menu hamburguer*/
const toggleMenu = () => {
  const isOpen = menu.style.display === "block";
  menu.style.display = isOpen ? "none" : "block";
  blurOverlay.classList.toggle("active", !isOpen);
  menubtn.textContent = isOpen ? "menu" : "✖";
};

/*Fechar menu hamburguer*/
const closeMenu = () => {
  menu.style.display = "none";
  blurOverlay.classList.remove("active");
  menubtn.textContent = "menu";
};

menubtn.addEventListener("click", toggleMenu);

document.addEventListener("click", e => {
  if (!menu.contains(e.target) && !menubtn.contains(e.target)) closeMenu();
});

menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

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

/* Slides projetos*/
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

/* TranslatX seções*/
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


/* Mensagem para contato*/
function enviarWhats(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value.trim();
  /* Validando Nome ao ser enviado.*/

  const mensagem = document.getElementById('mensagem').value.trim();
  /* Validando Mensagem ao ser enviada.*/
  
  const telefone = '5544997032921'; 

  if (nome === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
  }
  /* Uma alerta para que todos os campos seja preenchidos.*/

  const texto = `Olá! Meu nome é ${nome}. \n${mensagem}`;
  /* Ordem correta da mensagem chegar ate meu Whatssap.*/
  
  const msgFormatada = encodeURIComponent(texto);
  /* Formatando texto por conta dos espaçamentos.*/

  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
 /*Link do meu whatssap automatico.*/
  
  window.open(url, '_blank'); 

}