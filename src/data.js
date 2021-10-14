// ----------------------------- FUNCIONES DE RENDEREADO API -----------------------------------//
// ------------ OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS ---------------//

//Crear función para renderear película
let renderingMovie = (movieData) => {
    let movieName = document.getElementById("movie-name")
    let movieImg = document.getElementById("movie-img")
    movieName.innerHTML = movieData.name
    movieImg.setAttribute("src", movieData.sprites.front.default)
}

fetch("http://www.omdbapi.com/?t=" + `${movieParaBuscar}` + "&apikey=cbd9e008")



/*export let getPokemonfromAPI = (pokemonParaBuscar) => {

    fetch("https://pokeapi.co/api/v2/pokemon/" + `${pokemonParaBuscar}`) //no es una string, es una variable por las comillas invertidas ``

    .then((response) => {
        console.log(response)
        if (response.status == 404) {
            alert("ese pokemon NO EXISTE; ¿seguro que se escribe así?")
        } else {
            response.json()
                .then((data) => renderingPokemon(data))
                .catch((error) => console.log(error))
        }
    })*/

/*.then((data) => renderingPokemon(data))

.catch((error) => console.log(error))*/

/*    .finally(() => console.log("promesas resueltas"))

} */