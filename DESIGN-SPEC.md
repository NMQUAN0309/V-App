# VTimes - Tài liệu thiết kế giao diện

## Tổng quan
Trang thông tin điện tử VTimes - prototype để demo cấu trúc và giao diện.

## Công nghệ
- HTML/CSS/JS thuần (không framework)
- 2 file riêng: `web.html` (bản desktop) + `mobile.html` (bản di động)
- Mỗi file chứa 3 trang: Trang chủ, Trang mục, Trang bài chi tiết
- Chuyển trang bằng JS (hash-based routing)
- Dữ liệu dùng chung trong `data.js` + `real-articles.js`

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
- Meta (tác giả, nguồn): 13px, màu #999

### Spacing
4px | 8px | 12px | 16px | 24px | 32px | 48px

### Layout
- Web: max-width 1.200px, centered
- Mobile: max-width 430px, centered
- Grid + Flexbox

---

## Thanh điều hướng (Navigation)

### Thứ tự nút nav (cả Web và Mobile)
| # | Nút | Chức năng |
|---|-----|-----------|
| 1 | 🏠 | Về trang chủ |
| 2 | Mới nhất | Tất cả bài viết, sắp xếp từ mới → cũ |
| 3 | Địa phương | Lọc toàn bộ tin bài liên quan đến địa phương độc giả chọn (VD: Hà Nội, TPHCM...) |
| 4 | Quan tâm | Độc giả tick chọn chủ đề quan tâm (BĐS, Công nghệ, Sức khỏe...) |
| 5 | 📚 Tri thức mở | Bách khoa toàn thư kết hợp AI — full-screen overlay |
| 6 | Thời sự | Chuyên mục |
| 7 | Thế giới | Chuyên mục |
| 8 | Kinh tế | Chuyên mục |
| 9 | Nhà đất | Chuyên mục |
| 10 | Xe - Công nghệ | Chuyên mục |
| 11 | Giải trí | Chuyên mục |
| 12 | Thể thao | Chuyên mục |
| 13 | Sức khỏe | Chuyên mục |
| 14 | Pháp luật | Chuyên mục |
| 15 | Đời sống – Du lịch | Chuyên mục |
| 16 | Giáo dục | Chuyên mục |
| 17 | Góc nhìn chuyên gia | Chuyên mục |
| 18 | Video | Chuyên mục |

**Bố cục nav (Web):** 5 nút đầu (🏠, Mới nhất, Địa phương, Quan tâm, 📚 Tri thức mở) cố định bên trái, không cuộn. Phần chuyên mục bên phải tự động cuộn ngang theo vòng lặp (auto-scroll animation), hover để dừng.

**Bố cục nav (Mobile):** Tất cả nằm trong thanh cuộn ngang, hỗ trợ drag.

---

## Cấu trúc chuyên mục

### 1. Thời sự
- Chính trị | Dân sinh | Giao thông

### 2. Thế giới
- Phân tích | Quân sự ⚙ (Bản đồ chiến sự) | Thế giới đó đây

### 3. Kinh tế
- Đầu tư | Doanh nghiệp | Chứng khoán ⚙ | Ngân hàng ⚙ | Vĩ mô | Tiêu dùng

### 4. Nhà đất
- Chính sách | Thị trường | Dự án ⚙ | Quy hoạch ⚙ | Không gian sống

### 5. Xe - Công nghệ
- Thị trường xe | Xe điện | Kinh nghiệm lái xe ⚙ | Chăm xe | AI | Khoa học - CN | Thiết bị ⚙

### 6. Giải trí
- Sách | Phim | Nhạc | Thời trang | Làm đẹp

### 7. Thể thao
- Bóng đá | Lịch thi đấu ★ | Tennis | Pickleball | Golf | Esport | Các môn khác | Hậu trường

### 8. Sức khỏe
- Các bệnh ⚙ | Sống khỏe

### 9. Pháp luật
- Pháp đình | Thư viện pháp luật ⚙

### 10. Đời sống – Du lịch
- Nhịp sống | Bài học cuộc sống | Phong cách | Việc làm | Điểm đến ⚙ | Ẩm thực | Khám phá

### 11. Giáo dục
- Tuyển sinh | Du học | Đề thi & Đáp án ⚙

### 12. Góc nhìn chuyên gia
- (không có mục con — giao diện riêng theo phong cách opinion)

### 13. Video
- (không có mục con)

> **⚙** Mục con có search box / widget tra cứu hiển thị đầu trang khi vào mục đó.
> **★** Mục ở trạng thái "Đang phát triển" — hiện trang thông báo khi truy cập.

---

## Mục con có search box / widget đặc biệt

> Khi người dùng vào trang mục con tương ứng, widget hiển thị trên cùng, bài viết phía dưới.

| Mục con | Widget |
|---------|--------|
| Chứng khoán (Kinh tế) | Ô tìm mã CK (VD: VIC, VNM) |
| Ngân hàng (Kinh tế) | Ô tìm lãi suất + bộ lọc: Gửi/Vay, Ngân hàng, Kỳ hạn |
| Thiết bị (Xe - Công nghệ) | Ô tìm sản phẩm công nghệ (điện thoại, laptop, tivi, tủ lạnh...) |
| Dự án (Nhà đất) | Ô tìm dự án bất động sản |
| Quy hoạch (Nhà đất) | Ô tìm quy hoạch theo tỉnh/thành phố + quận/huyện |
| Các bệnh (Sức khỏe) | Ô tìm loại bệnh, triệu chứng |
| Quân sự (Thế giới) | **Bản đồ chiến sự** (xem chi tiết bên dưới) |
| Thư viện pháp luật (Pháp luật) | Ô tìm văn bản pháp luật theo số hiệu, tên |
| Đề thi & Đáp án (Giáo dục) | Ô tìm + bộ lọc: Năm, Cấp (trường/tỉnh/quốc gia), Môn học |
| Kinh nghiệm lái xe (Xe - Công nghệ) | Tra cứu phạt nguội: nhập biển số xe |
| Điểm đến (Đời sống – Du lịch) | Ô tìm địa danh, thành phố du lịch |

---

## Bản đồ Chiến sự

Bản đồ sử dụng dữ liệu GeoJSON thực (`world-atlas@2/countries-110m.json` + `topojson-client@3`), load động từ CDN.

### Các cặp xung đột hiện tại
| Xung đột | Quốc gia | Màu |
|----------|----------|-----|
| Chiến tranh Ukraine — Nga | Ukraine (đậm) + Nga (nhạt) | Cam #FF7043 |
| Xung đột Israel — Gaza | Israel (đậm) + Palestine (nhạt) | Xanh dương #29B6F6 |
| Căng thẳng Mỹ — Iran | Mỹ (đậm) + Iran (nhạt) | Tím #AB47BC |

Các quốc gia xung đột được tô màu trên bản đồ. Có animated pulse dots tại vị trí xung đột.

### Bản đồ đầy đủ (trang mục Thế giới / Quân sự)
- Bản đồ SVG toàn màn hình (400×200, equirectangular projection)
- Bên dưới: legend 3 xung đột
- Click vào quốc gia hoặc legend → panel bài viết liên quan (5 bài, collapsible)

### Bản đồ compact (Web — sidebar trang chủ, cạnh cụm Thế giới)
- Mini map (400×200), click → điều hướng đến #category/the-gioi/quan-su
- Bên dưới: legend 3 xung đột
- Link "Xem bản đồ đầy đủ →"

### Bản đồ mobile trang mục Quân sự
- Mini map tương tác đầy đủ
- Click quốc gia hoặc legend → panel bài viết liên quan (toggle)
- Click bài viết → vào trang chi tiết

### Bản đồ mobile trang chủ (sidebar giữa mục Thế giới)
- Mini map compact, click → điều hướng đến #category/the-gioi/quan-su
- Legend 3 xung đột (không có article panel)

---

## BẢN WEB — Chi tiết layout

### Header
- Logo trái + hamburger phải (mở menu toàn màn hình)

### Ticker
- Chạy ngang liên tục: thời tiết, ngày dương lịch, ngày âm lịch, giá vàng, VN-Index

### Hamburger Menu
- Overlay toàn màn hình, slide từ trái
- Liệt kê tất cả chuyên mục + mục con

### Trang chủ (`#home`)
1. Header + Ticker + Nav
2. **Cụm Top** (5 bài nổi bật — bài thật từ các mục Thời sự, Thế giới, Kinh tế, Thể thao, Sức khỏe):
   - Hàng trên (grid ~8fr / ~2.5fr):
     - Bài #1 (trái): layout ngang — ava lớn (~62%) + title & sapo bên phải
     - Bài #2 (phải): layout dọc — ava full width (16/9) → title → sapo bên dưới
   - Hàng dưới: 3 bài nhỏ (3 cột đều nhau), mỗi bài layout ngang — ava + title + sapo
3. **2 cột chính** (grid 1fr 2fr):
   - **Cột trái (1/3)**: 20 bài, mỗi bài = ava → title → sapo (vertical)
   - **Cột phải (2/3)**: 5 cụm featured (Kinh tế, Nhà đất, Thể thao, Giải trí, Sức khỏe)
     - Mỗi cụm: tên mục + danh sách mục con → bài top 1 (bài thật — ava + title + sapo) + 1 bài title+sapo cạnh → 3 bài title+sapo
     - **Interstitial box** xuất hiện bên dưới một số cụm featured:
       - Sau Kinh tế → Tra cứu mã chứng khoán
       - Sau Nhà đất → Tìm kiếm dự án
       - Sau Thể thao → Lịch thi đấu (ticker cuộn ngang)
       - Sau Sức khỏe → Tra cứu bệnh
4. **Mục còn lại** (2 cột: bài viết 1fr + box sidebar 300px):

| Mục | Bài top 1 | Box sidebar |
|-----|-----------|-------------|
| Thời sự | Bài thật | Thời tiết 5 thành phố |
| Thế giới | Bài thật | Bản đồ Chiến sự compact + legend |
| Xe - Công nghệ | Bài thật | Tìm kiếm sản phẩm công nghệ |
| Pháp luật | Bài thật | Thư viện văn bản pháp luật |
| Giáo dục | Bài thật | Tra cứu đề thi & đáp án |
| Đời sống – Du lịch | Bài thật | Tra cứu điểm đến |
| Các mục còn lại | Bài thật | Không có box (chỉ danh sách bài) |

### Trang mục (`#category/{id}`)
1. Header + Ticker + Nav
2. **Search box / widget** (nếu mục con có)
3. **Cụm top 4 bài**: bài top 1 là bài thật, 3 bài còn lại sample. Đều có ava + title + sapo
4. **2 cột**:
   - Trái: 10 bài đủ info (ava + title + sapo)
   - Phải: các cụm mục con, mỗi cụm có 2 bài (1 full + 1 title+sapo)
5. **Stream bài còn lại**: danh sách bài dạng row

### Trang bài chi tiết (`#article/{id}`)
1. Header
2. Breadcrumb: Mục › Mục con
3. Thời gian đăng + 🔊 Audio
4. Title → **Sapo** (đậm) → Nội dung → Tác giả (phải) → Nguồn (phải)
5. **4 câu hỏi "Giải mã đa tầng"** (expand/collapse với CSS transition)
   - Bài thật: 4 câu hỏi riêng viết tay, sâu sắc, ~200 chữ/đáp án
   - Bài sample: 4 câu hỏi random từ pool AI_QUESTIONS
6. Tiện ích liên quan (grid)
7. Toàn cảnh (5 bài) + Xem thêm
8. Tin cùng chuyên mục (5 bài) + Xem thêm
9. Đọc nhiều nhất 48h (5 bài)
10. **Sticky bottom**: input "Hỏi tiếp về tin này..." + ❤️ 🔖 🔗

---

## BẢN MOBILE — Chi tiết layout

### Header
- ☰ (hamburger) + Logo giữa + 🔔 (thông báo)
- Ô tìm kiếm phía dưới
- Nav cuộn ngang: 🏠 | Mới nhất | Địa phương | Quan tâm | 📚 Tri thức mở | Thời sự | Thế giới | Kinh tế | Nhà đất | Xe - Công nghệ | ...
- Ticker chạy ngang

### Hamburger Menu (Mobile)
- Overlay + panel slide từ trái
- Danh sách tất cả chuyên mục + mục con

### Trang chủ (`#home`) — Stream chính

```
5 bài top (full card: ava full width + title + sapo)
  — Bài thật từ 5 chuyên mục: Thời sự, Thế giới, Kinh tế, Thể thao, Sức khỏe
  — Bài cuối (Góc nhìn chuyên gia nếu có) có badge GCG riêng
─────────────────────────────────────────────────────
[KINH TẾ — khung card nổi bật]
  5 bài Kinh tế (full + half + 3×compact), bài 1 là bài thật
Box: Tra cứu mã chứng khoán
─────────────────────────────────────────────────────
5 bài mix (mid card: ava trung bình + title + sapo)
─────────────────────────────────────────────────────
[NHÀ ĐẤT]
  5 bài Nhà đất, bài 1 là bài thật
Box: Tìm kiếm dự án
─────────────────────────────────────────────────────
5 bài mix (mid card)
─────────────────────────────────────────────────────
[THỂ THAO]
  5 bài Thể thao, bài 1 là bài thật
Box: Lịch thi đấu (ticker cuộn ngang)
─────────────────────────────────────────────────────
5 bài mix (mid card)
─────────────────────────────────────────────────────
[GIẢI TRÍ]
  5 bài Giải trí, bài 1 là bài thật
─────────────────────────────────────────────────────
[VIDEO — strip cuộn ngang]
  5 video thumbnail (click → xem fullscreen vertical)
─────────────────────────────────────────────────────
5 bài mix (mid card)
─────────────────────────────────────────────────────
[SỨC KHỎE]
  5 bài Sức khỏe, bài 1 là bài thật
Box: Tra cứu bệnh
─────────────────────────────────────────────────────
Remaining — mỗi mục 5 bài, bài 1 là bài thật (theo thứ tự CATEGORIES):
  Thời sự            → Box: Thời tiết 7 ngày
  Thế giới           → Box: Bản đồ Chiến sự (mini map)
  Xe - Công nghệ     → Box: Tìm kiếm sản phẩm công nghệ
  Pháp luật          → Box: Thư viện văn bản pháp luật
  Giáo dục           → Box: Tra cứu đề thi & đáp án
  Đời sống – Du lịch → Box: Khám phá điểm đến
  Góc nhìn chuyên gia
```

### Loại card bài viết (Mobile)
| Loại | Dùng ở đâu | Cấu trúc |
|------|-----------|----------|
| full card | Bài 1 mỗi mục featured, top 12 | ava full width → title → sapo |
| half card | Bài 2 mỗi mục featured | ava ~50% float trái + title + sapo |
| compact card | Bài 3–5 mỗi mục featured | title + sapo |
| mid card | Mix articles, remaining | ava ~120px float trái + title + sapo |

> **Ghi chú thời gian:** Thời gian đăng bài **không hiển thị** ở card preview (trang chủ, trang mục). Chỉ hiển thị trong trang bài chi tiết và trang video feed.

### Mobile Boxes

| Box | Vị trí | Nội dung |
|-----|--------|----------|
| Tra cứu mã chứng khoán | Sau Kinh tế | Ô tìm mã CK |
| Tìm kiếm dự án | Sau Nhà đất | Ô tìm dự án |
| Lịch thi đấu | Sau Thể thao | Ticker cuộn ngang: giờ + đội nhà vs đội khách |
| Tra cứu bệnh | Sau Sức khỏe | Ô tìm tên bệnh, triệu chứng |
| Thời tiết 7 ngày | Sau Thời sự | Grid ngày + icon + nhiệt độ |
| Bản đồ Chiến sự | Sau Thế giới | Mini map + legend 3 xung đột |
| Tìm kiếm sản phẩm công nghệ | Sau Xe - Công nghệ | Ô tìm điện thoại, laptop... |
| Thư viện pháp luật | Sau Pháp luật | Ô tìm văn bản pháp luật |
| Tra cứu đề thi & đáp án | Sau Giáo dục | Ô tìm từ khóa |
| Khám phá điểm đến | Sau Đời sống – Du lịch | Ô tìm địa danh |

### Video Lightbox (Mobile)
Khi click vào thumbnail video trong strip trang chủ hoặc trang Video:
- Mở fullscreen overlay (`position: fixed; inset: 0`)
- Mỗi slide = ảnh phủ toàn màn hình (object-fit: cover) + play button ở giữa + tiêu đề overlay dưới cùng
- **Vuốt lên/xuống** để chuyển video (scroll-snap-type: y mandatory)
- Counter "N / 5" ở trên cùng, nút ✕ góc phải để đóng
- Demo: hiển thị ảnh thay video thực

### Trang mục (`#category/{id}`)
1. Header mobile + Nav
2. Mục con (cuộn ngang)
3. Search box / widget (nếu mục con có)
4. Stream bài: full card (bài thật) + half card + compact cards

### Trang mục con có `comingSoon`
Hiển thị trang "🚧 Đang phát triển" thay vì danh sách bài viết.

### Trang bài chi tiết (`#article/{id}`)
1. Header mobile
2. Breadcrumb: Mục lớn › Mục con + ▼ dropdown chọn mục khác
3. Thời gian đăng + 🔊
4. Title → **Sapo** → Nội dung → Tác giả (phải) → Nguồn (phải)
5. **4 câu hỏi "Giải mã đa tầng"** (expand/collapse)
   - Bài thật: 4 câu hỏi riêng, ~200 chữ/đáp án
   - Bài sample: random từ pool
6. Tiện ích liên quan
7. Toàn cảnh (5 bài)
8. Tin cùng chuyên mục (5 bài)
9. Đọc nhiều nhất 48h (5 bài)
10. **Sticky bottom**: input "Hỏi tiếp về tin này..." + ❤️ 🔖 🔗

---

## Trang Video Feed (`#category/video`)
Riêng biệt với video lightbox trang chủ.
- Trang danh sách video: cuộn dọc, mỗi item = ảnh + tiêu đề + thời lượng + thời gian đăng
- Click item → mở video lightbox (vertical snap)

---

## Thư viện (`📚 Thư viện`)

Không gian tra cứu bách khoa kết hợp AI. Không phải chuyên mục tin tức — mở dạng full-screen overlay (web) hoặc inline trong stream (mobile).

### Bố cục 3 tab

| Tab | Nội dung |
|-----|----------|
| Chủ đề | Grid 12 chủ đề (Khoa học, Lịch sử, Địa lý, Pháp luật, Sức khỏe, Kinh tế, Văn hóa, Công nghệ, Toán học, Môi trường, Sinh học, Vật lý) + Xu hướng chips |
| Tra cứu | Ô tìm từ khóa + toàn bộ 11 công cụ tra cứu chuyên biệt (xem dưới) |
| ✦ Hỏi AI | Chat interface, AI trả lời mô phỏng sau 900ms, có typing indicator |

### Tab Tra cứu — Công cụ chuyên biệt
Hiển thị đầy đủ khi tab mở (trước khi nhập từ khóa), theo thứ tự:

| # | Công cụ |
|---|---------|
| 1 | 🌍 Bản đồ Chiến sự Thế giới (đầy đủ, tương tác) |
| 2 | 🚗 Tra cứu phạt nguội (biển số xe) |
| 3 | Tra cứu mã chứng khoán |
| 4 | Tra cứu lãi suất ngân hàng (Gửi/Vay, Ngân hàng, Kỳ hạn) |
| 5 | Tìm kiếm dự án bất động sản |
| 6 | Tra cứu quy hoạch (Tỉnh + Quận/huyện) |
| 7 | Tra cứu thông tin bệnh |
| 8 | Thư viện văn bản pháp luật |
| 9 | Tra cứu đề thi & đáp án (Năm, Cấp, Môn học) |
| 10 | Khám phá điểm đến du lịch |
| 11 | Tìm kiếm sản phẩm công nghệ |

Khi nhập từ khóa và tìm → cột trái list bài liên quan + cột phải AI tóm tắt.

### Tính năng tìm kiếm
- Tìm trong `CATEGORY_ARTICLES` (tất cả chuyên mục), khớp title và sapo
- AI summary box: tóm tắt mô phỏng có chèn keyword

### Ghi chú AI
- Prototype — không có API thật, dùng template JS để mô phỏng phản hồi
- Chat: user bubble (phải, đỏ) + AI bubble (trái, trắng border)
- Label: "✦ Powered by VTimes AI · Nội dung mang tính tham khảo"

### Web vs Mobile
- **Web:** full-screen overlay (`z-index: 160`), panel `min(1100px, 95vw)`, layout 2 cột cho kết quả tra cứu
- **Mobile:** inline trong `#mHomeStream`, layout 1 cột, chat chiếm toàn chiều cao khả dụng

---

## JS Routing

```
#home                        → Trang chủ
#category/{id}               → Trang mục (VD: #category/thoi-su)
#category/{id}/{subId}       → Trang mục con (VD: #category/thoi-su/chinh-tri)
#article/{articleId}         → Trang bài chi tiết
```

---

## Data

### File `data.js`
Chứa toàn bộ dữ liệu dùng chung, export ra `window.VAPP`. Khi load, tự động inject bài thật từ `window.VAPP_REAL` (do `real-articles.js` cung cấp) vào các mảng dữ liệu trước khi export.

### File `real-articles.js`
Chứa 12 bài viết thật (1 bài mỗi chuyên mục), export ra `window.VAPP_REAL`. Phải được load **trước** `data.js`.

| # | Chuyên mục | Bài | Nguồn |
|---|-----------|-----|-------|
| 1 | Thời sự | Tàu du lịch chở 41 người bốc cháy trên Vịnh Hạ Long | Báo Dân trí |
| 2 | Thế giới | Mỹ — Iran đàm phán hạt nhân | VnExpress |
| 3 | Kinh tế | Mục tiêu GDP tăng trưởng 10% | LuatVietnam |
| 4 | Nhà đất | Thị trường bất động sản 2026 sàng lọc | VnExpress |
| 5 | Xe - Công nghệ | Thị trường xe máy điện | Tuổi Trẻ |
| 6 | Sức khỏe | TP.HCM nâng cấp hệ thống y tế | Báo Dân trí |
| 7 | Giáo dục | Tuyển sinh đại học 2026 | Tuổi Trẻ |
| 8 | Giải trí | Phim Tết 2026 | Thể thao & Văn hóa |
| 9 | Thể thao | U23 Việt Nam dự Asiad | Báo Dân trí |
| 10 | Đời sống – Du lịch | Hà Nội đón 3,18 triệu lượt khách | Người Hà Nội |
| 11 | Pháp luật | Chính phủ họp về công tác pháp luật | Báo Chính phủ |
| 12 | Góc nhìn chuyên gia | Kinh tế chữ K | Vietstock |

### Biến dữ liệu chính
| Biến | Mô tả |
|------|-------|
| `CATEGORIES` | Toàn bộ cấu trúc chuyên mục + mục con |
| `FEATURED_CATEGORIES` | 5 mục hiển thị cột phải trang chủ web (Kinh tế, Nhà đất, Xe-CN, Đời sống, Sức khỏe) |
| `MOBILE_STREAM_CATEGORIES` | 5 mục có section riêng trong stream mobile |
| `MOBILE_TOP_5` | 5 bài top trang chủ mobile (Thời sự, Thế giới, Kinh tế, Thể thao, Sức khỏe — bài thật) |
| `MOBILE_MIX_1/2/3/4` | Các nhóm bài mix giữa các section |
| `MOBILE_VIDEO_ARTICLES` | 5 video cho strip trang chủ |
| `MOBILE_CATEGORY_ARTICLES` | Bài viết 5 mục featured mobile, bài [0] là bài thật |
| `MOBILE_REMAINING` | Bài viết các mục còn lại mobile, bài [0] là bài thật |
| `HOME_TOP_ARTICLES` | 5 bài top trang chủ web (Thời sự, Thế giới, Kinh tế, Thể thao, Sức khỏe) |
| `HOME_FEATURED` | Bài viết 5 mục featured web, bài [0] là bài thật |
| `HOME_REMAINING` | Bài viết các mục còn lại web, bài [0] là bài thật |
| `CATEGORY_ARTICLES` | Bài viết trang mục, bài [0] là bài thật |
| `MATCH_SCHEDULE` | Lịch thi đấu mẫu cho box thể thao |
| `FAMOUS_QUOTES` | Trích dẫn danh nhân cho quote box web |
| `WEATHER_DATA` | Dữ liệu thời tiết 5 thành phố + 7 ngày |
| `BANKS`, `LOAN_TERMS` | Danh sách ngân hàng và kỳ hạn vay |

### Cấu trúc bài viết
```js
{
  id,           // số nguyên — bài thật: 9001–9012
  title, sapo, content,
  avaUrl,       // URL ảnh đại diện (bài thật: URL ảnh thực từ nguồn)
  categoryId, categoryName,
  subId, subName,
  author, source,
  time,         // chỉ hiển thị trong bài chi tiết
  questions     // chỉ có ở bài thật: array 4 phần tử {q, a} — ~200 chữ/đáp án
}
```
