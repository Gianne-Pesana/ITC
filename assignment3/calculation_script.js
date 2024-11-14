document.addEventListener("DOMContentLoaded", () => {
    const calcFactorial = document.getElementById("factorialId");
    const calcSumOfN = document.getElementById("sumId");
    const calcAverage = document.getElementById("averageId");

    calcFactorial.addEventListener("click", () => {
        const n = parseFloat(document.getElementById("factorialInput").value);
        const factorialOutput = document.getElementById("factorialOutput");
        let result = 1;

        let i = n;
        while (i > 1) {
            result *= i;
            i--;
        }

        factorialOutput.innerText = `${n}! = ${result}`;
    })

    calcSumOfN.addEventListener("click", () => {
        const sumInput = document.getElementById("sumInput").value;
        const sumOutputText = document.getElementById("sumOutputText");
        const sumOutputNumber = document.getElementById("sumOutputNumber");
        const n = parseFloat(sumInput);

        // check not number inputs
        if (isNaN(n)) {
            sumOutputText.innerText = "Please enter a valid number";
            sumOutputNumber.innerText = "";
            return;
        }

        let result = 0;
        let i = 1;

        do {
            result += i;
            i++;
        } while (i <= n);

        sumOutputText.innerText = `Sum of the first ${n} numbers is:`;
        sumOutputNumber.innerText = result;
    })

    calcAverage.addEventListener("click", () => {
        const averageInput = document.getElementById("averageInput").value;
        const averageOutputText = document.getElementById("averageOutputText");
        const averageOutputNumber = document.getElementById("averageOutputNumber");
        const n = parseFloat(averageInput);

        if (isNaN(n)) {
            averageOutputText.innerText = `Please enter a valid number`;
            averageOutputText.innerText = "";
            return;
        }

        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += i;
        }

        result /= n;

        averageOutputText.innerText = `Average of the first ${n} numbers is:`;
        averageOutputNumber.innerText = result;
    })
})