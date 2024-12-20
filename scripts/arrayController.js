function showConcerts(){

    document.getElementById("showConcerts").innerHTML = "";

    for(let i = 0; i < concerts.length; i++){
        
        let organizationGanancies = (Number(concerts[i].totalIncome) - (Number(concerts[i].totalIncome) * (Number(concerts[i].artistPercentage) / 100)));
        let artistGanancies = (Number(concerts[i].totalIncome) * (Number(concerts[i].artistPercentage) / 100));
    
        document.getElementById("showConcerts").innerHTML +=
            "<div class='concert"+ (i+1) +"'>" + 
            "Concierto: " + concerts[i].validatedName + "<br>" + 
            "Descripción: " +concerts[i].description + "<br>" +
            "Fecha: " + concerts[i].formatedDate + "<br>" + 
            "Días de antelación: " + concerts[i].daysBefore + "<br>" +
            "Fecha de aviso: " + concerts[i].dateAdvise + "<br>" +
            "Fecha de venta: " + concerts[i].sellingDate + "<br>" +
            "Precio base: " + concerts[i].basePrice + "<br>" +
            "Tickets vendidos: " + concerts[i].soldTickets + "<br>" +
            "Porcentaje artista: " + concerts[i].artistPercentage + "<br>" +
            "Ingresos totales: " + concerts[i].totalIncome + "<br>" +
            "Tickets restantes: " + (concerts[i].maxTickets - concerts[i].soldTickets) + "<br>" +
            "Asistentes Maximos: " + concerts[i].maxTickets + "<br>" +
            "Nombre artista: " + concerts[i].artistName + "<br>" +
            "Ganancias artista: " + artistGanancies.toFixed(2) + "<br>" +
            "Ganancias organización: " + (organizationGanancies < 0 ? 0 : organizationGanancies).toFixed(2) + "<br>" +
            "ID: " + concerts[i].id + "</div>" +
            "Estacion: " + concerts[i].season + 
            "<br>";
    }
    

}   

function showConcert(){

    document.getElementById("showConcerts").innerHTML = "";

    let i = document.getElementById("searchConcert").value - 1;

    let organizationGanancies = (Number(concerts[i].totalIncome) - (Number(concerts[i].totalIncome) * (Number(concerts[i].artistPercentage) / 100)));
    let artistGanancies = (Number(concerts[i].totalIncome) * (Number(concerts[i].artistPercentage) / 100));

    document.getElementById("showConcerts").innerHTML +=
            "<div class='concert"+ (i+1) +"'>" + 
            "Concierto: " + concerts[i].validatedName + "<br>" + 
            "Descripción: " +concerts[i].description + "<br>" +
            "Fecha: " + concerts[i].formatedDate + "<br>" + 
            "Días de antelación: " + concerts[i].daysBefore + "<br>" +
            "Fecha de aviso: " + concerts[i].dateAdvise + "<br>" +
            "Fecha de venta: " + concerts[i].sellingDate + "<br>" +
            "Precio base: " + concerts[i].basePrice + "<br>" +
            "Tickets vendidos: " + concerts[i].soldTickets + "<br>" +
            "Porcentaje artista: " + concerts[i].artistPercentage + "<br>" +
            "Ingresos totales: " + concerts[i].totalIncome + "<br>" +
            "Tickets restantes: " + (concerts[i].maxTickets - concerts[i].soldTickets) + "<br>" +
            "Asistentes Maximos: " + concerts[i].maxTickets + "<br>" +
            "Nombre artista: " + concerts[i].artistName + "<br>" +
            "Ganancias artista: " + artistGanancies.toFixed(2) + "<br>" +
            "Ganancias organización: " + (organizationGanancies < 0 ? 0 : organizationGanancies).toFixed(2) + "<br>" +
            "ID: " + concerts[i].id + "</div>" +
            "Estacion: " + concerts[i].season + 
            "<br>";
}

function modifyConcert(){

    let concertID =  document.getElementById("searchConcert").value - 1;
    
    document.getElementById("showConcerts").innerHTML +=
        "<br><br>" +
        "<label for='ticketAmount'>Cantidad de entradas: </label>" +
        "<input type='number' id='ticketAmount' name='ticketAmount'>" +
        "<br><br>" +
        "<label for='discountCode'>Código de descuento: </label>" +
        "<input type='string' id='discountCode' name='discountCode'>" +
        "<br><br>"+
        "<button value onclick='buyTickets(" + concertID  + ")' >Vender entradas</button>" +
        "";

}