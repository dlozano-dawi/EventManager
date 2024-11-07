function showConcerts(){

    document.getElementById("showConcerts").innerHTML = "";

    for(let i = 0; i < concerts.length; i++){
        
        document.getElementById("showConcerts").innerHTML +=
            "<div class='concert"+ (i+1) +"'>" + 
            "Concierto: " + concerts[i].name + "<br>" + 
            "Fecha: " + concerts[i].date + "<br>" + 
            "Dias de antelación: " + concerts[i].daysBefore + "<br>" +
            "Fecha de venta: " + concerts[i].sellingDate + "<br>" +
            "Precio base: " + concerts[i].basePrice + "<br>" +
            "Descuento: " + concerts[i].discount + "<br>" +
            "Precio ticket: " + concerts[i].ticketPrice + "<br>" +
            "Tickets vendidos: " + concerts[i].soldTickets + "<br>" +
            "Porcentaje artista: " + concerts[i].artistPercentage + "<br>" +
            "Ingresos totales: " + concerts[i].totalIncome + "<br>" +
            "Tickets maximos: " + concerts[i].maxTickets + "<br>" +
            "Asistentes: " + concerts[i].assistans + "<br>" +
            "Tickets solicitados: " + concerts[i].requestedTickets + "<br>" +
            "Nombre artista: " + concerts[i].artistName + "<br>" +
            "ID: " + concerts[i].id + "</div>"
            +"<br>";
            

    }
    

}   

function showConcert(){

    document.getElementById("showConcerts").innerHTML = "";

    let i = document.getElementById("searchConcert").value - 1;

    document.getElementById("showConcerts").innerHTML +=
            "<div class='concert"+ (i+1) +"'>" + 
            "Concierto: " + concerts[i].validatedName + "<br>" + 
            "Fecha: " + concerts[i].date + "<br>" + 
            "Dias de antelación: " + concerts[i].daysBefore + "<br>" +
            "Fecha de venta: " + concerts[i].sellingDate + "<br>" +
            "Precio base: " + concerts[i].basePrice + "<br>" +
            "Descuento: " + concerts[i].discount + "<br>" +
            "Precio ticket: " + concerts[i].ticketPrice + "<br>" +
            "Tickets vendidos: " + concerts[i].soldTickets + "<br>" +
            "Porcentaje artista: " + concerts[i].artistPercentage + "<br>" +
            "Ingresos totales: " + concerts[i].totalIncome + "<br>" +
            "Tickets maximos: " + concerts[i].maxTickets + "<br>" +
            "Asistentes: " + concerts[i].assistans + "<br>" +
            "Tickets solicitados: " + concerts[i].requestedTickets + "<br>" +
            "Nombre artista: " + concerts[i].artistName + "<br>" +
            "ID: " + concerts[i].id + "</div>"
            +"<br>";

}

function modifyConcert(){

    document.getElementById("showConcerts").innerHTML = "";

    let concertID = 0;
    
    document.getElementById("showConcerts").innerHTML +=
        "<br><br>" +
        "<button value onclick >Comprar entradas</button>" +
        "<input type='number' id='ticketAmount' name='ticketAmount'>" +
        "<br><br>" +
        "<button onclick=''></button>";


}