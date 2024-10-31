function validateAvailableTickets(requestedTickets, maxTickets) { //Verifica si el número de tickets solicitado no supera la capacidad máxima de la sala.
  if (requestedTickets > maxTickets) {
    return false;
  } else {
    return true;
  }
}

function calculateIncomePerAssistant(totalIncome, assistants) { //Calcula el ingreso promedio por asistente, dado el ingreso total y el número de asistentes.

  return totalIncome / assistants;
}

function generateConcertID(concertDate, basePrize) { //Genera un ID único para el concierto combinando la fecha y el precio del ticket.
  return concertDate + basePrize;
}
