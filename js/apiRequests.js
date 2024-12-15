/* TODO 
  url -->asyn-->wait jason-->post-->objekt key-->api key 




*/ 




//url som är base 
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"
typeof(baseUrl)

const getApiKey = async() => {
    const url = baseUrl + "/keys" 
    const options = {
        method: "POST"
    }

    try {
        const response = await fetch(url, options)// url =base url +key , option= post
        const result = await response.json()
        const key = result.key //key tillbaka
        console.log("Nyeckel=======: "+key+"=============");
        
        return key

    } catch(error) {
        console.log(error)
    }
}

const apiKey = await getApiKey() // hämta nyckekl dynmisk? 
console.log(apiKey); // funkar ej???? TOFIX 


//hämta solarsytem info sen exportera 
export const getSolarSystem = async() => {
    const url = baseUrl + "/bodies"
    const options = {
        method: "GET",
        headers: {"x-zocom": apiKey}
    }

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        const bodies = result.bodies
        console.log(bodies);
        
        return bodies
    } catch (error) {
        console.log(error)
    }
}

// name som en parameter för att ta emot ett värde från funktionen get planet och ska användas för att identifiera vilken palnet t.ex mars ? det hämtas flera planeter 
// skicka in id fungerar ej. .. varför kan jag inte bara skicka id? apis inte inställd efter id? jag får alla 

/*export const getPlanet1 = async(id) => {
    const solarSystem = await getSolarSystem() 
    console.log(solarSystem)
    return solarSystem.find(planet => planet.id === id)
    console.log(getPlanet1);
    
}*/

export const getPlanet = async(name) => {
    const solarSystem = await getSolarSystem() //anropas funktionen get solarsystem
    console.log(solarSystem)
    return solarSystem.find(planet => planet.name === name) //använda metoden find för att söka genom listan eller arayen 
}