// Hiển thị giờ hiện tại
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Gọi ngay khi tải trang

// Xử lý click chuột trái hoặc phải vào dòng
document.querySelectorAll('tr').forEach((row) => {
    row.addEventListener('click', (event) => {
        if (event.button === 0) { // Chuột trái
            alert('Bạn vừa click chuột trái vào dòng này!');
        } else if (event.button === 2) { // Chuột phải
            alert('Bạn vừa click chuột phải vào dòng này!');
        }
    });
});

// Đổi màu nền dòng khi click
const table = document.getElementById('dynamicTable');
table.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
        const row = event.target.parentNode;
        if (row.style.backgroundColor === 'red') {
            row.style.backgroundColor = ''; // Bỏ màu
        } else {
            row.style.backgroundColor = 'red'; // Đặt màu vàng
        }
    }
});

// Thêm một dòng mới vào bảng
document.getElementById('addRow').addEventListener('click', () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>Dòng mới cột 1</td>
        <td>Dòng mới cột 2</td>
        <td>Dòng mới cột 3</td>
    `;
    table.querySelector('tbody').appendChild(newRow);
});

// Xóa dòng có nền màu vàng
document.getElementById('deleteRow').addEventListener('click', () => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach((row) => {
        if (row.style.backgroundColor === 'red') {
            row.remove();
        }
    });
});

// Chỉ hiển thị dòng đầu tiên (ẩn tất cả các dòng khác)
document.getElementById('showOnlyRow').addEventListener('click', () => {
    const rows = table.querySelectorAll('tr'); // Lấy tất cả các dòng (cả <thead> và <tbody>)

    rows.forEach((row, rowIndex) => {
        if (rowIndex === 0) {
            row.style.display = ''; // Hiển thị dòng đầu tiên
        } else {
            row.style.display = 'none'; // Ẩn các dòng khác
        }
    });
});

// Chỉ hiển thị cột (ẩn cột khác ngoài cột 1)
document.getElementById('showOnlyCol').addEventListener('click', () => {
    const cells = table.querySelectorAll('td, th');
    cells.forEach((cell, index) => {
        if ((index % 3) !== 0) { // Ẩn cột 2 và cột 3
            cell.style.display = 'none';
        }
    });
});

// Hiện tất cả các cột và dòng
document.getElementById('showAllCols').addEventListener('click', () => {
    // Hiển thị tất cả các dòng trong bảng (cả <thead> và <tbody>)
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
        row.style.display = ''; // Hiển thị tất cả các dòng
    });

    // Hiển thị tất cả các cột (cả <th> và <td>)
    const cells = table.querySelectorAll('td, th');
    cells.forEach((cell) => {
        cell.style.display = ''; // Hiển thị tất cả các ô
    });
});

// Mở trang mới
document.getElementById('openNewPage').addEventListener('click', () => {
    window.open('https://tranduythanh.com', '_blank');
});
