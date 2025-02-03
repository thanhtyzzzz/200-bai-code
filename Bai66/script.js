function parseXML() {
    const xmlString = document.getElementById('xmlInput').value;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

    const mssv = xmlDoc.getElementsByTagName('mssv')[0].textContent;
    const hoTen = xmlDoc.getElementsByTagName('hoTen')[0].textContent;
    const ngaySinh = xmlDoc.getElementsByTagName('ngaySinh')[0].textContent;
    const gioiTinh = xmlDoc.getElementsByTagName('gioiTinh')[0].textContent;

    document.getElementById('mssv').textContent = mssv;
    document.getElementById('hoTen').textContent = hoTen;
    document.getElementById('ngaySinh').textContent = ngaySinh;
    document.getElementById('gioiTinh').textContent = gioiTinh;

    addMouseEvents();
}

function addMouseEvents() {
    const rows = document.querySelectorAll('#infoTable tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'blue';
            row.style.color = 'white';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = 'white';
            row.style.color = 'black';
        });
    });
}
