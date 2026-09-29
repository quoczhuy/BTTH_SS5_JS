# Bài 4: Tổng hợp Thực hành Demo Xử lý Chuỗi & Xuất Báo cáo Dòng lệnh trên lớp

## 1. Mục tiêu & Cách tiếp cận
Bài tập tổng hợp quy trình xử lý một chuỗi dữ liệu thực tế tại Kiosk y tế: làm sạch, xác thực, trích xuất và tính toán nghiệp vụ (BHYT).

**Cách tiếp cận & Sử dụng hàm:**
1. **Làm sạch (Sanitize):** Dùng `trim()` để xóa khoảng trắng thừa ở hai đầu và `toUpperCase()` để đồng bộ chữ in hoa, tránh lỗi phân biệt hoa/thường.
2. **Xác thực (Validate):** Dùng `startsWith("MED-")` để kiểm tra tính hợp lệ của mã phiếu.
3. **Trích xuất (Extract):** 
   - Dùng `slice(4, 7)` để lấy mã chuyên khoa (3 ký tự).
   - Dùng `slice(8, 12)` để lấy số thứ tự tiếp đón (4 ký tự).
4. **Nghiệp vụ bảo hiểm:** Dùng `includes("BHYT")` để xác định bệnh nhân có thẻ Bảo hiểm y tế hay không. Nếu có, giảm 80% phí khám.
5. **Hiển thị (Format):** Dùng phương thức `.repeat(35)` để vẽ khung báo cáo và Template Literals (``) để in biên lai với bố cục rõ ràng.

## 2. Bảng kiểm thử (Test Cases)

| Trường hợp | Dữ liệu đầu vào | Phân tích kết quả mong đợi |
| :--- | :--- | :--- |
| **TH1: Khách có BHYT (Chuỗi chuẩn)** | `" med-rhm-0815-bhyt "` | Hợp lệ: `true`<br>Khoa: `RHM`<br>Số thứ tự: `0815`<br>BHYT: `Có`<br>Thanh toán: `30000 VNĐ` (Đã giảm 80%) |
| **TH2: Khách không BHYT (Chuỗi lỗi)** | `"   err-tai-1111   "` | Hợp lệ: `false`<br>Khoa: `TAI`<br>Số thứ tự: `1111`<br>BHYT: `Không`<br>Thanh toán: `150000 VNĐ` (Không giảm) |