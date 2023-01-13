var fetchButton = document.getElementById("fetch-btn")
var responseText = document.getElementById("response-text")

function getUL(item) {
    return `<li>${item}</li>`
}

fetchButton.addEventListener("click", async () => {
    var response = await fetch("/.netlify/functions/pokedex")
    var data = await response.json()
    var locations = data.pokemon.locations
    var inner = `<ul>`
    for (let i = 0; i < locations.length; i++) {
        inner += getUL(locations[i])
    }
    inner += "</ul>"
    responseText.innerHTML = inner
})