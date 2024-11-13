function makeReminder(date, days) {

    console.log(date);
    console.log(days);

    let formatedDate = date.toString().split("-").reverse().join("-");

    console.log(formatedDate);
    console.log(Date.parse(formatedDate));
    console.log(subtractTimeFromDate(Date.parse(formatedDate), days));

    return subtractTimeFromDate(Date.parse(formatedDate), days);
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