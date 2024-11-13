function makeReminder(date, days) {
    let dateObj = new Date(date); // Accepts YYYY-MM-DD format directly
    return subtractTimeFromDate(dateObj.getTime(), days);
}

function subtractTimeFromDate(date, days) {
    var addMlSeconds = ((days * 24) * 60) * 60000;
    var newDateObj = new Date(date - addMlSeconds);
    return newDateObj;
}

function getSeason(date) {
    const month = new Date(Date.parse(date)).getMonth() + 1; // getMonth() devuelve 0 para enero, así que sumamos 1
    const day =  new Date(Date.parse(date)).getDate();

    if ((month === 3 && day >= 20) || month === 4 || month === 5 || (month === 6 && day < 21)) {
        return "Primavera";
    } else if ((month === 6 && day >= 21) || month === 7 || month === 8 || (month === 9 && day < 23)) {
        return "Verano";
    } else if ((month === 9 && day >= 23) || month === 10 || month === 11 || (month === 12 && day < 21)) {
        return "Otoño";
    } else {
        return "Invierno";
    }
}

function calculateAntelation(concertDate, sellingDate) {
    // TODO
    var diff = Date.parse(concertDate) - Date.parse(sellingDate);
    return `Tendrás que hacer el recordatorio ${diff/(1000*60*60*24)} días antes`
}

function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    // Check if date is valid
    if (isNaN(date)) {
        throw new Error("Invalid date");
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}