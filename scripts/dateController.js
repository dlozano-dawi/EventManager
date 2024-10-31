function makeReminder(date, days) {
    let formatedDate = date.toString().split("/").reverse().join("/");
    
    return subtractTimeFromDate(Date.parse(formatedDate), days);
}

function subtractTimeFromDate(date, days) {
    var addMlSeconds = ((days * 24) * 60) * 60000;
    var newDateObj = new Date(date - addMlSeconds);
    return newDateObj;
}