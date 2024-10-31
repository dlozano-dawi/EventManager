function validateAvailableTickets(purchasedTickets, maxTickets) {
  if (purchasedTickets > maxTickets) {
    return false;
  } else {
    return true;
  }
}

function calculateIncomePerAssistant(totalIncome, assistants) {
  return totalIncome / assistants;
}

function generateConcertID(concertDate, basePrize) {
  return concertDate + basePrize;
}
