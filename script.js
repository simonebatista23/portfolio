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

// const el1 = document.querySelector("#title-2");
// const el2 = document.querySelector("#info");
// const el3 = document.querySelector(".contact");

// const text1 = " teste";
// const text2 = " ";
// const text3 = `   
       
// `

// ;

// const minInterval = 80; // Tempo mínimo entre caracteres
// const maxInterval = 200; // Tempo máximo entre caracteres

// function showText(el, text, callback) {
//     let i = 0;
//     const cursor = document.createElement("span");
//     cursor.classList.add("cursor");
//     el.appendChild(cursor);

//     function typeCharacter() {
//         if (i < text.length) {
//             el.innerHTML = text.slice(0, i + 1);
//             el.appendChild(cursor);
//             i++;

//             // Intervalo aleatório para simular uma digitação mais natural
//             const delay = Math.random() * (maxInterval - minInterval) + minInterval;
//             setTimeout(typeCharacter, delay);
//         } else {
//             cursor.remove(); // Remove o cursor ao terminar
//             if (callback) {
//                 setTimeout(callback, 1000); // Pausa de 1 segundo antes de executar o callback
//             }
//         }
//     }

//     typeCharacter();
// }

// Inicia o efeito de digitação no primeiro texto
// showText(el1, text1, () => {
//     // Após o primeiro texto ser digitado, exibe o segundo com animação
//     el2.innerHTML = text2;
    
//     el2.classList.add("slide-in"); // Adiciona a classe para animar
//     el3.innerHTML = text3;
//     el3.classList.add("slide-in");
// });


