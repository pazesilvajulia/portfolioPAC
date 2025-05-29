/* ------------- COMPONENTES -----------*/

fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // Seleciona os elementos após inserir o header no DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.direita');

    // Adiciona o event listener para o toggle do menu
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }
  });

fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

/* ------------- CURSOR -----------*/

document.addEventListener('mousemove', function(e) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  document.body.appendChild(particle);
  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;
  setTimeout(() => {
    particle.remove();
  }, 800);
});


 