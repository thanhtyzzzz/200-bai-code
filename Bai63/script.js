// Auto populate day, month, year dropdowns
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');

for (let i = 1; i <= 31; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 1; i <= 12; i++) {
    monthSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

const currentYear = new Date().getFullYear();
for (let i = 1970; i <= currentYear; i++) {
    yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Handle register button click
document.getElementById('registerBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const day = daySelect.value;
    const month = monthSelect.value;
    const year = yearSelect.value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Collect hobbies
    const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked'))
        .map((checkbox) => checkbox.value)
        .join(', ');

    const favoriteColor = document.querySelector('input[name="color"]:checked').value;

    // Validate inputs
    if (!name) {
        alert("Tên không được để trống.");
        document.getElementById('name').focus();
        return;
    }

    if (!email.includes('@')) {
        alert("Email không hợp lệ.");
        document.getElementById('email').focus();
        return;
    }

    // Add data to the table
    const memberTable = document.getElementById('memberTable').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${day}/${month}/${year}</td>
        <td>${hobbies}</td>
        <td>${favoriteColor}</td>
    `;

    // Add mouseover and mouseout effects
    newRow.addEventListener('mouseover', () => {
        newRow.style.backgroundColor = 'yellow';
    });
    newRow.addEventListener('mouseout', () => {
        newRow.style.backgroundColor = 'white';
    });

    memberTable.appendChild(newRow);

    // Reset form after adding
    document.getElementById('registrationForm').reset();
    document.getElementById('name').focus();
});

// Xử lý khi bấm nút "Tiếp"
document.getElementById('resetBtn').addEventListener('click', function () {
    // Đợi form được reset xong rồi focus vào ô "Tên"
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 0);
});
