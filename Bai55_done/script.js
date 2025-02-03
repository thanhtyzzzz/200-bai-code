// Hàm giải phương trình bậc 2
function solveEquation() {
    // Lấy giá trị của a, b, c từ các ô input
    const a = parseFloat(document.getElementById('coeffA').value) || 0;
    const b = parseFloat(document.getElementById('coeffB').value) || 0;
    const c = parseFloat(document.getElementById('coeffC').value) || 0;

    // Kiểm tra giá trị a (phương trình bậc 2 cần a ≠ 0)
    if (a === 0) {
        document.getElementById('result').value = "Đây không phải phương trình bậc 2";
        return;
    }

    // Tính delta
    const delta = b * b - 4 * a * c;

    let resultText = ""; // Biến lưu kết quả

    if (delta < 0) {
        resultText = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultText = `Nghiệm kép x1 = x2 = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultText = `x1 = ${x1}, x2 = ${x2}`;
    }

    // Hiển thị kết quả
    document.getElementById('result').value = resultText;
}

// Hàm xóa dữ liệu và làm mới các ô input
function resetFields() {
    document.getElementById('coeffA').value = '';
    document.getElementById('coeffB').value = '';
    document.getElementById('coeffC').value = '';
    document.getElementById('result').value = '';
}
