// lista

// concierto
let concerts = new Array();


// Funcion que cogera los inputs y los metera en nuestra lista de conciertos como un objeto nuevo
function getNewConcert() {
    let concert = {
        date: document.getElementById("concertDate").value,
        formatedDate: formatDate(document.getElementById("concertDate").value), // fechaConcierto
        daysBefore: document.getElementById("daysBefore").value, // dias de antelacion
        dateAdvise: makeReminder(document.getElementById("concertDate").value, document.getElementById("daysBefore").value), // fecha de aviso, calculando fecha del concierto con los dias de preaviso
        sellingDate: document.getElementById("saleDate").value, // fecha de venta
        daysSellsBeforeStart: calculateAntelation(document.getElementById("concertDate").value, document.getElementById("saleDate").value), // dias de venta antes del concierto
        name: document.getElementById("concertName").value, // nombre de concierto
        validatedName: formatConcertName(document.getElementById("concertName").value), // nombre de concierto formateado - (Lo gestiona Oscar, no te rayes Dani) 
        basePrice: document.getElementById("basePrice").value, // Precio base
        discount: 0, // Descuento calculado según el código de descuento al comprar el ticket
        soldTickets: 0, // Tickets vendidos, inicialmente son 0
        artistPercentage: document.getElementById("artistPercentage").value, // Lo que se lleva el artista
        totalIncome: "", // Ingresos totales
        maxTickets: document.getElementById("maxTickets").value, // Tickets maximos
        assistans: document.getElementById("assistans").value, // Asistentes
        ticketsForSell: "", //hay que calcular tickets totales - tickets vendidos
        artistName: document.getElementById("artistName").value, // Nombre artista
        id: generateConcertID(), //ID para el concierto
        description: createEventDescription(
            formatConcertName(document.getElementById("concertName").value),
            document.getElementById("artistName").value,
            formatDate(document.getElementById("concertDate").value)
        ), // Descripcion del evento
        season: getSeason(document.getElementById("concertDate").value)
    }

    concerts.push(concert)

    console.log(concerts);
}