
let singup_username = document.getElementById("singup_username");
let singup_password = document.getElementById("singup_password");
let singup_age = document.getElementById("singup_age");
let singup_name = document.getElementById("singup_name");

let singup__error__user = document.getElementById("singup__error_user");
let singup__error__psswd = document.getElementById("singup__error_psswd");
let singup__error__age = document.getElementById("singup__error_age");
let singup__error__name = document.getElementById("singup__error_name");
let singup__error = document.getElementById("singup_error");

let boolean = true;
let boolean2 = true;
let boolean3 = true;
let boolean4 = true;
let boolean5 = true;
let boolean6 = true;

const cadenaVacia = (user, password, name) => {
    if (user === "") {
        //usuario vacio 
        singup_username.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        singup__error__user.textContent = "usuario vacio";
        singup__error__user.classList.add("mostrar");
        boolean = false;
    } else {
        singup_username.style.backgroundColor = "white";
        singup__error__user.classList.remove("mostrar");
        boolean = true;
    }

    if (password === "") {
        //contraseña vacia
        singup_password.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        singup__error__psswd.textContent = "contraseña vacia";
        singup__error__psswd.classList.add("mostrar");
        boolean2 = false;
    } else {
        singup_password.style.backgroundColor = "white";
        singup__error__psswd.classList.remove("mostrar");
        boolean2 = true;
    }

    if (name === "") {
        //nombre vacia
        singup_name.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        singup__error__name.textContent = "nombre vacio";
        singup__error__name.classList.add("mostrar");
        boolean6 = false;
    } else {
        singup_name.style.backgroundColor = "white";
        singup__error__name.classList.remove("mostrar");
        boolean6 = true;
    }
}

const numCaracteres = (user, password) => {
    if (user.length <= 8 || user.length >= 30) {
        singup_username.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        singup__error__user.textContent = "El usuario debe tener entre 8 y 30 caracteres";
        singup__error__user.classList.add("mostrar")
        boolean4 = false;
    } else {
        singup_username.style.backgroundColor = "white";
        singup__error__user.classList.remove("mostrar");
        boolean4 = true;
    }

    if (password.length <= 8 || password.length >= 16) {
        singup_password.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        singup__error__psswd.textContent = "La contraseña debe tener entre 8 y 16 caracteres";
        singup__error__psswd.classList.add("mostrar");
        boolean5 = false;
    } else {
        singup_password.style.backgroundColor = "white";
        singup__error__psswd.classList.remove("mostrar");
        boolean5 = true;
    }
}

// podria compara la cadena vacia de la edad en el metodo cadenaVacia()
// pero lo haremos en este metodo para vacilitar la validacion final
// para pasar al juego.
const comprobarEdad = (edad) => {

    if (edad === "") {
        singup_age.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
            singup__error__age.textContent = "Edad vacia";
            singup__error__age.classList.add("mostrar");
    } else {
        if (edad <= 18) {
            singup_age.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
            singup__error__age.textContent = "Has de ser mayor de edad para jugar";
            singup__error__age.classList.add("mostrar");
            boolean3 = false;
        } else {
            singup_age.style.backgroundColor = "white";
            singup__error__age.classList.remove("mostrar");
            boolean3 = true;
        }
    }
}



// Login de Usuarios
const singupUser = (event) => {
    // Acción por defecto del evento
    event.preventDefault();

    let name = singup_name.value;
    let user = singup_username.value;
    let password = singup_password.value;
    let edad = singup_age.value;

    //comprobar si es una cadena vacia
    cadenaVacia(user, password, name);

    //comprobar el numero de caracteres tras comprobar la cadena vacia
    if (boolean || boolean2) {
        numCaracteres(user, password);
    }

    //comprobar la edad
    comprobarEdad(edad);

    if (boolean && boolean2 && boolean3 && boolean4 && boolean5 && boolean6) {
        location.href = "./juego.html";
    }

}



//eventos

form_singup.addEventListener("submit", singupUser);
