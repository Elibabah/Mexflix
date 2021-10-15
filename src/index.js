// ------------------------------------- D O M ------------------------------------------//
// ------------ OBTENER VALORES DE BÚSQUEDA PARA PROCESARLOS EN APP.JS ----------------- //


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