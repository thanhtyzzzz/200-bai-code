// Function to handle mouseover event for the row
function handleMouseOver(event) {
    // Change the background color of the row to yellow
    event.currentTarget.style.backgroundColor = 'yellow';
    // Change the background color of all cells in the row to yellow
    event.currentTarget.querySelectorAll('td').forEach((cell) => {
      cell.style.backgroundColor = 'yellow';
    });
  }
  
// Function to handle mouseleave event for the row
function handleMouseLeave(event) {
// Change the background color of the row to blue
event.currentTarget.style.backgroundColor = '#2e74b5';
// Change the background color of all cells in the row to blue
event.currentTarget.querySelectorAll('td').forEach((cell) => {
    cell.style.backgroundColor = '#2e74b5';
});
}
  

// Get all the table rows (TR elements)
const rows = document.querySelectorAll('tbody tr');

// Add mouseover and mouseleave event listeners to each row
rows.forEach((row) => {
    row.addEventListener('mouseover', handleMouseOver);
    row.addEventListener('mouseleave', handleMouseLeave);
});