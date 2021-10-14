// ----------------------------- FUNCIONES DE RENDEREADO API -----------------------------------//
// ------------ OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS ---------------//

//Crear función para renderear película
let renderingMovie = (movieData) => {
    let movieName = document.getElementById("movie-name")
    let movieImg = document.getElementById("movie-img")
    movieName.innerHTML = movieData.name
    movieImg.setAttribute("src", movieData.sprites.front.default)

    fetch("http://www.omdbapi.com/?t='' + ''" + `${movieParaBuscar}` + "&apikey=cbd9e008")
        .then((respose) => {
            console.log(response)
            if (response.status == 404) {
                alert("Esa película no existe. Revisa el título")
            } else {
                respose.json()
                    .then((data) => renderingMovie(data))
                    .catch((error) => console.log(error))
            }
        })

    .finally(() => console.log("promesas resueltas"))

}