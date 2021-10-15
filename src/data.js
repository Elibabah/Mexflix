// ----------------------------- FUNCIONES DE RENDEREADO API -----------------------------------//
// ------------ OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS ---------------//

//Funciones para renderear (obtener) película
let renderingMovie = (movieData) => {
    console.log(movieData)
    let movieName = document.getElementById("movie-name")
    let movieImg = document.getElementById("movie-img")
    let movieYear = document.getElementById("movie-year")
    let movieActors = document.getElementById("movie-actors")
    let movieReleased = document.getElementById("movie-released")


    //ACTIVAR LAS VARIABLES (Título, poster, año, actores, director)

    movieName.innerHTML = movieData.Title // TRAER TÍTULO DE PELÍCULA
    movieImg.setAttribute("src", movieData.Poster) // TRAER PÓSTER
    movieYear.innerHTML = movieData.Year // TRAER AÑO
    movieActors.innerHTML = movieData.Actors // Traer actores 
    movieReleased.innerHTML = movieData.Released //fecha lanzamiento
}

export let getMoviefromAPI = (movieParaBuscar) => { // SE EXPORTA DESDE API CON getMoviefromAPI que coincide con IMPORTACIÓN

    //P R O M E S A S

    fetch("http://www.omdbapi.com/?t= '' + ''" + `${movieParaBuscar}` + "&apikey=cbd9e008")
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