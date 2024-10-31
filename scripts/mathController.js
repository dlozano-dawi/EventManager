function calcularPreciodiscount(basePrize, discount) {
  return basePrize - (basePrize * discount) / 100;
}

function calcularIngresosEsperados(ticketPrize, soldTickets) {
  return ticketPrize * soldTickets;
}

function calcularDivisionIngresos(totalIncome, artistPercentage) {
  return totalIncome * (artistPercentage / 100);
}
