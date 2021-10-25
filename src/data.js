// ---------------------------------// FUNCIONES DE RENDEREADO API //----------------------------------------//
// ------------------// OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS //--------------------//


//-----------------------------------//->  B Ú S Q U E D A  <-//--------------------------------------------//

//--------------------------- Funciones para renderear (obtener) película ----------------------------------//
let renderingMovie = (movieData) => {
    if (movieData.Response == "False") { //-------------------Película no encontrada Status 200
        alert("Esa película no se encuentra.")
    } else {
        let search = document.getElementById("pelischild")
        search.innerHTML = ""
        for (const movie of movieData.Search) {
            console.log(movie)
            search.innerHTML +=
                '<div class="card" style="width: 13rem;">' +
                '<img class="responsive-image" src=' + `${movie.Poster}` + " class='card-img-top' alt='sin póster'" + '/>' +
                '<div class="card-body">' +
                '<h5 class= "flex-item" class= "card-title">' + `${movie.Title}` + '</h5>' +
                '<p class="card-text">' + `${movie.Year}` + '</p>' +
                '</div>' + "<br>" +
                '</div>'
        }
    }
}

//--------------- Se exporta desde API con getMoviefromAPI que coincide con IMPORTACIÓN -------------------//
export let getMoviefromAPI = (movieParaBuscar) => {

    // Promesas

    fetch("https://www.omdbapi.com/?s=" + `${movieParaBuscar}` + "&apikey=cbd9e008") // fetch (ir a buscar)
        .then((response) => { //-----------------------------Promesa 
            console.log(response)
            if (response.status == 404 || response.status == 401) { //------- Respuesta a Error 404 o 401
                alert("No Encontrado o No Autorizado");
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
let movieSelection = ["totoro", "ponyo", "inside out", "luca", "paw patrol", "coco", "toy story 3", "moana", "the good dinosaur", "playmobil"]

// Traer película seleccionada desde API
// Iterar selección // Fetch a la API
for (const item of movieSelection) {
    console.log(item)
    fetch("https://www.omdbapi.com/?t=" + item + "&apikey=cbd9e008") // Fetch para traer película
        .then((response) => response.json()) // Traer película con json como objeto
        .then((data) => renderingSelectedMovies(data)) // Renderear película para activarla con let
        .catch((error) => console.log(error)) // Atrapar error
}


// Rendereado de selección de películas
let renderingSelectedMovies = (data) => {
    console.log(data)
        // Activar las variables - Imprimir en HTML
    let movieSelectionSection = document.getElementById("muestra-modal")
    movieSelectionSection.innerHTML += "<div class='card' style='width: 13rem'>" +
        "<b>" + `${data.Title}` + "</b>" +
        "<a>" + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=`${data.name}`/>' + "</a>" +
        "<div class='card-body'>" +
        "<p><b>Year:</b>" + "<br>" + `${data.Year}` + "</p>" +
        "<p><b>Time:</b>" + "<br>" + `${data.Runtime}` + "</p>" +
        "<p><b>Genre:</b>" + "<br>" + `${data.Genre}` + "</p>" +
        "<p><b>Review:</b>" + "<br>" + `${data.Plot}` + "</p>" +
        "</div>"
}