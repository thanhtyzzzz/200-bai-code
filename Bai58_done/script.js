// Hiển thị ngày hiện tại khi tải trang
window.onload = function () {
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    document.getElementById("todayDate").textContent = formattedDate;
};

// Kiểm tra nếu chọn "Other" trong Physician thì yêu cầu nhập Name
function checkPhysician() {
    const physician = document.getElementById("physician").value;
    const name = document.getElementById("name").value.trim();
    if (physician === "Other" && name === "") {
        alert("Vui lòng nhập tên bác sĩ khác.");
        document.getElementById("name").focus();
    }
}

// Kiểm tra giá trị điểm APGAR (0-2)
function validateScore(input) {
    const value = parseInt(input.value, 10);
    if (value < 0 || value > 2 || isNaN(value)) {
        alert("Điểm nhập phải nằm trong khoảng từ 0 đến 2.");
        input.value = 0;
    }
    calculateTotal(); // Cập nhật tổng khi có thay đổi
}

// Tính tổng điểm APGAR
function calculateTotal() {
    const activity = parseInt(document.getElementById("activity").value) || 0;
    const pulse = parseInt(document.getElementById("pulse").value) || 0;
    const grimace = parseInt(document.getElementById("grimace").value) || 0;
    const appearance = parseInt(document.getElementById("appearance").value) || 0;
    const respiration = parseInt(document.getElementById("respiration").value) || 0;

    const total = activity + pulse + grimace + appearance + respiration;
    document.getElementById("total").value = total;
}

// Hàm kiểm tra và đăng ký thông tin
function register() {
    const name = document.getElementById("name").value.trim();
    const weight = parseInt(document.getElementById("birthWeight").value) || 0;
    const consent = document.getElementById("consent").checked;

    if (name === "") {
        alert("Vui lòng nhập tên.");
        return;
    }
    if (weight < 1200) {
        alert("Cân nặng phải lớn hơn hoặc bằng 1200 gms.");
        return;
    }
    if (!consent) {
        alert("Yêu cầu phải có sự đồng ý của phụ huynh.");
        return;
    }
    alert("Thông tin đã được đăng ký thành công!");
}

// Tải lại trang
function reloadPage() {
    location.reload();
}
