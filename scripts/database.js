// lista

// concierto
let concerts = new Array();


// Funcion que cogera los inputs y los metera en nuestra lista de conciertos como un objeto nuevo
function getNewConcert() {
    let concert = {
        date: document.getElementById("concertDate").value, // fechaConcierto
        daysBefore: "", // dias de antelacion
        sellingDate: document.getElementById("saleDate").value, // fecha de venta
        name: document.getElementById("concertName").value, // nombre de concierto
        validatedName: formatConcertName(document.getElementById("concertName").value), // nombre de concierto formateado - (Lo gestiona Oscar, no te rayes Dani) 
        basePrice: document.getElementById("basePrice").value, // Precio base
        discount: "", // Descuento
        ticketPrice: calculatefinalTicketPrize( document.getElementById("basePrice").value) , // Precio ticket MARC
        soldTickets: document.getElementById("soldTickets").value, // Tickets vendidos
        artistPercentage: document.getElementById("artistPercentage").value, // Lo que se lleva el artista
        totalIncome: "", // Ingresos totales
        maxTickets: document.getElementById("maxTickets").value, // Tickets maximos
        assistans: document.getElementById("assistans").value, // Asistentes
        requestedTickets: document.getElementById("requestedTickets").value, // requestedTickets
        artistName: document.getElementById("artistName").value, // Nombre artista
        id: generateConcertID(), //ID para el concierto
        description: createEventDescription(validatedName, artistName, date) // Descripcion del evento
    }

    concerts.push(concert)

    console.log(concerts);
}