/* ------------- COMPONENTES -----------*/

fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
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
    // Posiciona a partícula no mouse
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    // Remove a partícula após a animação
    setTimeout(() => {
      particle.remove();
    }, 800);
   });


   /*----------- MENU TOGGLE ----------*/ 

   const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.direita');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });