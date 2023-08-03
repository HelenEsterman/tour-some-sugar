import { getBands } from "./database.js";

const bands = getBands()

export const bandsList = () => {
    let bandHtml = ""
    bandHtml += "<ul>"

    for (const band of bands) {
        bandHtml += `<li>${band.name}</li>`
    }
    bandHtml += "</ul>"

    return bandHtml
}