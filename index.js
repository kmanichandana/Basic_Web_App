function filterTable() {
    const selected = document.getElementById("filter").value.toLowerCase();
    const tableRows = document.querySelectorAll(".table-body tr");

    tableRows.forEach(row => {
        const category = row.cells[0].innerText.trim().toLowerCase();
        if (selected === "all" || category === selected) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}

document.getElementById("filter").addEventListener("change", filterTable);

document.getElementById("form-entry").addEventListener("submit", function(event) {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const subCategory = document.getElementById("subCategory").value;
    const date = document.getElementById("date").value;  // Get the date input
    const task = document.getElementById("task").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${category}</td>
        <td>${subCategory}</td>
        <td>${date}</td> 
        <td>${task}</td>
        <td>
            <button onclick="updateRow(this)">Update</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    document.querySelector(".table-body").appendChild(newRow);
    document.getElementById("form-entry").reset();  // Reset the form fields
});

function updateRow(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");
    document.getElementById("category").value = cells[0].innerText.trim();
    document.getElementById("subCategory").value = cells[1].innerText.trim();
    document.getElementById("date").value = cells[2].innerText.trim();  // Set the date input
    document.getElementById("task").value = cells[3].innerText.trim();  // Set the task name
    row.remove(); 
}

function deleteRow(button) {
    const row = button.closest("tr");
    row.remove(); 
}
