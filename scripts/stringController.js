function formatConcertName(name) {
    return name
    .toLowerCase()
    .split(" ") //Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //Capitalize the first letter of each word
    .join(" "); //Join the array back into a string
}

function createEventDescription(validatedName, artistName, formatedDate) {
    return `Ven a ver actuar a ${artistName} en ${validatedName} el próximo ${formatedDate}.`;
}

function validateArtistName(artistName) {
    return artistName.trim();
}
