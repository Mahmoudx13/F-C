function convertTemperature() {
  var temp = parseFloat(document.getElementById("tempInput").value);
  var unit = document.getElementById("unitSelect").value;
  var result;

  // Convert Celsius to Fahrenheit
  result = unit === "CtoF" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;

  // Show the result
  document.getElementById("result").innerText =
    unit === "CtoF"
      ? temp + "°C = " + result.toFixed(2) + "°F"
      : temp + "°F = " + result.toFixed(2) + "°C";
}
