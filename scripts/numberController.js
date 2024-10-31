function validarTicketsDisponibles(purchasedTickets, maxTickets) {
  if (purchasedTickets > maxTickets) {
    return false;
  } else {
    return true;
  }
}

function calcularIngresoPorAsistente(totalIncome, assistants) {
  return totalIncome / assistants;
}

function generarIDConcierto(concertDate, basePrize) {
  return concertDate + basePrize;
}
