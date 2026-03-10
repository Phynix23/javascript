// Exercise 5: Tempearture Converter

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let celsius = 100;
console.log(
  `${celsius} ${celsiusToFahrenheit(celsius)}`
);

celsius = 0;
console.log(
  `${celsius} ${celsiusToFahrenheit(celsius)}`
);

celsius = 37;
console.log(
  `${celsius} ${celsiusToFahrenheit(celsius)}`
)