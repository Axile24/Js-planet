//Main js module

import {getPlanet} from "./apiRequests.js"
import {overlay, planetFigures, sunSlice} from "./ElementSet.js";
import {displayPlanetData, hideOverlay, setPlanetSizes} from "./uppdatePlanet.js";



setPlanetSizes()

// när man cklickr på en planet fås informatione
for (const planet of planetFigures) {
    planet.addEventListener('click', async() => {

        const planetName = planet.getAttribute('alt')
        const planetData = await getPlanet(planetName)

        displayPlanetData(planetData)
        
    })
}

sunSlice.addEventListener('click', async() => {
    const sunData = await getPlanet('Solen')
    displayPlanetData(sunData)
})


overlay.modal.addEventListener('click', () => {
    hideOverlay()
}) 