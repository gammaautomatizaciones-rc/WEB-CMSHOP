// Simple carrusel para imágenes
const images = document.querySelectorAll('.carrusel-img');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
const indicadores = document.querySelectorAll('.indicador');
let idx = 0;

function mostrarImagen(n) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === n);
    indicadores[i]?.classList.toggle('active', i === n);
  });
}

function siguiente() {
  idx = (idx + 1) % images.length;
  mostrarImagen(idx);
}

function anterior() {
  idx = (idx - 1 + images.length) % images.length;
  mostrarImagen(idx);
}

prevBtn.addEventListener('click', anterior);
nextBtn.addEventListener('click', siguiente);
indicadores.forEach((ind, i) => ind.addEventListener('click', () => {
  idx = i;
  mostrarImagen(idx);
}));

// Cambio automático cada 4 segundos
setInterval(siguiente, 4000);
