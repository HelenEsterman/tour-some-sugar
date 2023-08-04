const database = {
    venues : [{
        name: "Maddy Circle Field",
        location: "New York City, New York",
        sqFt: 500,
        maxOccupancy: 50
    },
    {
        name: "The Fake Venew",
        location: "Sydney, Australia",
        sqFt: 300,
        maxOccupancy: 30
    },
    {
        name: "Star Struck Stadium",
        location: "Nashville, Tennesee",
        sqFt: 700,
        maxOccupancy: 70
    },
    {
        name: "Concert Hall",
        location: "Boston, Massachusetts",
        sqFt: 550,
        maxOccupancy: 55
    },
    {
        name: "The Grand Ole Pie",
        location: "Los Angeles, California",
        sqFt: 1000,
        maxOccupancy: 100
    }],

    bands: [{
        name: "The Jean Bean Dream Machine",
        members: 5,
        genre: "Funk",
        year: 1993
    },
    {
        name: "Midnight Migraine",
        members: 3,
        genre: "Pop Punk",
        year: 2005
    },
    {
        name: "Crimson Skies",
        members: 3,
        genre: "Alternative",
        year: 1999
    },
    {
        name: "Celestial Haze",
        members: 4,
        genre: "Alternative",
        year: 1998
    },
    {
        name: "Chromatic Storm",
        members: 4,
        genre: "Afro Beat",
        year: 1989
    },
    {
        name: "Velvet Serenade",
        members: 5,
        genre: "Jazz Hip Hop",
        year: 1995
    },
    {
        name: "Nova Catalyst",
        members: 2,
        genre: "Emo Rap",
        year: 2010
    },
    {
        name: "Solar Flare Syndicate",
        members: 4,
        genre: "Indie Pop",
        year: 2009
    },
    {
        name: "Lunar Echoes",
        members: 4,
        genre: "Folk",
        year: 1979
    },
    {
        name: "Tropical Vibrations",
        members: 4,
        genre: "Reggaeton",
        year: 2001
    }],

    bookings: [{
        id: 1,
        bookingDate: "5/2/24",
        bandName: "The Jean Bean Dream Machine",
        venueName: "Concert Hall"
    },
    {
        id: 2,
        bookingDate: "7/15/24",
        bandName: "The Jean Bean Dream Machine",
        venueName: "The Grand Ole Pie"
    },
    {
        id: 3,
        bookingDate: "5/2/24",
        bandName: "Midnight Migraine",
        venueName: "The Grand Ole Pie"
    },
    {
        id: 4,
        bookingDate: "6/25/24",
        bandName: "Chromatic Storm",
        venueName: "Maddy Circle Field"
    },
    {
        id: 5,
        bookingDate: "7/3/24",
        bandName: "Celestial Haze",
        venueName: "The Fake Venew"
    },
    {
        id: 6,
        bookingDate: "5/5/24",
        bandName: "Solar Flare Syndicate",
        venueName: "Star Struck Stadium"
    },
    {
        id: 7,
        bookingDate: "8/15/24",
        bandName: "The Jean Bean Dream Machine",
        venueName: "Star Struck Stadium"
    },
    {
        id: 8,
        bookingDate: "9/19/24",
        bandName: "Tropical Vibrations",
        venueName: "Maddy Circle Field"
    },
    {
        id: 9,
        bookingDate: "9/19/24",
        bandName: "Nova Catalyst",
        venueName: "The Fake Venew"
    },
    {
        id: 10,
        bookingDate: "5/15/24",
        bandName: "Crimson Skies",
        venueName: "Concert Hall"
    },
    {
        id: 11,
        bookingDate: "8/9/24",
        bandName: "Velvet Serenade",
        venueName: "Maddy Circle Field"
    },
    {
        id: 12,
        bookingDate: "10/7/24",
        bandName: "Chromatic Storm",
        venueName: "The Grand Ole Pie"
    },
    {
        id: 13,
        bookingDate: "6/12/24",
        bandName: "Lunar Echoes",
        venueName: "Star Struck Stadium"
    },
    {
        id: 14,
        bookingDate: "5/5/24",
        bandName: "Tropical Vibrations",
        venueName: "Concert Hall"
    },
    {
        id: 15,
        bookingDate: "8/15/24",
        bandName: "Midnight Migraine",
        venueName: "The Fake Venew"
    }]
}

export const getVenues = () => {
    return structuredClone(database.venues)
}

export const getBands = () => {
    return structuredClone(database.bands)
}

export const getBookings = () => {
    return structuredClone(database.bookings)
}