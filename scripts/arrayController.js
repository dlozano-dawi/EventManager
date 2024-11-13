function showConcerts(){

    document.getElementById("showConcerts").innerHTML = "";

    for(let i = 0; i < concerts.length; i++){
        
        document.getElementById("showConcerts").innerHTML +=
            "<div class='concert"+ (i+1) +"'>" + 
            "Concierto: " + concerts[i].validatedName + "<br>" + 
            "Descripción: " +concerts[i].description + "<br>" +
            "Fecha: " + concerts[i].date + "<br>" + 
            "Días de antelación: " + concerts[i].daysBefore + "<br>" +
            "Fecha de aviso: " + concerts[i].dateAdvise + "<br>" +
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
            "ID: " + concerts[i].id + "</div>" +
            "Estacion: " + concerts[i].season + 
            "<br>";
            

    }
    

}   

function showConcert(){

    document.getElementById("showConcerts").innerHTML = "";

    let i = document.getElementById("searchConcert").value - 1;

    document.getElementById("showConcerts").innerHTML +=
            "<div class='concert"+ (i+1) +"'>" + 
            "Concierto: " + concerts[i].validatedName + "<br>" + 
            "Descripción: " +concerts[i].description + "<br>" +
            "Fecha: " + concerts[i].date + "<br>" + 
            "Días de antelación: " + concerts[i].daysBefore + "<br>" +
            "Fecha de aviso: " + concerts[i].dateAdvise + "<br>" +
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
            "ID: " + concerts[i].id + "</div>" +
            "Estacion: " + concerts[i].season + 
            "<br>";

    modifyConcert(i);

}

function modifyConcert(id){

    let concertID = id;
    
    document.getElementById("showConcerts").innerHTML +=
        "<br><br>" +
        "<button value onclick='buyTickets(" + concertID  + ")' >Comprar entradas</button>" +
        "<br>"+
        "<label for='ticketAmount'>Cantidad de entradas: </label>" +
        "<input type='number' id='ticketAmount' name='ticketAmount'>" +
        "<br><br>" +
        "<label for='discountCode'>Código de descuento: </label>" +
        "<input type='number' id='discountCode' name='discountCode'>" +
        "";

}