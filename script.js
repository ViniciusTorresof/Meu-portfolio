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