// lista

// concierto
let concerts = new Array();


// Funcion que cogera los inputs y los metera en nuestra lista de conciertos como un objeto nuevo
function getNewConcert() {
    let concert = {
        date: document.getElementById("concertDate").value, // fechaConcierto
        daysBefore: document.getElementById("daysBefore").value, // dias de antelacion
        sellingDate: document.getElementById("saleDate").value, // fecha de venta
        name: document.getElementById("concertName").value, // nombre de concierto
        validatedName: "", // nombre de concierto formateado - (Lo gestiona Oscar, no te rayes Dani) 
        basePrice: document.getElementById("basePrice").value, // Precio base
        discount: document.getElementById("discount").value, // Descuento
        ticketPrice: document.getElementById("").value, // Precio ticket
        soldTickets: document.getElementById("soldTickets").value, // Tickets vendidos
        artistPercentage: document.getElementById("artistPercentage").value, // Lo que se lleva el artista
        totalIncome: document.getElementById("totalIncome").value, // Ingresos totales
        maxTickets: document.getElementById("").value, // Tickets maximos
        assistans: document.getElementById("").value, // Asistentes
        purchasedTickets: document.getElementById("").value,
        artistName: document.getElementById("").value // Nombre artista
    }

    concerts.push(concert)
}