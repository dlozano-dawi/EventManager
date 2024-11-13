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
  showConcert()
  modifyConcert()
}

