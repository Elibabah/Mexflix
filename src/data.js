// ----------------------------- FUNCIONES DE RENDEREADO API -----------------------------------//
// ------------ OBTENER DATOS  DE LA API Y EXPORTARLOS  PARA USARLOS EN APP.JS ---------------//


// Función para renderear películas
let renderingPokemon = (pokemonData) => {
    let pokemonName = document.getElementById("pokemon-name")
    let pokemonImg = document.getElementById("pokemon-img")
    pokemonName.innerHTML = pokemonData.name
    pokemonImg.setAttribute("src", pokemonData.sprites.front_default)
}


export let getPokemonfromAPI = (pokemonParaBuscar) => {

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
    })

    /*.then((data) => renderingPokemon(data))

    .catch((error) => console.log(error))*/

    .finally(() => console.log("promesas resueltas"))

}