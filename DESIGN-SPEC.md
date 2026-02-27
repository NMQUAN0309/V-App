# V-App - Tài liệu thiết kế giao diện

## Tổng quan
Trang thông tin điện tử V-App - prototype để demo cấu trúc và giao diện.

## Công nghệ
- HTML/CSS/JS thuần (không framework)
- 2 file riêng: `web.html` (bản desktop) + `mobile.html` (bản di động)
- Mỗi file chứa 3 trang: Trang chủ, Trang mục, Trang bài chi tiết
- Chuyển trang bằng JS (hash-based routing)
- Sample data chung trong `data.js`

## Design System

### Màu sắc
| Tên | Mã | Dùng cho |
|-----|-----|----------|
| Primary | #E53935 | Logo, accent, nút chính |
| Primary Dark | #C62828 | Hover state |
| Text | #1A1A1A | Tiêu đề, nội dung chính |
| Text Secondary | #666666 | Sapo, meta info |
| Background | #FFFFFF | Nền trang |
| Surface | #F5F5F5 | Nền card, section |
| Border | #E0E0E0 | Đường kẻ phân cách |

### Typography
- Font: **Noto Sans** (Google Fonts - hỗ trợ tiếng Việt)
- Tiêu đề lớn: 24px, font-weight 700
- Tiêu đề bài: 18px, font-weight 600
- Sapo: 14px, font-weight 400, màu #666
- Body: 16px, font-weight 400
- Meta (thời gian, tác giả): 13px, màu #999

### Spacing
4px | 8px | 12px | 16px | 24px | 32px | 48px

### Layout
- Web: max-width 1.200px, centered
- Mobile: max-width 430px, centered
- Grid + Flexbox

---

## Cấu trúc chuyên mục

### 1. Thời sự
- Chính trị | Dân sinh | Việc làm | Giao thông

### 2. Thế giới
- Phân tích | Tư liệu | Quân sự | Cuộc sống đó đây | Người Việt 5 châu | Bắc Mỹ

### 3. Kinh doanh
- Quốc tế | Doanh nghiệp | **Chứng khoán** ⚡ | **Ebank** ⚡ | Vĩ mô | Hàng hóa | Kinh tế vùng

### 4. Khoa học và Công nghệ
- AI | Vũ trụ | Thế giới tự nhiên | Thiết bị

### 5. Bất động sản
- Chính sách | Thị trường | **Dự án** ⚡ | Không gian sống

### 6. Sức khỏe
- Tin tức | **Các bệnh** ⚡ | Sống khỏe | Vaccine

### 7. Giải trí
- Giới sapo | Sách | Video | Phim | Nhạc | Thời trang | Làm đẹp | Sân khấu - Mỹ thuật

### 8. Thể thao
- Bóng đá | Lịch thi đấu | Tennis | Golf | Các môn khác | Hậu trường | Ảnh | Video | Esport

### 9. Pháp luật
- Hồ sơ vụ án | **Thư viện pháp luật** ⚡ | Video

### 10. Giáo dục
- Tin tức | Tuyển sinh | Chân dung | Du học | **Đề thi & Đáp án** ⚡

### 11. Đời sống
- Nhịp sống | Tổ ấm | Bài học sống | Cooking | Tiêu dùng

### 12. Xe
- Thị trường | Xe điện | Kinh nghiệm lái xe | Chăm xe

### 13. Du lịch
- **Điểm đến** ⚡ | Ẩm thực | Khám phá

> ⚡ = Mục có phần đặc biệt (search box riêng)

---

## Các mục đặc biệt (⚡)

| Mục | Phần đặc biệt |
|-----|----------------|
| Chứng khoán | Ô tìm mã CK (VD: VIC, VNM) |
| Ebank | Ô tìm lãi suất + bộ lọc: Vay/Gửi, Ngân hàng, Kỳ hạn |
| Dự án (BĐS) | Ô tìm dự án bất động sản |
| Các bệnh | Ô tìm loại bệnh |
| Thư viện PL | Ô tìm văn bản pháp luật |
| Đề thi & Đáp án | Ô tìm + bộ lọc: Năm, Cấp (trường/tỉnh/QG/TG), Môn học |
| Điểm đến | Ô tìm địa danh du lịch trong nước & thế giới |

---

## BẢN WEB - Chi tiết layout

### Trang chủ
1. **Header**: Logo trái + Hamburger phải
2. **Ticker**: Chạy ngang - thời tiết, ngày tháng, âm lịch, giá vàng, VN-Index
3. **Nav**: [Tin mới nhất] [Tin địa phương ▼] | Thời sự | Thế giới | Kinh doanh | ...
4. **Cụm Top**: 1 bài lớn + 3 bài dưới (tất cả có ava + title + sapo)
5. **2 cột chính**:
   - Trái (1/3): 15 bài (ava → title → sapo)
   - Phải (2/3): 5 cụm (Kinh doanh, BĐS, Thể thao, Giải trí, Sức khỏe)
     - Mỗi cụm: Tên mục + mục con → 2 bài (trái đủ info, phải title+sapo) → 3 bài (title+sapo)
6. **Mục còn lại**: 2 cột, mỗi mục 3 bài

### Trang mục
1. Header + Ticker + Nav (giống trang chủ)
2. Phần đặc biệt (nếu có)
3. Cụm top 4 bài
4. 2 cột: Trái 10 bài đủ info, Phải các cụm mục con
5. Stream bài còn lại

### Trang bài chi tiết
1. Header
2. Breadcrumb: Mục > Mục con
3. Thời gian + 🔊 Audio
4. Title → Sapo (đậm) → Nội dung → Tác giả (phải) → Nguồn (phải)
5. 4 câu hỏi AI (expand/collapse)
6. Tiện ích liên quan
7. Toàn cảnh (5 bài) + Xem thêm
8. Tin cùng chuyên mục (5 bài) + Xem thêm
9. Đọc nhiều nhất 48h (5 bài)
10. **Sticky bottom**: [Hỏi tiếp về tin này...] ❤️ 🔖 🔗

---

## BẢN MOBILE - Chi tiết layout

### Trang chủ
1. ☰ + Logo + 🔔
2. [Tìm tin, chủ đề, từ khóa]
3. 🏠 | Tin mới nhất | Tin địa phương | ← Thời sự | Thế giới | ... → (scroll ngang)
4. Ticker chạy ngang
5. Stream: 5 bài top → 5 Kinh doanh → Box VN-Index → 5 BĐS → Box Dự án → 5 Thể thao → Box Quote → 5 Giải trí → Box Phạt nguội → 5 Sức khỏe → Box Thời tiết → Mục còn lại

### Mobile Boxes
| Box | Nội dung |
|-----|----------|
| 1 | Biểu đồ VN-Index (placeholder) + ô nhập mã CK |
| 2 | Tìm dự án BĐS (search box) |
| 3 | Quote vĩ nhân (random) |
| 4 | Tra cứu phạt nguội (search box + ô nhập biển số) |
| 5 | Thời tiết 7 ngày (7 ô: ngày + icon + nhiệt độ) |

### Trang mục
1. Header mobile
2. Mục con (scroll ngang)
3. Phần đặc biệt (nếu có)
4. Stream bài: ava → title → sapo

### Trang bài chi tiết
1. Header mobile
2. Mục to + Mục con + ▼ dropdown chọn mục khác
3. Thời gian + 🔊
4. Title → Sapo → Nội dung → Tác giả (phải) → Nguồn (phải)
5. 4 câu hỏi AI
6. Tiện ích liên quan
7. Toàn cảnh (5 bài)
8. Tin cùng chuyên mục (5 bài)
9. Đọc nhiều nhất 48h (5 bài)
10. **Sticky bottom**: [Hỏi tiếp về tin này...] ❤️ 🔖 🔗

---

## JS Routing

```
#home                        → Trang chủ
#category/{id}               → Trang mục (VD: #category/thoi-su)
#category/{id}/{subId}       → Trang mục con (VD: #category/thoi-su/chinh-tri)
#article/{articleId}         → Trang bài chi tiết
```

---

## Thứ tự triển khai
1. DESIGN-SPEC.md (file này)
2. data.js (sample data)
3. web.html (skeleton + CSS → trang chủ → trang mục → trang chi tiết → routing)
4. mobile.html (tương tự)
5. Test & polish
