function analzeNumber(n) {
  console.log(`Analyzing number: ${n}`);

  console.log(`Even or odd: ${n % 2 === 0 ? 'even' : 'odd'}`);
  if (n > 0) {
    console.log('Positive, negative, or zero: positive');
  } else if (n < 0) {
    console.log('Positive, negative, or zero: negative')
  } else {
    console.log('Positive, negative, or zero: zero')
  }

  console.log(`Divisible by 4: ${n % 4 === 0 ? 'yes' : 'no'}`);

  const sqrt = Math.sqrt(n);
  const isPerfectSquare = sqrt % 1 === 0;
  console.log(`Perfect square: ${isPerfectSquare ? 'yes' : 'no'}`);

  console.log('---');
}

analzeNumber(36)
analzeNumber(49)
analzeNumber(50)
analzeNumber(-16)
analzeNumber(0)
analzeNumber(100)