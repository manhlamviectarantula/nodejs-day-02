function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

var celsius = 12;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C is " + fahrenheit + "°F");

var convertedCelsius = fahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + "°F is " + convertedCelsius + "°C");
