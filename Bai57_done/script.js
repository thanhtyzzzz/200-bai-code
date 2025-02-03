// Hàm tính toán thành tiền cho mỗi dòng
function calculateRow(inputElement) {
    const row = inputElement.parentElement.parentElement; // Lấy dòng chứa ô input
    const price = parseFloat(row.querySelector('.price').getAttribute('data-price')) || 0; // Giá từ thuộc tính data-price
    const quantity = parseFloat(inputElement.value) || 0; // Lấy số lượng
    const subtotal = price * quantity; // Thành tiền = Giá * Số lượng
    row.querySelector('.subtotal').value = `${subtotal}$`; // Hiển thị thành tiền
}

// Hàm tính tổng cộng
function calculateTotal() {
    const subtotals = document.querySelectorAll('.subtotal'); // Lấy tất cả ô thành tiền
    let total = 0;
    subtotals.forEach(subtotal => {
        const value = parseFloat(subtotal.value) || 0; // Lấy giá trị thành tiền
        total += value; // Cộng dồn thành tiền
    });
    document.getElementById('total').value = `${total}$`; // Hiển thị tổng cộng
}
