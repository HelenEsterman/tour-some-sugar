import { getBookings } from "./database.js";

const bookings = getBookings()

export const bookingsList = () => {
    let bookingHtml = ""
    bookingHtml += "<ul>"

    for (const booking of bookings) {
        bookingHtml += `<li>${booking.bandName} are playing at ${booking.venueName} on ${booking.bookingDate}</li>`
    }
    bookingHtml += "</ul>"
    return bookingHtml
}