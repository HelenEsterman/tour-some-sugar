import { getBands, getBookings } from "./database.js";

const bands = getBands()
const bookings = getBookings()

export const bandsList = () => {
    let bandHtml = ""
    bandHtml += "<ul>"

    for (const band of bands) {
        bandHtml += `<li data-type="bands" data-band="${band.name}">${band.name}</li>`
    }
    bandHtml += "</ul>"

    return bandHtml
}

document.addEventListener(
    "click",
    (theClickEvent) =>{
        const clickTarget = theClickEvent.target
        if(clickTarget.dataset.type === "bands"){
            let venueNames = ""
            const dataBand = clickTarget.dataset.band
            for (const booking of bookings) {
                if(booking.bandName === dataBand){
                    venueNames += `${booking.venueName}, `
                }
            }
            let windowAlertString = `The venues booked by this band include ${venueNames}`
            window.alert(windowAlertString.slice(0,-2))
        }
    }
)