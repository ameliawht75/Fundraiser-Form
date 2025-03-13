/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.*/

console.log(2+2); //how I check to make sure JavaScript is there and working.

/*What do I need?
-My button on click should add info to table.
-How do I get info from input fields and their value?
-Head: Team Name, Captian, Team Colors - store as a variable.
-Find a way to get the values from the form when we submit then append the info the table.

we need to get values with: getElementById()
which means, we need ID's on our values
*/

document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const formButton = document.getElementById('formSubmit');
    const tableBody = document.getElementById('tBody');

    // Ensure the button and table body exist
    if (!formButton) {
        console.error('Button with id "formSubmit" not found!');
        return;
    }
    if (!tableBody) {
        console.error('Table body with id "tBody" not found!');
        return;
    }

    let number = document.querySelectorAll("#tBody tr").length + 1; // Get number based on existing rows

    formButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission from refreshing the page

        // Get form input values
        let teamName = document.getElementById('teamName').value.trim();
        let teamCaptain = document.getElementById('teamCaptain').value.trim();
        let teamColors = document.getElementById('teamColors').value.trim();

        // Debugging logs
        console.log("Form values:", { teamName, teamCaptain, teamColors });

        // Validate input fields
        if (!teamName || !teamCaptain || !teamColors) {
            alert("Please fill in all fields!");
            return;
        }

        // Create new table row
        let newTableRow = document.createElement('tr');

        // Create table cells and append them
        let numberNode = document.createElement('th');
        numberNode.scope = "row";
        numberNode.textContent = number; // Set row number

        let teamNameNode = document.createElement('td');
        teamNameNode.textContent = teamName;

        let teamCaptainNode = document.createElement('td');
        teamCaptainNode.textContent = teamCaptain;

        let teamColorsNode = document.createElement('td');
        teamColorsNode.textContent = teamColors;

        // Append all cells to the new row
        newTableRow.appendChild(numberNode);
        newTableRow.appendChild(teamNameNode);
        newTableRow.appendChild(teamCaptainNode);
        newTableRow.appendChild(teamColorsNode);

        // Append new row to table body
        tableBody.appendChild(newTableRow);
        console.log("Row added successfully!");

        // Clear form fields after adding the row
        document.getElementById('teamName').value = '';
        document.getElementById('teamCaptain').value = '';
        document.getElementById('teamColors').value = '';

        number++; // Increment number for the next row
    });
});
