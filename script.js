const botao = document.querySelectorAll('.botao-carrosel');
let cards = document.querySelectorAll('.card-carrosel');
let pontoInicial = 0;
const maxItens = cards.length;

botao.forEach(botao => {
    botao.addEventListener('click', () => {
        const isLeft = botao.classList.contains('botao-esquerdo');
        if (isLeft) {
            pontoInicial--
        } else {
            pontoInicial++
        }
        if(pontoInicial >= maxItens) {
            pontoInicial = 0;
        } else if (pontoInicial < 0) {
            pontoInicial = maxItens - 1
        }

        cards[pontoInicial].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block : "nearest"
        })
    })
})

const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener('click', ()=> {
    if(navigator.clipboard.writeText(botaoCopiar.value)) {
        botaoCopiar.id = "email-copiado_check"
        botaoCopiar.textContent = "Email copiado";
    }

    setInterval(()=> {
        botaoCopiar.id = "";
        botaoCopiar.textContent = "Copiar email"
    }, 3000);
})

function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ""
    textoArray.forEach((letra, index) => {
        setTimeout (() =>{
            elemento.innerHTML += letra;
        }, 150 * index)
    })
}

const titulo = document.getElementById('titulo__secao-principal');
escrever(titulo)



let botaoMenu = document.getElementById('botao-menu');
botaoMenu.addEventListener('click', menuAtivo);
botaoMenu.addEventListener('touchstart', menuAtivo);

function menuAtivo(evento) {
    if(evento.type === 'touchstart') {
        evento.preventoDefault()
    }

    let navLista = document.getElementById('nav')
    navLista.classList.toggle('active')

    const active = navLista.classList.contains('active')
    evento.currentTarget.setAttribute('aria-expanded', active)

    if(active) {
        evento.currentTarget.setAttribute('aria-label','Fechar menu')
    } else{
        evento.currentTarget.setAttribute('aria-label','Abrir menu')
    }
}