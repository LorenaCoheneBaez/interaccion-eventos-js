window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
//Eventos de mouse
    titulo.addEventListener('mouseover', () => {
        titulo.style.color='white'
        titulo.style.backgroundColor  ='black'
    })

    titulo.addEventListener('mouseleave', () => {
        titulo.style.color='black'
        titulo.style.backgroundColor  ='#3255'
    })

    //Evento de teclas especificas
    //* capturo el input del form
    let tituloFormulario = document.getElementById('titulo')

    //*Establezco el estado inicial en cero
    let estadoSecreto=0;
    //*Evento de teclado, cuando levanta una tecla
    tituloFormulario.addEventListener('keyup', (e) =>{
        switch (estadoSecreto) {
            case 0:
                e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
                //*Si la tecla es "s" le sumo 1 al estado inicial, sino es "s" dejo el estado en cero
            case 1:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 2:
                e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 3:
                e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 4:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 5:
                e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 6:
                e.key == "o" ? alert('Secreto Mágico') : (estadoSecreto = 0);
                break;
            default:
                break;
        }
    })
}