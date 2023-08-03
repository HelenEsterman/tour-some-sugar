import { getVenues } from "./database.js";

const venues = getVenues()

export const venuesList = () => {
    let venueHtml = ""
    venueHtml += "<ul>"

    for (const venue of venues) {
        venueHtml += `<li>${venue.name}</li>`
    }
    venueHtml += "</ul>"

    return venueHtml
}