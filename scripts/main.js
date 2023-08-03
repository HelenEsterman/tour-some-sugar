import { bandsList } from "./bands.js"
import { bookingsList } from "./bookings.js"
import { venuesList } from "./venues.js"

const mainContainer = document.querySelector(".container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${bookingsList()}
</article>
<article class="details">
    <section class="detail--column">
        <h2>Venues</h2>
        ${venuesList()}
    </section>
    <section class="detail--column">
        <h2>Bands</h2>
        ${bandsList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML