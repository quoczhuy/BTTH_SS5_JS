// ==========================================
// THỰC HÀNH DEMO: XỬ LÝ CHUỖI & IN PHIẾU KHÁM
// ==========================================

// 1. Khai báo chuỗi đầu vào (Có thể thay bằng chuỗi lỗi để demo: "   err-tai-1111   ")
const rawInput = " med-rhm-0815-bhyt ";
const baseFee = 150000; // Phí khám cơ sở: 150.000 VNĐ

// 2. Làm sạch và chuẩn hóa chuỗi (Thể hiện tính bất biến - Immutability)
const cleanCode = rawInput.trim().toUpperCase(); // "MED-RHM-0815-BHYT"

// 3. Kiểm tra tính hợp lệ của mã
const isValidCode = cleanCode.startsWith("MED-");

// 4. Trích xuất thông tin bằng slice()
// Vị trí: M(0)E(1)D(2)-(3) R(4)H(5)M(6) -(7) 0(8)8(9)1(10)5(11)
const deptCode = cleanCode.slice(4, 7); // Lấy 3 ký tự: "RHM"
const seqNumber = cleanCode.slice(8, 12); // Lấy 4 ký tự: "0815"

// 5. Xử lý nghiệp vụ Bảo Hiểm Y Tế (BHYT)
const hasBHYT = cleanCode.includes("BHYT");

// Tính toán phí khám (Sử dụng toán tử 3 ngôi - Ternary Operator)
// Nếu có BHYT (hasBHYT là true) -> trả 20% (giảm 80%). Nếu không -> trả 100%
const finalFee = hasBHYT ? baseFee * 0.2 : baseFee;
const formattedFee = finalFee.toLocaleString("vi-VN"); // Định dạng tiền tệ VNĐ

// Định dạng lại tên khoa bằng replace() cho hiển thị đẹp hơn
let deptName = deptCode;
deptName = deptName.replace("RHM", "Răng Hàm Mặt");
deptName = deptName.replace("TAI", "Tai Mũi Họng");
deptName = deptName.replace("MAT", "Mắt");

// 6. Xuất báo cáo ra dòng lệnh (Console) bằng Template Literals
const frameLine = "=".repeat(35);

const printTicket = `
${frameLine}
      PHIẾU TIẾP ĐÓN BỆNH NHÂN
${frameLine}
Trạng thái mã : ${isValidCode ? "Hợp lệ (✅)" : "Mã không hợp lệ (❌)"}
Chuyên khoa   : ${deptName} (${deptCode})
Số thứ tự     : ${seqNumber}
Quyền lợi BHYT: ${hasBHYT ? "Có thẻ BHYT (Giảm 80%)" : "Không có thẻ"}
-----------------------------------
TỔNG THANH TOÁN: ${formattedFee} VNĐ
${frameLine}
`;

console.log(printTicket);
