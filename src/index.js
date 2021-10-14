// ------------------------------------- D O M ------------------------------------------//
// ------------ OBTENER VALORES DE BÚSQUEDA PARA PROCESARLOS EN APP.JS ----------------- //



//funtion to be triggered from search button
let searchMovie = () => {
    //bring input value
    let searchValue = document.getElementById("searchInput").value
    getMoviefromAPI(searchValue)
}

//bring button to give afunction
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchMovie)