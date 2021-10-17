// ------------------------------------- D O M ------------------------------------------//
// ------------ OBTENER VALORES DE BÚSQUEDA PARA PROCESARLOS EN APP.JS ----------------- //

// Pantallas
document.getElementById("screen1").hidden = false //Mostrar pantalla 1
document.getElementById("screen2").hidden = true //Ocultar pantalla 2

// Ícono de usuario para acceso
let acceso = document.getElementById("imagen-acceso")
acceso.addEventListener("click", function() {
    document.getElementById("screen1").hidden = true
    document.getElementById("screen2").hidden = false
})

/*
// ------------------------------ C A T Á L O G O --------------------------------------//

import { traerMuestraPorAPI } from "./data.js"; // "getMoviefromAPI" debe coincidir tannto en IMPORT como en EXPORT
function(imprimirMovie) {
    imprimirMovie("muestra1").innerHTML = traerMuestraPorAPI
}*/

//------------------------------ TRAER POR TÍTULO ------------------------------------//

// Importar películas desde API. Recibe el EXPORT de data.js
import { getMoviefromAPI } from "./data.js"; // "getMoviefromAPI" debe coincidir tannto en IMPORT como en EXPORT



// función que se activará desde el botón de búsqueda
let searchMovie = () => {
    //traer valor de entrada
    let searchValue = document.getElementById("searchInput").value
    getMoviefromAPI(searchValue)
}

//traer botón del HTML por ID para darle función
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchMovie) //Escuchador de evento para que al "click" se enlace a la función

/*
//--------------------------- TRAER POR AÑO ---------------------------------------//

// Importar películas por año desde API. Recibe el EXPORT de data.js
import { getYearfromAPI } from "./data.js"; // "getYearfromAPI" debe coincidir tannto en IMPORT como en EXPORT



// función que se activará desde el botón de búsqueda
let searchYear = () => {
    //traer valor de entrada
    let searchValue = document.getElementById("searchInputYear").value
    getYearfromAPI(searchValue)
}

//traer botón del HTML por ID para darle función
let buttonSearch = document.getElementById("searchButtonYear")
buttonSearch.addEventListener("click", searchYear) //Escuchador de evento para que al "click" se enlace a la función
*/