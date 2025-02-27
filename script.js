const el1 = document.querySelector("#title");
const el2 = document.querySelector("#info");

const text1 = "Desenvolvedora Full Stack JR | Soluções Web Modernas";
const text2 = "Transformo ideias em sistemas funcionais, integrando tecnologias front-end e back-end para criar experiências digitais completas. Desenvolvi um mini site funcional com algumas funcionalidades básicas para demonstrar habilidades práticas em HTML, CSS, JavaScript, Bootstrap, PHP, SQL e integração com banco de dados. Para Demonstrar Competências Técnicas, Criar um Portfólio Atraente, Praticar Integração de Tecnologias, Receber Feedback de Especialistas.";

const minInterval = 80; // Tempo mínimo entre caracteres
const maxInterval = 200; // Tempo máximo entre caracteres

function showText(el, text, callback) {
    let i = 0;
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    el.appendChild(cursor);

    function typeCharacter() {
        if (i < text.length) {
            el.innerHTML = text.slice(0, i + 1);
            el.appendChild(cursor);
            i++;

            // Intervalo aleatório para simular uma digitação mais natural
            const delay = Math.random() * (maxInterval - minInterval) + minInterval;
            setTimeout(typeCharacter, delay);
        } else {
            cursor.remove(); // Remove o cursor ao terminar
            if (callback) {
                setTimeout(callback, 1000); // Pausa de 1 segundo antes de executar o callback
            }
        }
    }

    typeCharacter();
}

// Inicia o efeito de digitação no primeiro texto
showText(el1, text1, () => {
    // Após o primeiro texto ser digitado, exibe o segundo com animação
    el2.innerHTML = text2;
    el2.classList.add("slide-in"); // Adiciona a classe para animar
});
