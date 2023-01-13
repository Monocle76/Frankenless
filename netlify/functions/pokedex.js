const Pokemon = require("pokemon.js");
const { json } = require("stream/consumers");
Pokemon.setLanguage("english")

exports.handler = async () => {
    const pokemon = await Pokemon.getRegion("kanto");
    // const kanto = await pokemon.stringify()
    return {
        statusCode: 200,
        body: JSON.stringify({
            "pokemon": pokemon
        })
    }
}