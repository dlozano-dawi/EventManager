function calculatefinalTicketPrize(basePrize, discount) {
  //Calcula el precio del ticket después de aplicar un descuento para promociones especiales (porcentaje entre 5% y 30%).
  return basePrize - (basePrize * applyDiscount (discount)) / 100;
}

function calculateExpectedIncome(ticketPrize, soldTickets) {
  // Calcula el ingreso esperado multiplicando el precio del ticket por el número de tickets vendidos.
  return ticketPrize * soldTickets;
}

function calculateIncomeDivision(totalIncome, artistPercentage) {
  //Calcula la cantidad destinada al artista basada en un porcentaje (por ejemplo, 60% para el artista y 40% para la sala).
  return totalIncome * (artistPercentage / 100);
}
