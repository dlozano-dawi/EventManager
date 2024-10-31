function calculateDiscountPrize(basePrize, discount) {
  return basePrize - (basePrize * discount) / 100;
}

function calculateExpectedIncome(ticketPrize, soldTickets) {
  return ticketPrize * soldTickets;
}

function calculateIncomeDivision(totalIncome, artistPercentage) {
  return totalIncome * (artistPercentage / 100);
}
