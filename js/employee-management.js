/*eslint-env browser*/

window.onload = () => {
    // Initial Employees
    let employees = [
        ["Alice Johnson", "Manager", 1234],
        ["Bob Smith", "Engineer", 5678],
        ["Charlie Brown", "Designer", 9101],
        ["Diana Prince", "Developer", 1121],
        ["Ethan Hunt", "Analyst", 3141]
    ];

    const tableBody = document.querySelector("#employeeTable tbody");
    const form = document.querySelector("#addEmployeeForm");
    const header = document.querySelector("#header");

    // Display Employees in Table
    const displayEmployees = () => {
        tableBody.innerHTML = "";
        employees.forEach((emp, index) => {
            const row = document.createElement("tr");

            emp.forEach(item => {
                const td = document.createElement("td");
                td.textContent = item;
                row.appendChild(td);
            });

            const deleteCell = document.createElement("td");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                employees.splice(index, 1);
                displayEmployees();
            });
            deleteCell.appendChild(deleteBtn);
            row.appendChild(deleteCell);
            tableBody.appendChild(row);
        });

        header.textContent = `Showing ${employees.length} Employees`;
    };

    // Validate Input Fields
    const validateInput = (id, message) => {
        const input = document.getElementById(id);
        const error = document.getElementById(id + "Error");
        if (input.value.trim() === "") {
            error.textContent = message;
            return false;
        } else {
            error.textContent = "";
            return true;
        }
    };

    // Add Employee
    form.addEventListener("submit", e => {
        e.preventDefault();
        const isNameValid = validateInput("name", "Enter a name!");
        const isTitleValid = validateInput("title", "Enter a title!");
        const isExtValid = validateInput("extension", "Enter an extension!");

        if (isNameValid && isTitleValid && isExtValid) {
            const name = document.getElementById("name").value.trim();
            const title = document.getElementById("title").value.trim();
            const extension = document.getElementById("extension").value.trim();

            employees.push([name, title, extension]);
            form.reset();
            displayEmployees();
        }
    });

    displayEmployees();
};
