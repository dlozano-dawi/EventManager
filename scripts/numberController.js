function validateAvailableTickets(requestedTickets, maxTickets) {
  //Verifica si el número de tickets solicitado no supera la capacidad máxima de la sala.
  if (requestedTickets > maxTickets) {
    return false;
  } else {
    return true;
  }
}

function calculateIncomePerAssistant(totalIncome, assistants) {
  //Calcula el ingreso promedio por asistente, dado el ingreso total y el número de asistentes.

  return totalIncome / assistants;
}

function generateConcertID() {
  //Genera un ID único para el concierto basandose en el tamaño del array de conciertos.
  return concerts.length + 1;
}


function buyTickets(id) {
  console.log(id)
  let tickets = document.getElementById("ticketAmount").value
  let discount = document.getElementById("discountCode").value
  concerts[id].soldTickets = tickets
  total = getPrice(id, tickets, discount)
  concerts[id].totalIncome = total
  
  let output = "La cantidad a pagar es: " + total

  showConcert()
  modifyConcert()

  document.getElementById("showConcerts").innerHTML += 
    "<br><br>" +
    output
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
    case "AUTUMN10":
      discountAplicated = 0.9;
      break;
    default:
      break;
  }
  return +concerts[id].basePrice * +tickets * +discountAplicated;
}

