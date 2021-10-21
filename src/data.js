// ---------------------------------// FUNCIONES DE RENDEREADO API //----------------------------------------//
// ------------------// OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS //--------------------//


//-----------------------------------//->  B Ú S Q U E D A  <-//--------------------------------------------//

//--------------------------- Funciones para renderear (obtener) película ----------------------------------//
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
    let moviePlot = document.getElementById("movie-plot")

    //Activar las variables (título, poster, año, actores, director)
    movieName.innerHTML = movieData.Title // Traer título
    movieImg.setAttribute("src", movieData.Poster) // Traer póster
    movieYear.innerHTML = movieData.Year // Traer año
    movieActors.innerHTML = movieData.Actors // Traer actores 
    movieReleased.innerHTML = movieData.Released // Traer fecha de lanzamiento
    movieGenre.innerHTML = "Genre: " + movieData.Genre // Traer género
    movieDirector.innerHTML = movieData.Director // Traer director
    movieLanguage.innerHTML = movieData.Language // Traer lenguage
    movieRuntime.innerHTML = movieData.Runtime // Traer duración
    moviePlot.innerHTML = movieData.Plot // Traer reseña
}

//--------------- Se exporta desde API con getMoviefromAPI que coincide con IMPORTACIÓN -------------------//
export let getMoviefromAPI = (movieParaBuscar) => {

    // Promesas

    fetch("https://www.omdbapi.com/?t=" + `${movieParaBuscar}` + "&apikey=cbd9e008")
        .then((response) => { //-----------------------------Promesa 
            console.log(response)
            if (response.status == 404) { //------- Respuesta a Error 404
                alert("Esa película no existe. Por favor, revisa el nombre");
            } else {
                response.json()
                    .then((data) => renderingMovie(data)) // Promesa (de la función para renderear declarada arriba)
                    .catch((error) => console.log(error)) // Canalizar error de búsqueda
            }
        })
        .finally(() => console.log("promesas resueltas")) // -------------Fin de promesas 
}


//--------------------------------------//-> C A T Á L O G O <-//--------------------------------------------//

//Array de selección para "Te han gustado:"
let movieSelection = ["totoro", "ponyo", "inside out", "luca", "paw patrol", "coco", "toy story 3", "moana", "the good dinosaur"]

// Traer película seleccionada desde API
// Iterar selección // Fetch a la API
for (const item of movieSelection) {
    console.log(item)
    fetch("https://www.omdbapi.com/?t=" + item + "&apikey=cbd9e008") // Fetch para traer película
        .then((response) => response.json()) // Traer película con json para compatibilizar el código
        .then((data) => renderingSelectedMovies(data)) // Renderear película para activarla con let
        .catch((error) => console.log(error)) // Atrapar error
}


// Rendereado de selección de películas
let renderingSelectedMovies = (data) => {
    console.log(data)

    // Activar las variables - Imprimir en HTML
    let movieSelectionSection = document.getElementById("muestra")
    movieSelectionSection.innerHTML += "<div class='card' style='width: 18rem'>" +
        `${data.Title}` +
        '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=`${data.name}`/>' +
        "<div class='card-body'>" +
        `${data.Year}` + '</br>' +
        `${data.Runtime}` + '</br>' + "<p>Genre: </p>" +
        `${data.Genre}` + '</br>' + '</br>' +
        `${data.Plot}` +
        "</div>"
}