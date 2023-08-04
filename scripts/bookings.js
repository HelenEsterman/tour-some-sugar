import { getBands, getBookings } from "./database.js";

const bookings = getBookings()
const bands = getBands()

export const bookingsList = () => {
    let bookingHtml = ""
    bookingHtml += "<ul>"

    for (const booking of bookings) {
        bookingHtml += `<li data-type="bookings" data-band="${booking.bandName}">${booking.bandName} is playing at ${booking.venueName} on ${booking.bookingDate}</li>`
    }
    bookingHtml += "</ul>"
    return bookingHtml
}

document.addEventListener(
    "click",
    (theClickEvent) => {
        const clickTarget = theClickEvent.target
        if(clickTarget.dataset.type === "bookings"){
            const dataBand = clickTarget.dataset.band
            let bandInfo = ""
            for (const band of bands) {
                if(band.name === dataBand){
                    bandInfo += `${band.name} \n${band.genre} \nFormed in ${band.year} \n${band.members} band members`
                }
            }
            window.alert(bandInfo)
        }
    }
)