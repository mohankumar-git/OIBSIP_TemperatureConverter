document.addEventListener("DOMContentLoaded", () => {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertBtn = document.getElementById("convertBtn");
    const resultArea = document.getElementById("resultArea");
  
    function convertTemperature() {
      const temperature = parseFloat(temperatureInput.value);
      const selectedUnit = unitSelect.value;
  
      if (isNaN(temperature)) {
        resultArea.textContent = "Please enter a valid number.";
        return;
      }
  
      let convertedTemperature, convertedUnit;
  
      switch (selectedUnit) {
        case "celsius":
          convertedTemperature = (temperature - 32) * (5 / 9);
          convertedUnit = "Celsius";
          break;
        case "fahrenheit":
          convertedTemperature = (temperature * 9 / 5) + 32;
          convertedUnit = "Fahrenheit";
          break;
        case "kelvin":
          convertedTemperature = temperature + 273.15;
          convertedUnit = "Kelvin";
          break;
        default:
          resultArea.textContent = "Please select a valid unit.";
          return;
      }
  
      resultArea.textContent = `${temperature.toFixed(2)} ${selectedUnit.charAt(0).toUpperCase() + selectedUnit.slice(1)} is ${convertedTemperature.toFixed(2)} ${convertedUnit}.`;
    }
  
    convertBtn.addEventListener("click", convertTemperature);
  });