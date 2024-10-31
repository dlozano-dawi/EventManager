// lista

// concierto
let concerts = new Array();


// Funcion que cogera los inputs y los metera en nuestra lista de conciertos como un objeto nuevo
function getNewConcert() {
    let concert = {
        date: document.getElementById("").value, // fechaConcierto
        daysBefore: document.getElementById("").value, // dias de antelacion
        sellingDate: document.getElementById("").value, // fecha de venta
        name: document.getElementById("").value, // nombre de concierto
        validatedName: "", // nombre de concierto formateado - (Lo gestiona Oscar, no te rayes Dani) 
        basePrice: document.getElementById("").value, // Precio base
        discount: document.getElementById("").value, // Descuento
        ticketPrice: document.getElementById("").value, // Precio ticket
        soldTickets: document.getElementById("").value, // Tickets vendidos
        artistPercentage: document.getElementById("").value, // Lo que se lleva el artista
        totalIncome: document.getElementById("").value, // Ingresos totales
        maxTickets: document.getElementById("").value, // Tickets maximos
        assistans: document.getElementById("").value, // Asistentes
        purchasedTickets: document.getElementById("").value,
        artistName: document.getElementById("").value // Nombre artista
    }

    concerts.push(concert)
}