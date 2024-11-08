function addListeners(){
    document.getElementById(celsius).addEventListener("keyup", () => {
        let celsiusInput = document.getElementById("celsius").value;
        let resultElement = document.getElementById("resultC-F");
    
        if (celsiusInput === "") {
            resultElement.innerText = ""; // Clear output if input is empty
        } else {
            let fahrenheitOutput = (parseFloat(celsiusInput) * 9 / 5) + 32;
            resultElement.innerText = `${celsiusInput}°C is ${fahrenheitOutput.toFixed(2)}°F`;
        }
    })
}

function calcCelsius() {
    let fahrenheitInput = document.getElementById("fahrenheit").value;
    let resultElement = document.getElementById("resultF-C");

    if (fahrenheitInput === "") {
        resultElement.innerText = ""; // Clear output if input is empty
    } else {
        let celsiusOutput = (parseFloat(fahrenheitInput) - 32) * 5 / 9;
        resultElement.innerText = `${fahrenheitInput}°F is ${celsiusOutput.toFixed(2)}°C`;
    }
}

function calcFeet() {
    let metersInput = document.getElementById("meters").value;
    let resultElement = document.getElementById("resultM-Ft");

    if (metersInput === "") {
        resultElement.innerText = ""; // Clear output if input is empty
    } else {
        let feetOutput = parseFloat(metersInput) * 3.281;
        resultElement.innerText = `${metersInput}m is ${feetOutput.toFixed(2)}ft`;
    }
}

function calcMeters() {
    let feetInput = document.getElementById("feet").value;
    let resultElement = document.getElementById("resultFt-M");

    if (feetInput === "") {
        resultElement.innerText = ""; // Clear output if input is empty
    } else {
        let metersOutput = parseFloat(feetInput) / 3.281;
        resultElement.innerText = `${feetInput}ft is ${metersOutput.toFixed(2)}m`;
    }
}

// main function
(() => {
    addListeners();
})()