function formatConcertName(name) {
    return name
    .toLowerCase()
    .split(" ") //Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //Capitalize the first letter of each word
    .join(" "); //Join the array back into a string
}

function createEventDescription(validatedName, artistName, date) {
    return `Come see ${artistName} perform at ${validatedName} on ${date}.`;
}

function validateArtistName(artistName) {
    return artistName.trim();
}

function applyDiscount (discount) {
    switch (discount) {
        case "SUMMER10":
            return 0.9;
        case "FALL15":
            return 0.85;
        case "WINTER20":
            return 0.9;
        case "SPRING15":
            return 0.85;
        default:
            return 1;
    }
}
