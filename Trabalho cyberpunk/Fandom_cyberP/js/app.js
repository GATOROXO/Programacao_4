const personagens = document.querySelectorAll('.personagem-individual-tela-inteira');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const personagem = entry.target;

      personagem.classList.remove('animar');

      setTimeout(() => {
        personagem.classList.add('animar');
      }, 50);
    }if(!entry.isIntersecting) { 
      const personagem = entry.target;

      personagem.classList.remove('animar');
    }
  });
}, {
  threshold: 0.6
});

personagens.forEach(personagem => {
  observer.observe(personagem);
});
