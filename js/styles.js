let imagenes = [
    "piedra.png",
    "papel.png",
    "tijera.png"
];

/* variable */

let visor__configuracion = document.getElementById("visor__configuracion");
let visor__puntuaciones = document.getElementById("visor__puntuaciones");
let visor__jugada = document.getElementById("visor__jugada");
let visor__opciones = document.getElementById("visor__opciones");

let contador;

let imagen_jugador = document.getElementById("imagen_jugador");
let imagen_maquina = document.getElementById("imagen_maquina");

let btn__jugar = document.getElementById("btn__jugar");

let resultado = document.getElementById("resultado");

let puntos_maquina = document.getElementById("puntos_maquina");
let puntos_jugador = document.getElementById("puntos_jugador");

let caja__btn = document.getElementById("caja__btn-reinicio");

let caja__mensaje = document.getElementById("caja__mensaje");


/* funciones */

const ocultadoInicial = () => {
    visor__puntuaciones.style.display = "none";
    visor__jugada.style.display = "none";
    visor__opciones.style.display = "none";
    caja__btn.style.display = "none";
    caja__mensaje.style.display = "none";
    visor__configuracion.style.display = "flex";
}

const mostrar = () => {
    visor__puntuaciones.style.display = "flex";
    visor__jugada.style.display = "flex";
    visor__opciones.style.display = "flex";
    visor__configuracion.style.display = "none";
}

const Configuracion = (event) => {
    let opcion = event.target;
    if (opcion.tagName == "P") {
        mostrar();
        contador = opcion.textContent.split(" ")[0];
    }
}

const ElegirJugada = (event) => {
    let opcion = event.target;
    if (opcion.tagName = "IMG") {
        imagen_jugador.src = opcion.src;
        imagen_jugador.style.display = "block";
    }
}

const imagenMaquina = () => {
    imagen_maquina.src = "./assets/images/" + imagenes[Math.floor(Math.random() * imagenes.length)];
    imagen_maquina.style.display = "block";
}


let acum_maquina = 0;
const ganaMaquina = () => {
    acum_maquina += 1;
    puntos_maquina.textContent = acum_maquina;
    resultado.textContent = "GANA LA MAQUINA"

}

let acum_juagdor = 0;
const pierdeMaquina = () => {
    acum_juagdor += 1;
    puntos_jugador.textContent = acum_juagdor;
    resultado.textContent = "GANA EL JUGADOR"

}

const comprobarJugada = () => {
    if (imagen_jugador.src === imagen_maquina.src) {
        resultado.textContent = "EMPATE";
    } else {
        /* comprobar quien gana */
        if (imagen_jugador.src.split("/")[5] == "tijera.png") {
            if (imagen_maquina.src.split("/")[5] == "piedra.png") {
                console.log("gana la maquina");
                ganaMaquina();
            } else {
                console.log("pierde la maquina");
                pierdeMaquina();
            }
        }
        if (imagen_jugador.src.split("/")[5] == "piedra.png") {
            if (imagen_maquina.src.split("/")[5] == "papel.png") {
                console.log("gana la maquina");
                ganaMaquina();
            } else {
                console.log("pierde la maquina");
                pierdeMaquina();
            }
        }
        if (imagen_jugador.src.split("/")[5] == "papel.png") {
            if (imagen_maquina.src.split("/")[5] == "tijera.png") {
                console.log("gana la maquina");
                ganaMaquina();
            } else {
                console.log("pierde la maquina");
                pierdeMaquina();
            }
        }
    }
}

const comprobarVictoria = (victoria) => {

    if (acum_juagdor > acum_maquina) {
        return 1;
    }

    if (acum_juagdor < acum_maquina) {
        return 2;
    }

    if(acum_maquina === acum_juagdor){
        return 3;
    }
}

const CrearBotonReinicio = () => {
    let newArticle = document.createElement("article");
    let newP = document.createElement("P");

    newP.textContent = "REINICIAR JUEGO";
    newP.classList.add("btn__reinicio");

    newArticle.append(newP);
    caja__btn.append(newArticle);
}

const ReiniciarPartida = (event) => {

    if (event.target.tagName == "P") {
        // Recargar la página
        location.reload();
    }

}

const deshabilitarBoton = () => {
    btn__jugar.style.display = "none";
    visor__opciones.style.display = "none";
}

const CrearMensaje = () => {
    let newArticle = document.createElement("article");
    let newP = document.createElement("P");

    if (comprobarVictoria() === 1) {
        newP.textContent = "HAS GANADOOOOO!!!";
        newP.classList.add("victoria");
    }
    if (comprobarVictoria() === 2) {
        newP.textContent = "OOOOOH HAS PERDIDO!";
        newP.classList.add("perdida");
    }
    if(comprobarVictoria() === 3){
        newP.textContent = "EMPATEEEEEE!!";
        newP.classList.add("perdida");
    }

    newArticle.append(newP);
    caja__mensaje.append(newArticle);
}

const Jugar = () => {

    if (contador > 1) {
        //queda mas de una jugada
        imagenMaquina()
        comprobarJugada()
    } else {
        //en la ultima jugada
        imagenMaquina()
        comprobarJugada()
        /**/
        // se espera medio segundo para sacar el boton reinicio y quitar el de jugar
        setTimeout(() => {
            //llamamos a la creacion del boton de reinicio
            CrearBotonReinicio();
            //ocultamos las opciones del jugador
            deshabilitarBoton();
            //mostramos el boton de reinicio
            caja__btn.style.display = "flex";
            //Llamamos a la funcion que crea el mensaje del resultado final
            CrearMensaje();
            //mostramos el mensaje
            caja__mensaje.style.display = "flex"
        }, 500);
    }

    contador--;

}

/* eventos */

document.addEventListener("DOMContentLoaded", ocultadoInicial);
visor__configuracion.addEventListener("click", Configuracion);
visor__opciones.firstElementChild.addEventListener("click", ElegirJugada);
btn__jugar.addEventListener("click", Jugar);
caja__btn.addEventListener("click", ReiniciarPartida)
