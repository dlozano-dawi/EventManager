function formatConcertName(name) {
    return name.titleCase();
}

function createEventDescription(validatedName, artistName, date) {
    return `Come see ${artistName} perform at ${validatedName} on ${date}.`;
}

function validateArtistName(artistName) {
    return artistName.trim().titleCase();
}