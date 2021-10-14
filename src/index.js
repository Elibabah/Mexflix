// ------------------------------------- D O M ------------------------------------------//
// ------------ OBTENER VALORES DE BÚSQUEDA PARA PROCESARLOS EN APP.JS ----------------- //



// función que se activará desde el botón de búsqueda
let searchMovie = () => {
    //traer valor de entrada
    let searchValue = document.getElementById("searchInput").value
    getMoviefromAPI(searchValue)
}

//traer botón para darle función
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchMovie)