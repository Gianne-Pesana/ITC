document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ti").addEventListener("keyup", (event) => {
    let taxableIncome = parseFloat(document.getElementById("ti").value);
    let taxPayable = document.getElementById("tp");
    let incomeTax = 0;

    // check invalid input
    if (isNaN(taxableIncome)) {
      taxPayable.innerText = "";
      return;
    }

    // calculate tax payable
    if (taxableIncome >= 8000000) {
      incomeTax = 2410000 + 0.35 * (taxableIncome - 8000000);
    } else if (taxableIncome >= 2000000) {
      incomeTax = 490000 + 0.32 * (taxableIncome - 2000000);
    } else if (taxableIncome >= 800000) {
      incomeTax = 130000 + 0.3 * (taxableIncome - 800000);
    } else if (taxableIncome >= 400000) {
      incomeTax = 30000 + 0.25 * (taxableIncome - 400000);
    } else if (taxableIncome >= 250000) {
      incomeTax = 0.2 * (taxableIncome - 250000);
    }

    taxPayable.innerText = parseFloat(incomeTax.toFixed(2)).toLocaleString();
  });
});
