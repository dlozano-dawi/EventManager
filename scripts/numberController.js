function generateConcertID() {
  //Genera un ID único para el concierto basandose en el tamaño del array de conciertos.
  return concerts.length + 1;
}


function buyTickets(id) {
  console.log(id)
  let tickets = document.getElementById("ticketAmount").value
  let discount = document.getElementById("discountCode").value
  let output = ""
  
  // TODO checkear si quedan entradas
  if (Number(concerts[id].soldTickets) + Number(tickets) <= concerts[id].maxTickets) {
    concerts[id].soldTickets = Number(concerts[id].soldTickets) + Number(tickets);
    total = getPrice(id, tickets, discount);
    concerts[id].totalIncome = (Number(concerts[id].totalIncome) + Number(total)).toFixed(2);
    output = "La cantidad a pagar es: " + total;
  } else {
    output = "No quedan tantos tickets";
  }

  showConcert()
  modifyConcert()
  
  document.getElementById("showConcerts").innerHTML += 
    "<br><br>" +
    output;
}

function getPrice(id, tickets, discount) {
  let discountAplicated = 1;
  switch (discount) {
    case "SUMMER20":
      discountAplicated = 0.8;
      break;
    case "WINTER20":
      discountAplicated = 0.8;
      break;
    case "SPRING15":
      discountAplicated = 0.85;
      break;
    case "FALL10":
      discountAplicated = 0.9;
      break;
    default:
      break;
  }
  return +concerts[id].basePrice * +tickets * +discountAplicated;
}

