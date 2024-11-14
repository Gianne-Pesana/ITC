document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const deleteEmployeeBtn = document.getElementById('deleteEmployeeBtn');
    const deleteModal = document.getElementById('deleteModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const confirmDeleteLineBtn = document.getElementById('confirmDeleteLineBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const deleteLineNumberInput = document.getElementById('deleteLineNumber');
    const tableBody = document.getElementById('tableBody');
    const noDataRow = document.getElementById('noDataRow');
    
    // Initialize row number counter
    let rowCount = 0;

    // Add Employee Button Functionality
    addEmployeeBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const daysWorked = document.getElementById('daysWorked').value;
        const dailyRate = document.getElementById('dailyRate').value;
        const deduction = document.getElementById('deduction').value;

        if (name && daysWorked && dailyRate && deduction) {
            // Increase row count and create a new row
            rowCount++;

            const grossPay = daysWorked * dailyRate;
            const netPay = grossPay - deduction;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${rowCount}</td>
                <td>${name}</td>
                <td>${daysWorked}</td>
                <td>${dailyRate}</td>
                <td>${grossPay}</td>
                <td>${deduction}</td>
                <td>${netPay}</td>
            `;

            // Append the row to the table
            tableBody.appendChild(newRow);

            // Hide the "No data" row if data exists
            if (tableBody.childElementCount > 1) {
                noDataRow.style.display = 'none';
            }

            // Clear the input fields after adding the employee
            document.getElementById('name').value = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value = '';
            document.getElementById('deduction').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Delete Employee Button Functionality
    deleteEmployeeBtn.addEventListener('click', () => {
        // Show the delete modal
        deleteModal.style.display = 'flex';
    });

    // Confirm Delete Row Functionality
    confirmDeleteLineBtn.addEventListener('click', () => {
        const rowToDelete = parseInt(deleteLineNumberInput.value);

        if (rowToDelete >= 1 && rowToDelete <= rowCount) {
            // Show the confirmation modal and close the deletion modal
            deleteModal.style.display = 'none';
            confirmationModal.style.display = 'flex';

            // Store the row to delete in the confirmation button
            confirmDeleteBtn.dataset.rowToDelete = rowToDelete;
        } else {
            alert('Invalid row number. Please enter a valid row number.');
        }
    });

    // Confirm Deletion in the Confirmation Modal
    confirmDeleteBtn.addEventListener('click', () => {
        const rowToDelete = parseInt(confirmDeleteBtn.dataset.rowToDelete);

        // Find the row to delete by its index (rowToDelete)
        const rows = tableBody.querySelectorAll('tr');
        const rowToDeleteElement = rows[rowToDelete - 1]; // Select the row using the user input index (adjusted for 0-indexed array)

        if (rowToDeleteElement) {
            // Delete the selected row from the table
            rowToDeleteElement.remove();
            rowCount--; // Decrease row count

            // Update table row numbers
            updateTableRowNumbers();

            // Check if the table is now empty
            if (rowCount === 0) {
                // If there are no rows, show the "No data" row and set text
                tableBody.innerHTML = ''; // Clear all existing rows
                tableBody.appendChild(noDataRow);  // Re-append the "No data" row to refresh the table
                noDataRow.style.display = 'table-row'; // Make sure "No data" is visible
                noDataRow.innerHTML = `<td colspan="7">No data</td>`; 
            }

            // Close the confirmation modal
            confirmationModal.style.display = 'none';

            // Clear the input field after successful deletion
            clearDeleteModalInput();
        }
    });

    // Cancel Deletion in the Confirmation Modal
    cancelDeleteBtn.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
    });

    // Close the Delete Modal
    closeModalBtn.addEventListener('click', () => {
        deleteModal.style.display = 'none';
        clearDeleteModalInput(); // Clear the input field when the modal is closed
    });

    // Update table row numbers after deletion
    function updateTableRowNumbers() {
        const rows = tableBody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            if (row !== noDataRow) { // Exclude the "No data" row from numbering
                row.cells[0].textContent = index + 1;  // Update row number
            }
        });
    }

    // Clear the delete modal input when it closes
    function clearDeleteModalInput() {
        deleteLineNumberInput.value = '';
    }
});
