// Hàm sao chép dữ liệu từ ô nhập sang ô kết quả
function copyInput() {
    const input = document.getElementById('inputString').value;
    document.getElementById('outputString').value = input;
}

// Hàm chuyển chuỗi thành chữ hoa
function toUpperCase() {
    const input = document.getElementById('inputString').value;
    document.getElementById('outputString').value = input.toUpperCase();
}

// Hàm chuyển chuỗi thành chữ thường
function toLowerCase() {
    const input = document.getElementById('inputString').value;
    document.getElementById('outputString').value = input.toLowerCase();
}

// Hàm in mỗi từ trên một dòng
function capitalizeEachWord() {
    const input = document.getElementById('inputString').value;
    const words = input.split(' ');
    const result = words.map(word => word.trim()).join('\n');
    document.getElementById('outputString').value = result;
}

// Hàm đếm số từ
function countWords() {
    const input = document.getElementById('inputString').value.trim();
    const words = input.split(/\s+/).filter(word => word !== '');
    document.getElementById('outputString').value = `Số từ: ${words.length}`;
}

// Hàm đảo ngược chuỗi
function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('outputString').value = reversed;
}
