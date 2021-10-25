// ------------------------------------------// D O M //--------------------------------------------//
// -------------------// OBTENER VALORES DE BÚSQUEDA PARA PROCESARLOS EN APP.JS //----------------- //


// --------------------------------------- ACCESO CUENTA ----------------------------------------- //

let validacion = document.getElementById("entry")
validacion.addEventListener("click", function() {
    let user = document.getElementById("name1").value
    let contraseña = document.getElementById("password").value
    if (user == "o" && contraseña == 1) {
        document.getElementById("screen0").hidden = true // Ocultar pantalla 0
        document.getElementById("screen1").hidden = false // Ocultar pantalla 1
        document.getElementById("screen2").hidden = true // Mostrar pantalla 2
    } else {
        alert("Account not found")
    }
})

// --------------------------------------- ACCESO USUARIO ----------------------------------------- //
let acceso = document.getElementById("imagen-acceso")
acceso.addEventListener("click", function() {
    document.getElementById("screen0").hidden = true // Ocultar pantalla 0
    document.getElementById("screen1").hidden = true // Ocultar pantalla 1
    document.getElementById("screen2").hidden = false // Mostrar pantalla 2
})

//--------------------------------------- TRAER POR TÍTULO -----------------------------------------//

// Importar películas desde API. Recibe el EXPORT de data.js
import { getMoviefromAPI } from "./data.js"; // "getMoviefromAPI" debe coincidir tanto en IMPORT como en EXPORT

//--------------------------------------- Botones funciones ----------------------------------------//

// Función que se activa desde el botón de búsqueda
let searchMovie = () => {
    //traer valor de entrada
    let searchValue = document.getElementById("searchInput").value
    getMoviefromAPI(searchValue)
    let movieCard = document.getElementById("pelischild")
    movieCard.hidden = false
}

//Traer botón del HTML por ID para darle función
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchMovie) //Escuchador de evento para que al click se enlace a función

// ----------------------------------- Salida de la cuenta ------------------------------------//


let volverPantalla0 = document.getElementById("imagen-user")
volverPantalla0.addEventListener("click", function() {
    document.getElementById("screen0").hidden = false // Ocultar pantalla 0
    document.getElementById("screen1").hidden = true // Ocultar pantalla 1
    document.getElementById("screen2").hidden = true // Mostrar pantalla 2
})


// ----------------------------------- Volver a página de usuarios ------------------------------------//


let volverPantalla1 = document.getElementById("imagen-home")
volverPantalla1.addEventListener("click", function() {
    document.getElementById("screen0").hidden = true // Ocultar pantalla 0
    document.getElementById("screen1").hidden = false // Ocultar pantalla 1
    document.getElementById("screen2").hidden = true // Mostrar pantalla 2
})