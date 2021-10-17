// ----------------------------- FUNCIONES DE RENDEREADO API -----------------------------------//
// ------------ OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS ---------------//

/*
//--------------------------------------- C A T Á L O G O -------------------------------//

let traerMuestra1 = (movieData) => {
    console.log(movieData)
    let películaNombre = document.getElementById("nombre")
    let películaAño = document.getElementById("año")
    let películaDirector = document.getElementById("director")
    let películaPoster = document.getElementById("poster")

    películaNombre.innerHTML = movieData.Title // Traer nombre
    películaAño.innerHTML = movieData.Year // TRAER AÑO
    películaDirector.innerHTML = movieData.Director //Director
    películaPoster.setAttribute("src", movieData.Poster) // Traer póster
}



export let traerMuestraPorAPI = () => { // SE EXPORTA DESDE API CON getMoviefromAPI que coincide con IMPORTACIÓN

    //P R O M E S A S

    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=cbd9e008" + "&apikey=cbd9e008")
        .then((response) => { //-----------------------------P R O M E S A 
            console.log(response)
            response.json()
                .then((data) => traerMuestra1(data)) // ----------PROMESA
                .catch((error) => console.log(error)) // ----------CANALIZAR ERROR DE BÚSQUEDA
        })
        .finally(() => console.log("promesa resueltas")) // -------------FIN DE PROMESAS 
}

*/
//----------------------------------- B Ú S Q U E D A ----------------------------------//

//Funciones para renderear (obtener) película
let renderingMovie = (movieData) => {
    console.log(movieData)
    let movieName = document.getElementById("movie-name")
    let movieImg = document.getElementById("movie-img")
    let movieYear = document.getElementById("movie-year")
    let movieActors = document.getElementById("movie-actors")
    let movieReleased = document.getElementById("movie-released")
    let movieGenre = document.getElementById("movie-genre")
    let movieDirector = document.getElementById("movie-director")
    let movieLanguage = document.getElementById("movie-language")
    let movieRuntime = document.getElementById("movie-runtime")

    //ACTIVAR LAS VARIABLES (Título, poster, año, actores, director)

    movieName.innerHTML = movieData.Title // TRAER TÍTULO DE PELÍCULA
    movieImg.setAttribute("src", movieData.Poster) // TRAER PÓSTER
    movieYear.innerHTML = movieData.Year // TRAER AÑO
    movieActors.innerHTML = movieData.Actors // Traer actores 
    movieReleased.innerHTML = movieData.Released //fecha lanzamiento
    movieGenre.innerHTML = movieData.Genre // Género
    movieDirector.innerHTML = movieData.Director //Director
    movieLanguage.innerHTML = movieData.Language //Lenguage
    movieRuntime.innerHTML = movieData.Runtime //Duración
}

export let getMoviefromAPI = (movieParaBuscar) => { // SE EXPORTA DESDE API CON getMoviefromAPI que coincide con IMPORTACIÓN

    //P R O M E S A S

    fetch("https://www.omdbapi.com/?t= '' + ''" + `${movieParaBuscar}` + "&apikey=cbd9e008")
        .then((response) => { //-----------------------------P R O M E S A 
            console.log(response)
            if (response.status == 404) { //------- RESPUESTA A ERROR 404
                alert("Esa película no existe. Por favor, revisa el nombre");
            } else {
                response.json()
                    .then((data) => renderingMovie(data)) // ----------PROMESA
                    .catch((error) => console.log(error)) // ----------CANALIZAR ERROR DE BÚSQUEDA
            }
        })

    .finally(() => console.log("promesas resueltas")) // -------------FIN DE PROMESAS 

}

/*

//--------------------------------------- INTENTANDO TREAER AÑO -------------------------------//


//Funciones para renderear (obtener) año
let renderingYear = (movieData) => {
    console.log(movieData)
    let movieName = document.getElementById("movie-name")
    let movieImg = document.getElementById("movie-img")
    let movieYear = document.getElementById("movie-year")
    let movieActors = document.getElementById("movie-actors")
    let movieReleased = document.getElementById("movie-released")
    let movieGenre = document.getElementById("movie-genre")
    let movieDirector = document.getElementById("movie-director")
    let movieLanguage = document.getElementById("movie-language")


    //ACTIVAR LAS VARIABLES (Título, poster, año, actores, director)

    movieName.innerHTML = movieData.Title // TRAER TÍTULO DE PELÍCULA
    movieImg.setAttribute("src", movieData.Poster) // TRAER PÓSTER
    movieYear.innerHTML = movieData.Year // TRAER AÑO
    movieActors.innerHTML = movieData.Actors // Traer actores 
    movieReleased.innerHTML = movieData.Released //fecha lanzamiento
    movieGenre.innerHTML = movieData.Genre // Género
    movieDirector.innerHTML = movieData.Director //Director
    movieLanguage.innerHTML = movieData.Language //Lenguage
}



export let getYearfromAPI = (añoParaBuscar) => { // SE EXPORTA DESDE API CON getMoviefromAPI que coincide con IMPORTACIÓN

    //P R O M E S A S

    fetch("https://www.omdbapi.com/?y=" + `${añoParaBuscar}` + "&apikey=cbd9e008")
        .then((response) => { //-----------------------------P R O M E S A 
            console.log(response)
            if (response.status == 404) { //------- RESPUESTA A ERROR 404
                alert("No hay películas con ese año o el año tiene un error");
            } else {
                response.json()
                    .then((data) => renderingYear(data)) // ----------PROMESA
                    .catch((error) => console.log(error)) // ----------CANALIZAR ERROR DE BÚSQUEDA
            }
        })

    .finally(() => console.log("promesas resueltas")) // -------------FIN DE PROMESAS 

}

*/