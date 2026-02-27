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
| Nút | Chức năng |
|-----|-----------|
| 🏠 | Về trang chủ |
| Mới nhất | Tất cả bài viết, sắp xếp từ mới → cũ |
| Địa phương ▼ | Dropdown lọc tin theo địa phương (Hà Nội, TPHCM, Đà Nẵng, Hải Phòng, Cần Thơ, Huế) |
| Quan tâm ▼ | Dropdown chọn chủ đề theo dõi |
| Thời sự | Chuyên mục |
| Thế giới | Chuyên mục |
| Kinh doanh | Chuyên mục |
| Bất động sản | Chuyên mục |
| Công nghệ | Chuyên mục |
| Xe | Chuyên mục |
| Giải trí | Chuyên mục |
| Thể thao | Chuyên mục |
| Sức khỏe | Chuyên mục |
| Pháp luật | Chuyên mục |
| Đời sống | Chuyên mục |
| Giáo dục | Chuyên mục |
| Du lịch | Chuyên mục |
| Tiêu dùng | Chuyên mục |
| Video | Chuyên mục |

**Bố cục nav (Web):** 4 nút đầu (🏠, Mới nhất, Địa phương, Quan tâm) cố định bên trái, không cuộn. Phần chuyên mục bên phải tự động cuộn ngang theo vòng lặp (auto-scroll animation), hover để dừng.

**Bố cục nav (Mobile):** Tất cả nằm trong thanh cuộn ngang, hỗ trợ drag.

---

## Cấu trúc chuyên mục

### 1. Thời sự
- Chính trị | Dân sinh | Quốc tế | Giao thông

### 2. Thế giới
- Phân tích | Quân sự ⚙ (Bản đồ chiến sự) | Khám phá

### 3. Kinh doanh
- Đầu tư | Doanh nghiệp | Chứng khoán ⚙ | Bank ⚙ | Vĩ mô

### 4. Công nghệ
- AI | Khoa học | Thiết bị ⚙

### 5. Bất động sản
- Chính sách | Thị trường | Dự án ⚙ | Quy hoạch ⚙ | Không gian sống

### 6. Sức khỏe
- Các bệnh ⚙ | Sống khỏe

### 7. Giải trí
- Sách | Phim | Nhạc | Thời trang | Làm đẹp

### 8. Thể thao
- Bóng đá | Lịch thi đấu ★ | Tennis | Pickleball | Golf | Esport | Các môn khác | Hậu trường

### 9. Pháp luật
- Pháp đình | Thư viện pháp luật ⚙

### 10. Giáo dục
- Tuyển sinh | Du học | Đề thi & Đáp án ⚙

### 11. Đời sống
- Nhịp sống | Bài học cuộc sống | Phong cách | Việc làm

### 12. Xe
- Thị trường | Xe điện | Kinh nghiệm lái xe ⚙ | Chăm xe

### 13. Du lịch
- Điểm đến ⚙ | Ẩm thực | Khám phá

### 14. Tiêu dùng
- Hàng hóa | Mua bán

### 15. Video
- (không có mục con)

> **⚙** Mục con có search box / widget tra cứu hiển thị đầu trang khi vào mục đó.
> **★** Mục con ở trạng thái "Đang phát triển" — hiện trang thông báo khi truy cập.

---

## Mục con có search box / widget đặc biệt

> Khi người dùng vào trang mục con tương ứng, widget hiển thị trên cùng, bài viết phía dưới.

| Mục con | Widget |
|---------|--------|
| Chứng khoán (Kinh doanh) | Ô tìm mã CK (VD: VIC, VNM) |
| Bank (Kinh doanh) | Ô tìm lãi suất + bộ lọc: Gửi/Vay, Ngân hàng, Kỳ hạn |
| Thiết bị (Công nghệ) | Ô tìm sản phẩm công nghệ (điện thoại, laptop, tivi, tủ lạnh...) |
| Dự án (BĐS) | Ô tìm dự án bất động sản |
| Quy hoạch (BĐS) | Ô tìm quy hoạch theo tỉnh/thành phố + quận/huyện |
| Các bệnh (Sức khỏe) | Ô tìm loại bệnh, triệu chứng |
| Quân sự (Thế giới) | **Bản đồ chiến sự** (xem chi tiết bên dưới) |
| Thư viện pháp luật (Pháp luật) | Ô tìm văn bản pháp luật theo số hiệu, tên |
| Đề thi & Đáp án (Giáo dục) | Ô tìm + bộ lọc: Năm, Cấp (trường/tỉnh/quốc gia), Môn học |
| Kinh nghiệm lái xe (Xe) | Tra cứu phạt nguội: nhập biển số xe |
| Điểm đến (Du lịch) | Ô tìm địa danh, thành phố du lịch |

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
2. **Cụm Top** (4 bài nổi bật):
   - Bài #1: layout ngang — ava lớn (~45%) + title & sapo bên phải
   - 3 bài phụ bên dưới: ava nhỏ + title + sapo
3. **2 cột chính** (grid 1fr 2fr):
   - **Cột trái (1/3)**: 15 bài, mỗi bài = ava → title → sapo (vertical)
   - **Cột phải (2/3)**: 5 cụm featured (Kinh doanh, BĐS, Thể thao, Giải trí, Sức khỏe)
     - Mỗi cụm: tên mục + danh sách mục con → bài top 1 (ava + title + sapo) + 1 bài title+sapo cạnh → 3 bài title+sapo
     - **Interstitial box** xuất hiện bên dưới một số cụm featured:
       - Sau Kinh doanh → Tra cứu mã chứng khoán
       - Sau BĐS → Tìm kiếm dự án
       - Sau Thể thao → Lịch thi đấu (ticker cuộn ngang)
       - Sau Sức khỏe → Tra cứu bệnh
4. **Mục còn lại** (2 cột: bài viết 1fr + box sidebar 300px):

| Mục | Box sidebar |
|-----|-------------|
| Thời sự | Thời tiết 5 thành phố |
| Thế giới | Bản đồ Chiến sự compact + legend |
| Công nghệ | Tìm kiếm sản phẩm công nghệ |
| Pháp luật | Thư viện văn bản pháp luật |
| Giáo dục | Tra cứu đề thi & đáp án |
| Xe | Tra cứu phạt nguội |
| Du lịch | Tra cứu điểm đến |
| Đời sống | Quote box (ảnh → trích dẫn → tên tác giả) |
| Các mục còn lại | Không có box (chỉ danh sách bài) |

### Trang mục (`#category/{id}`)
1. Header + Ticker + Nav
2. **Search box / widget** (nếu mục con có)
3. **Cụm top 4 bài**: 1 bài lớn + 3 bài nhỏ, đều có ava + title + sapo
4. **2 cột**:
   - Trái: 10 bài đủ info (ava + title + sapo)
   - Phải: các cụm mục con, mỗi cụm có 2 bài (1 full + 1 title+sapo)
5. **Stream bài còn lại**: danh sách bài dạng row

### Trang bài chi tiết (`#article/{id}`)
1. Header
2. Breadcrumb: Mục › Mục con
3. Thời gian đăng + 🔊 Audio
4. Title → **Sapo** (đậm) → Nội dung → Tác giả (phải) → Nguồn (phải)
5. **4 câu hỏi AI** (expand/collapse với CSS transition)
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
- Nav cuộn ngang: 🏠 | Mới nhất | Địa phương | Quan tâm | Thời sự | Thế giới | ...
- Ticker chạy ngang

### Hamburger Menu (Mobile)
- Overlay + panel slide từ trái
- Danh sách tất cả chuyên mục + mục con

### Trang chủ (`#home`) — Stream chính

```
5 bài top nổi bật (full card: ava full width + title + sapo)
─────────────────────────────────────────────────────
[KINH DOANH — khung card nổi bật]
  5 bài Kinh doanh (full + half + 3×compact)
Box: Tra cứu mã chứng khoán
─────────────────────────────────────────────────────
5 bài mix (mid card: ava trung bình + title + sapo)
─────────────────────────────────────────────────────
[BĐS]
  5 bài Bất động sản
Box: Tìm kiếm dự án BĐS
─────────────────────────────────────────────────────
5 bài mix (mid card)
─────────────────────────────────────────────────────
[THỂ THAO]
  5 bài Thể thao
Box: Lịch thi đấu (ticker cuộn ngang)
─────────────────────────────────────────────────────
5 bài mix (mid card)
─────────────────────────────────────────────────────
[GIẢI TRÍ]
  5 bài Giải trí
─────────────────────────────────────────────────────
[VIDEO — strip cuộn ngang]
  5 video thumbnail (click → xem fullscreen vertical)
─────────────────────────────────────────────────────
5 bài mix (mid card)
─────────────────────────────────────────────────────
[SỨC KHỎE]
  5 bài Sức khỏe
Box: Tra cứu bệnh
─────────────────────────────────────────────────────
Remaining — mỗi mục 5 bài (theo thứ tự CATEGORIES):
  Thời sự          → Box: Thời tiết 7 ngày
  Thế giới         → Box: Bản đồ Chiến sự (mini map)
  Công nghệ        → Box: Tìm kiếm sản phẩm công nghệ
  Pháp luật        → Box: Thư viện văn bản pháp luật
  Giáo dục         → Box: Tra cứu đề thi & đáp án
  Đời sống
  Xe               → Box: Tra cứu phạt nguội
  Du lịch          → Box: Khám phá điểm đến
  Tiêu dùng
  Video
```

### Loại card bài viết (Mobile)
| Loại | Dùng ở đâu | Cấu trúc |
|------|-----------|----------|
| full card | Bài 1 mỗi mục featured, top 5 | ava full width → title → sapo |
| half card | Bài 2 mỗi mục featured | ava ~50% float trái + title + sapo |
| compact card | Bài 3–5 mỗi mục featured | title + sapo |
| mid card | Mix articles, remaining | ava ~120px float trái + title + sapo |

> **Ghi chú thời gian:** Thời gian đăng bài **không hiển thị** ở card preview (trang chủ, trang mục). Chỉ hiển thị trong trang bài chi tiết và trang video feed.

### Mobile Boxes

| Box | Vị trí | Nội dung |
|-----|--------|----------|
| Tra cứu mã chứng khoán | Sau Kinh doanh | Ô tìm mã CK |
| Tìm kiếm dự án BĐS | Sau BĐS | Ô tìm dự án |
| Lịch thi đấu | Sau Thể thao | Ticker cuộn ngang: giờ + đội nhà vs đội khách |
| Tra cứu bệnh | Sau Sức khỏe | Ô tìm tên bệnh, triệu chứng |
| Thời tiết 7 ngày | Sau Thời sự | Grid ngày + icon + nhiệt độ |
| Bản đồ Chiến sự | Sau Thế giới | Mini map + legend 3 xung đột |
| Tìm kiếm sản phẩm công nghệ | Sau Công nghệ | Ô tìm điện thoại, laptop... |
| Thư viện pháp luật | Sau Pháp luật | Ô tìm văn bản pháp luật |
| Tra cứu đề thi & đáp án | Sau Giáo dục | Ô tìm từ khóa |
| Tra cứu phạt nguội | Sau Xe | Ô nhập biển số |
| Khám phá điểm đến | Sau Du lịch | Ô tìm địa danh |

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
4. Stream bài: full card + half card + compact cards

### Trang mục con có `comingSoon`
Hiển thị trang "🚧 Đang phát triển" thay vì danh sách bài viết.

### Trang bài chi tiết (`#article/{id}`)
1. Header mobile
2. Breadcrumb: Mục lớn › Mục con + ▼ dropdown chọn mục khác
3. Thời gian đăng + 🔊
4. Title → **Sapo** → Nội dung → Tác giả (phải) → Nguồn (phải)
5. **4 câu hỏi AI** (expand/collapse)
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

## JS Routing

```
#home                        → Trang chủ
#category/{id}               → Trang mục (VD: #category/thoi-su)
#category/{id}/{subId}       → Trang mục con (VD: #category/thoi-su/chinh-tri)
#article/{articleId}         → Trang bài chi tiết
```

---

## Data (`data.js`)

### Dữ liệu dùng chung
| Biến | Mô tả |
|------|-------|
| `CATEGORIES` | Toàn bộ cấu trúc chuyên mục + mục con |
| `FEATURED_CATEGORIES` | 5 mục hiển thị cột phải trang chủ web |
| `MOBILE_STREAM_CATEGORIES` | 5 mục có section riêng trong stream mobile |
| `MOBILE_TOP_5` | 5 bài top trang chủ mobile |
| `MOBILE_MIX_1/2/3/4` | Các nhóm bài mix giữa các section |
| `MOBILE_VIDEO_ARTICLES` | 5 video cho strip trang chủ |
| `MOBILE_CATEGORY_ARTICLES` | Bài viết 5 mục featured mobile |
| `MOBILE_REMAINING` | Bài viết các mục còn lại mobile |
| `MATCH_SCHEDULE` | Lịch thi đấu mẫu cho box thể thao |
| `FAMOUS_QUOTES` | Trích dẫn danh nhân cho quote box web |
| `WEATHER_DATA` | Dữ liệu thời tiết 5 thành phố + 7 ngày |
| `BANKS`, `LOAN_TERMS` | Danh sách ngân hàng và kỳ hạn vay |

### Cấu trúc bài viết mẫu
```js
{
  id, title, sapo, content,
  avaUrl,       // URL ảnh đại diện
  catId, subId, // phân loại
  author, source,
  time,         // chỉ hiển thị trong bài chi tiết
  aiQuestions   // 4 câu hỏi AI kèm đáp án
}
```
