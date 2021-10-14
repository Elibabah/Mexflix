// ----------------------------- FUNCIONES DE RENDEREADO API -----------------------------------//
// ------------ OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS ---------------//

//Crear función para renderear película
let renderingMovie = (movieData) => {
    console.log(movieData)
    let movieName = document.getElementById("movie-name")
    let movieImg = document.getElementById("movie-img")
        //ACTIVAR ELEMENTOS
    movieName.innerHTML = movieData.Title // TRAER TÍTULO DE PELÍCULA
    movieImg.setAttribute("src", movieData.Poster) // TRAER PÓSTER
}

export let getMoviefromAPI = (movieParaBuscar) => { // SE EXPORTA DESDE API CON getMoviefromAPI que coincide con IMPORTACIÓN

    fetch("http://www.omdbapi.com/?t= '' + ''" + `${movieParaBuscar}` + "&apikey=cbd9e008")
        .then((response) => { //-----------------------------P R O M E S A 
            console.log(response)
            if (response.status == 404) { //------- RESPUESTA AL ERROR 404
                alert("Esa película no existe. Por favor, revisa el nombre");
            } else {
                response.json()
                    .then((data) => renderingMovie(data)) // ----------PROMESA
                    .catch((error) => console.log(error)) // ----------CANALIZAR ERROR DE BÚSQUEDA
            }
        })

    .finally(() => console.log("promesas resueltas"))

}