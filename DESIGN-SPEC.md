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

## Thanh điều hướng (Navigation)

### Thứ tự nút nav (cả Web và Mobile)
| Nút | Chức năng |
|-----|-----------|
| 🏠 Homepage | Về trang chủ |
| Mới nhất | Tất cả bài viết, sắp xếp từ mới → cũ |
| Địa phương | Lọc tin theo địa phương độc giả chọn (Hà Nội, TPHCM, Đà Nẵng, Hải Phòng, Cần Thơ, Huế) |
| Quan tâm | Các chủ đề độc giả tick chọn (checkbox các chuyên mục) |
| Thời sự | Chuyên mục |
| Thế giới | Chuyên mục |
| Kinh doanh | Chuyên mục |
| BĐS | Chuyên mục (Bất động sản) |
| Công nghệ | Chuyên mục (Khoa học và Công nghệ) |
| Xe | Chuyên mục |
| Giải trí | Chuyên mục |
| Thể thao | Chuyên mục |
| Sức khỏe | Chuyên mục |
| Pháp luật | Chuyên mục |
| Đời sống | Chuyên mục |
| Giáo dục | Chuyên mục |
| Du lịch | Chuyên mục |
| Tiêu dùng | Chuyên mục (mới) |
| Video | Chuyên mục (mới) |

---

## Cấu trúc chuyên mục

### 1. Thời sự
- Chính trị | Dân sinh | Việc làm | Giao thông

### 2. Thế giới
- Phân tích | Tư liệu | Quân sự | Cuộc sống đó đây | Người Việt 5 châu | Bắc Mỹ

### 3. Kinh doanh
- Quốc tế | Doanh nghiệp | Chứng khoán | Ebank | Vĩ mô | Hàng hóa | Kinh tế vùng

### 4. Công nghệ (Khoa học và Công nghệ)
- AI | Vũ trụ | Thế giới tự nhiên | Thiết bị

### 5. BĐS (Bất động sản)
- Chính sách | Thị trường | Dự án | Quy hoạch | Không gian sống

### 6. Sức khỏe
- Tin tức | Các bệnh | Sống khỏe | Vaccine

### 7. Giải trí
- Giới sapo | Sách | Video | Phim | Nhạc | Thời trang | Làm đẹp | Sân khấu - Mỹ thuật

### 8. Thể thao
- Bóng đá | Lịch thi đấu | Tennis | Golf | Các môn khác | Hậu trường | Ảnh | Video | Esport

### 9. Pháp luật
- Hồ sơ vụ án | Thư viện pháp luật | Video

### 10. Giáo dục
- Tin tức | Tuyển sinh | Chân dung | Du học | Đề thi & Đáp án

### 11. Đời sống
- Nhịp sống | Tổ ấm | Bài học sống | Cooking

### 12. Xe
- Thị trường | Xe điện | Kinh nghiệm lái xe | Chăm xe

### 13. Du lịch
- Điểm đến | Ẩm thực | Khám phá

### 14. Tiêu dùng *(mới)*
- (chưa có mục con)

### 15. Video *(mới)*
- (chưa có mục con)

---

## Mục con có search box tra cứu

> Các mục con này hiển thị một search box ở đầu trang mục con.
> **Không** đánh dấu icon hay label đặc biệt trong navigation.

| Mục con | Search box |
|---------|------------|
| Chứng khoán (Kinh doanh) | Ô tìm mã CK (VD: VIC, VNM) |
| Ebank (Kinh doanh) | Ô tìm lãi suất + bộ lọc: Vay/Gửi, Ngân hàng, Kỳ hạn |
| Dự án (BĐS) | Ô tìm dự án bất động sản |
| Quy hoạch (BĐS) | Ô tìm quy hoạch (tỉnh/thành phố, quận/huyện) |
| Các bệnh (Sức khỏe) | Ô tìm loại bệnh |
| Thư viện pháp luật (Pháp luật) | Ô tìm văn bản pháp luật |
| Đề thi & Đáp án (Giáo dục) | Ô tìm + bộ lọc: Năm, Cấp (trường/tỉnh/QG/TG), Môn học |
| Điểm đến (Du lịch) | Ô tìm địa danh du lịch trong nước & thế giới |

---

## BẢN WEB - Chi tiết layout

### Trang chủ
1. **Header**: Logo trái + Hamburger phải
2. **Ticker**: Chạy ngang - thời tiết, ngày tháng, âm lịch, giá vàng, VN-Index
3. **Nav**: 🏠 | Mới nhất | Địa phương ▼ | Quan tâm | Thời sự | Thế giới | ...
4. **Cụm Top**:
   - Bài #1 (nổi bật): layout ngang — ava bên trái (~45% width) + title & sapo bên phải
   - 3 bài phụ bên dưới: ava nhỏ + title + sapo (layout tương tự, horizontal)
   - Mục đích: nhìn thấy cả 4 bài mà không cần scroll
5. **2 cột chính** (Grid 1fr 2fr):
   - **Cột trái (1/3)**: 15 bài, mỗi bài = ava → title → sapo (vertical)
   - **Cột phải (2/3)**: 5 cụm (Kinh doanh, BĐS, Thể thao, Giải trí, Sức khỏe)
     - Mỗi cụm: Tên mục + mục con
     - Bài top 1: layout ngang — ava nhỏ (~40%) + title & sapo bên phải
     - 1 bài chỉ title+sapo (bên phải top1)
     - 3 bài chỉ title+sapo
6. **Mục còn lại**: 2 cột
   - Mỗi mục: Tên mục + mục con | Bài top 1 (layout ngang: ava nhỏ + title+sapo bên cạnh) | 2 bài chỉ title+sapo

### Trang mục
1. Header + Ticker + Nav (giống trang chủ)
2. **Search box** (nếu mục con có): hiển thị search box tra cứu
3. Cụm top 4 bài
4. 2 cột: Trái 10 bài đủ info, Phải các cụm mục con
   - Trong cụm mục con: bài top 1 layout ngang (ava nhỏ + title+sapo bên cạnh)
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
3. 🏠 | Mới nhất | Địa phương | Quan tâm | ← Thời sự | Thế giới | ... → (scroll ngang, hỗ trợ drag chuột)
4. Ticker chạy ngang
5. **Stream chính**:

```
5 bài top nổi bật (ava full width)
─────────────────────────────
[KINH DOANH — khung card]
  5 bài Kinh doanh
5 bài mix top (ava trung bình) ← thay Box VN-Index
─────────────────────────────
5 bài BĐS
Box: Tìm dự án BĐS
─────────────────────────────
5 bài Thể thao
5 bài mix top (ava trung bình) ← thay Box Quote
─────────────────────────────
5 bài Giải trí
─────────────────────────────
5 bài Sức khỏe
Box: Tra cứu bệnh
─────────────────────────────
Remaining (mỗi mục 5 bài):
  Thời sự → Box Thời tiết 7 ngày
  Thế giới
  Công nghệ
  Pháp luật
  Giáo dục
  Đời sống
  Xe → Box Tra cứu phạt nguội
  Du lịch
  Tiêu dùng
  Video
```

**Ghi chú bài viết trong stream mobile:**
- Bài 1 của mỗi mục featured (KD, BĐS, TT, GT, SK): ava full width
- Bài 2: ava ~50% float trái, title+sapo bên phải
- Bài 3–5: chỉ title + sapo (compact)
- 5 bài mix top & remaining: ava trung bình (~120px, float trái) + title+sapo

**Ghi chú card Kinh doanh:** 5 bài Kinh doanh hiển thị trong khung/card riêng để phân biệt section.

### Mobile Boxes

| Box | Vị trí | Nội dung |
|-----|--------|----------|
| Dự án BĐS | Sau BĐS | Ô tìm dự án bất động sản |
| Tra cứu bệnh | Sau Sức khỏe | Ô tìm loại bệnh |
| Thời tiết | Sau Thời sự (remaining) | Thời tiết 7 ngày (ngày + icon + nhiệt độ) |
| Phạt nguội | Sau Xe (remaining) | Ô nhập biển số + tra cứu |

### Trang mục
1. Header mobile
2. Mục con (scroll ngang)
3. Search box (nếu mục con có)
4. Stream bài: ava → title → sapo

### Trang bài chi tiết
1. Header mobile
2. Mục to + Mục con + ▼ dropdown chọn mục khác
3. Thời gian + 🔊
4. Title → Sapo → Nội dung → Tác giả (phải) → Nguồn (phải)
5. 4 câu hỏi AI (expand/collapse)
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
