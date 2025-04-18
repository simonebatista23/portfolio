document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    const elemento = document.querySelector(".container-resume");
    if (elemento) {
      observer.observe(elemento);
    }
  });
  
  window.addEventListener('load', function(){
    document.body.classList.add('mostrar')
})


