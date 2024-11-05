
let login_username = document.getElementById("login_username");
let login_password = document.getElementById("login_password");

let login__error__user = document.getElementById("login__error_user");
let login__error__psswd = document.getElementById("login__error_psswd");
let login__error = document.getElementById("login_error");

let boolean = true;
let boolean2 = true;

let users = ["alvaro gomez"];
let passwords = ["alvarogomez"];


const cadenaVacia = (user, password) => {
    if (user === "") {
        //usuario vacio 
        login_username.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        login__error__user.textContent = "usuario vacio";
        login__error__user.classList.add("mostrar");
        boolean = false;
    } else {
        login_username.style.backgroundColor = "white";
        login__error__user.classList.remove("mostrar");
        boolean = true;
    }

    if (password === "") {
        //contraseña vacia
        login_password.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        login__error__psswd.textContent = "contraseña vacia";
        login__error__psswd.classList.add("mostrar");
        boolean2 = false;
    } else {
        login_password.style.backgroundColor = "white";
        login__error__psswd.classList.remove("mostrar");
        boolean2 = true;
    }
}

const numCaracteres = (user,password) => {
    if (user.length <= 8 || user.length >= 30) {
        login_username.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        login__error__user.textContent = "El usuario debe tener entre 8 y 30 caracteres";
        login__error__user.classList.add("mostrar")
    }else{
        login_username.style.backgroundColor = "white";
        login__error__user.classList.remove("mostrar")
    }

    if (password.length <= 8 || password.length >= 16) {
        login_password.style.backgroundColor = "rgba(255, 99, 71, 0.577)";
        login__error__psswd.textContent = "La contraseña debe tener entre 8 y 16 caracteres";
        login__error__psswd.classList.add("mostrar");
    }else{
        login_password.style.backgroundColor = "white";
        login__error__psswd.classList.remove("mostrar")
    }
}



// Login de Usuarios
const loginUser = (event) => {
    // Acción por defecto del evento
    event.preventDefault();

    let user = login_username.value;
    let password = login_password.value;

    //comprobar si es una cadena vacia
    cadenaVacia(user, password);

    //comprobar el numero de caracteres tras comprobar la cadena vacia
    if(boolean || boolean2){
        numCaracteres(user,password);
    }

    for (let resgitro of users) {
        if (resgitro === user) {
            let posicion = users.indexOf(user);
            // validamos que la contraseña este dentro del array 
            if (passwords[posicion] === password) {
                login_password.value=""; 
                login_username.value="";
                location.href ="./pages/juego.html";
            }else{
                login__error.classList.add("mostrar")
            }
    }else{
        login__error.classList.add("mostrar")
    }
}

}

//eventos

form_login.addEventListener("submit", loginUser);
