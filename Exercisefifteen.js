// Exercise 15: Logical Operator Challenge

function checkConcertEntry (hasTicket, age, isVIP, isChaperoned) {
  if (isVIP) {
    console.log('VIP: You may enter.');
  } else if (age >= 18 && hasTicket) {
    console.log('Adult with ticket: You may enter.');
  } else if (age < 18 && hasTicket && isChaperoned) {
    console.log('Minor with ticket and chaporone: You may enter.');
  } else {
    console.log('Entry denied.');
  }
}

checkConcertEntry(true, 25, false, false);
checkConcertEntry(false, 25, false, false);
checkConcertEntry(true, 15, false, true);
checkConcertEntry(false, 12, true, false);
checkConcertEntry(false, 16, false, true);