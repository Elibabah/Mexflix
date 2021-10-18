// ------------------------------------------// D O M //--------------------------------------------//
// -------------------// OBTENER VALORES DE BÚSQUEDA PARA PROCESARLOS EN APP.JS //----------------- //

// ------------------------------------------ PANTALLAS -------------------------------------------//
document.getElementById("screen1").hidden = false // Mostrar pantalla 1
document.getElementById("screen2").hidden = true // Ocultar pantalla 2

// --------------------------------------- ACCESO USUARIO ----------------------------------------- //
let acceso = document.getElementById("imagen-acceso")
acceso.addEventListener("click", function() {
    document.getElementById("screen1").hidden = true // Ocultar pantalla 1
    document.getElementById("screen2").hidden = false // Mostrar pantalla 2
})

//--------------------------------------- TRAER POR TÍTULO -----------------------------------------//

// Importar películas desde API. Recibe el EXPORT de data.js
import { getMoviefromAPI } from "./data.js"; // "getMoviefromAPI" debe coincidir tanto en IMPORT como en EXPORT


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
buttonSearch.addEventListener("click", searchMovie) //Escuchador de evento para que al "click" se enlace a la función