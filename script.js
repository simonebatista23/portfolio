const el1 = document.querySelector("#title");
const el2 = document.querySelector("#info");
const el3 = document.querySelector(".contact");

const text1 = " Olá , meu nome é Simone";
const text2 = " Transformo ideias em sistemas funcionais, integrando tecnologias front-end e back-end para criar experiências digitais completas.";
const text3 = `   
                <div class="icons-photo">
                <a href="" target="_blank"><i class="fa-brands fa-instagram"
                        style="  color: #986dff !important;"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-whatsapp"
                        style="  color: #986dff !important;"></i></a>
                 <a href="" target="_blank"><i class="uil uil-github-alt" style="color: #986dff"></i></a>
                </div>
`

;

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
    el3.innerHTML = text3;
    el3.classList.add("slide-in");
});




let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");

// Verifica se o modo escuro estava ativado antes
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    moon.style.display = "none";
    sun.style.display = "block";
} else {
    sun.style.display = "none";
}

// Ativar modo escuro
moon.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    moon.style.display = "none";
    sun.style.display = "block";
});

// Desativar modo escuro
sun.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    sun.style.display = "none";
    moon.style.display = "block";
});
