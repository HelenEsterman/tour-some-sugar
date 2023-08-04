import { getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bookings = getBookings()

export const venuesList = () => {
    let venueHtml = ""
    venueHtml += "<ul>"

    for (const venue of venues) {
        venueHtml += `<li data-type="venues" data-venue="${venue.name}">${venue.name}</li>`
    }
    venueHtml += "</ul>"

    return venueHtml
}

document.addEventListener(
    "click",
    (theClickEvent) =>{
        const clickTarget = theClickEvent.target
        if(clickTarget.dataset.type === "venues"){
            let bandNames = ""
            const dataVenue = clickTarget.dataset.venue
            for (const booking of bookings) {
                if(booking.venueName === dataVenue){
                    bandNames += `${booking.bandName}, `
                }
            }
            let windowAlertString = `The bands booked at this venue include ${bandNames}`
            window.alert(windowAlertString.slice(0,-2))
        }
    }
)