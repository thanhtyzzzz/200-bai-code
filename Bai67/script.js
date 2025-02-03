function loadXML() {
    fetch('student.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
            displayStudents(xmlDoc);
        })
        .catch(error => console.error('Error loading XML:', error));
}

function displayStudents(xmlDoc) {
    const sinhviens = xmlDoc.getElementsByTagName('sinhvien');
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = '';

    for (let sinhvien of sinhviens) {
        const mssv = sinhvien.getElementsByTagName('mssv')[0].textContent;
        const hoTen = sinhvien.getElementsByTagName('hoTen')[0].textContent;
        const ngaySinh = sinhvien.getElementsByTagName('ngaySinh')[0].textContent;
        const gioiTinh = sinhvien.getElementsByTagName('gioiTinh')[0].textContent;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mssv}</td>
            <td>${hoTen}</td>
            <td>${ngaySinh}</td>
            <td>${gioiTinh}</td>
        `;

        row.addEventListener('click', () => {
            document.getElementById('detailMSSV').textContent = mssv;
            document.getElementById('detailHoTen').textContent = hoTen;
            document.getElementById('detailNgaySinh').textContent = ngaySinh;
            document.getElementById('detailGioiTinh').textContent = gioiTinh;
            document.getElementById('detailSection').style.display = 'block';
        });

        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'yellow';
        });

        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });

        tbody.appendChild(row);
    }
}

function sortTable(columnIndex) {
    const tbody = document.querySelector('#studentTable tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.trim();
        const cellB = b.cells[columnIndex].textContent.trim();

        return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}