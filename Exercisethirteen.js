// Exercise 13: Multiplication Tables 1 to 10

for (let table = 1; table <= 100; table++) {
  console.log(`${table}`);
  for (let multiplier = 1; multiplier <= 100; multiplier++) {
    console.log(`${table} x ${multiplier} = ${table * multiplier}`);
  }
}