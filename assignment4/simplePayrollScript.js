document.addEventListener("DOMContentLoaded", () => {
    const employeeForm = document.getElementById("employeeForm");
    const tableBody = document.getElementById("tableBody");
    let rowCount = 0;

    employeeForm.addEventListener("submit", event => {
        event.preventDefault();
        addEmployee();
        employeeForm.reset();
    });

    function addEmployee() {
        const employeeName = document.getElementById("employeeName").value;
        const daysWorked = document.getElementById("daysWorked").value;
        const dailyRate = document.getElementById("dailyRate").value;
        const deductionAmount = document.getElementById("deductionAmount").value;

        rowCount++;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rowCount}</td>
            <td>${employeeName}</td>
            <td>${daysWorked}</td>
            <td>${dailyRate}</td>
            <td>--value--</td>
            <td>${deductionAmount}</td>
            <td>--value--</td>
        `;

        tableBody.appendChild(row);
    }
});
