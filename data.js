// ============================================================
// V-App Sample Data
// File này chứa toàn bộ dữ liệu mẫu dùng chung cho web.html và mobile.html
// ============================================================

// --- CẤU TRÚC CHUYÊN MỤC ---
const CATEGORIES = [
  {
    id: "thoi-su", name: "Thời sự",
    subs: [
      { id: "chinh-tri", name: "Chính trị" },
      { id: "dan-sinh", name: "Dân sinh" },
      { id: "quoc-te", name: "Quốc tế" },
      { id: "giao-thong", name: "Giao thông" }
    ]
  },
  {
    id: "the-gioi", name: "Thế giới",
    subs: [
      { id: "phan-tich", name: "Phân tích" },
      { id: "quan-su", name: "Quân sự" },
      { id: "kham-pha", name: "Khám phá" }
    ]
  },
  {
    id: "kinh-doanh", name: "Kinh doanh",
    subs: [
      { id: "dau-tu", name: "Đầu tư" },
      { id: "doanh-nghiep", name: "Doanh nghiệp" },
      { id: "chung-khoan", name: "Chứng khoán", special: "stock-search" },
      { id: "bank", name: "Bank", special: "ebank-search" },
      { id: "vi-mo", name: "Vĩ mô" }
    ]
  },
  {
    id: "cong-nghe", name: "Công nghệ",
    subs: [
      { id: "ai", name: "AI" },
      { id: "khoa-hoc", name: "Khoa học" },
      { id: "thiet-bi", name: "Thiết bị", special: "thietbi-search" }
    ]
  },
  {
    id: "bat-dong-san", name: "BĐS",
    subs: [
      { id: "chinh-sach", name: "Chính sách" },
      { id: "thi-truong", name: "Thị trường" },
      { id: "du-an", name: "Dự án", special: "project-search" },
      { id: "quy-hoach", name: "Quy hoạch", special: "quyhoach-search" },
      { id: "khong-gian-song", name: "Không gian sống" }
    ]
  },
  {
    id: "suc-khoe", name: "Sức khỏe",
    subs: [
      { id: "cac-benh", name: "Các bệnh", special: "disease-search" },
      { id: "song-khoe", name: "Sống khỏe" }
    ]
  },
  {
    id: "giai-tri", name: "Giải trí",
    subs: [
      { id: "sach", name: "Sách" },
      { id: "phim", name: "Phim" },
      { id: "nhac", name: "Nhạc" },
      { id: "thoi-trang", name: "Thời trang" },
      { id: "lam-dep", name: "Làm đẹp" }
    ]
  },
  {
    id: "the-thao", name: "Thể thao",
    subs: [
      { id: "bong-da", name: "Bóng đá" },
      { id: "lich-thi-dau", name: "Lịch thi đấu" },
      { id: "tennis", name: "Tennis" },
      { id: "pickleball", name: "Pickleball" },
      { id: "golf", name: "Golf" },
      { id: "esport", name: "Esport" },
      { id: "cac-mon-khac", name: "Các môn khác" },
      { id: "hau-truong", name: "Hậu trường" }
    ]
  },
  {
    id: "phap-luat", name: "Pháp luật",
    subs: [
      { id: "phap-dinh", name: "Pháp đình" },
      { id: "thu-vien-phap-luat", name: "Thư viện pháp luật", special: "law-search" }
    ]
  },
  {
    id: "giao-duc", name: "Giáo dục",
    subs: [
      { id: "tuyen-sinh", name: "Tuyển sinh" },
      { id: "du-hoc", name: "Du học" },
      { id: "de-thi-dap-an", name: "Đề thi & Đáp án", special: "exam-search" }
    ]
  },
  {
    id: "doi-song", name: "Đời sống",
    subs: [
      { id: "nhip-song", name: "Nhịp sống" },
      { id: "bai-hoc-cuoc-song", name: "Bài học cuộc sống" },
      { id: "phong-cach", name: "Phong cách" },
      { id: "viec-lam", name: "Việc làm" }
    ]
  },
  {
    id: "xe", name: "Xe",
    subs: [
      { id: "thi-truong-xe", name: "Thị trường" },
      { id: "xe-dien", name: "Xe điện" },
      { id: "kinh-nghiem-lai-xe", name: "Kinh nghiệm lái xe" },
      { id: "cham-xe", name: "Chăm xe" }
    ]
  },
  {
    id: "du-lich", name: "Du lịch",
    subs: [
      { id: "diem-den", name: "Điểm đến", special: "destination-search" },
      { id: "am-thuc", name: "Ẩm thực" },
      { id: "kham-pha-dl", name: "Khám phá" }
    ]
  },
  {
    id: "tieu-dung", name: "Tiêu dùng",
    subs: [
      { id: "hang-hoa", name: "Hàng hóa" },
      { id: "mua-ban", name: "Mua bán" }
    ]
  },
  {
    id: "video", name: "Video",
    subs: []
  }
];

// 5 mục chính hiển thị cột phải trang chủ web
const FEATURED_CATEGORIES = ["kinh-doanh", "bat-dong-san", "the-thao", "giai-tri", "suc-khoe"];

// 5 mục chính hiển thị trong mobile stream
const MOBILE_STREAM_CATEGORIES = ["kinh-doanh", "bat-dong-san", "the-thao", "giai-tri", "suc-khoe"];

// --- TÁC GIẢ MẪU ---
const AUTHORS = [
  "Nguyễn Văn An", "Trần Thị Bình", "Lê Hoàng Cường", "Phạm Minh Đức",
  "Hoàng Thị Hạnh", "Vũ Quang Hải", "Đặng Ngọc Lan", "Bùi Thanh Long",
  "Ngô Thị Mai", "Dương Văn Nam", "Trịnh Hồng Phúc", "Lý Thị Quỳnh"
];

// --- NGUỒN MẪU ---
const SOURCES = [
  "V-App News", "Thông tấn xã Việt Nam", "Báo Nhân Dân",
  "Vietnam News Agency", "Báo Tuổi Trẻ", "Tạp chí Kinh tế",
  "Trung tâm Tin tức V-App", "Ban Thời sự V-App"
];

// --- 10 QUOTES VĨ NHÂN ---
const QUOTES = [
  { text: "Trí tưởng tượng quan trọng hơn kiến thức. Kiến thức có giới hạn, còn trí tưởng tượng thì bao trùm cả thế giới.", author: "Albert Einstein" },
  { text: "Cách tốt nhất để dự đoán tương lai là tạo ra nó.", author: "Abraham Lincoln" },
  { text: "Hãy là sự thay đổi mà bạn muốn thấy trên thế giới.", author: "Mahatma Gandhi" },
  { text: "Cuộc sống là những gì xảy ra khi bạn đang bận rộn lập kế hoạch khác.", author: "John Lennon" },
  { text: "Thành công không phải là chìa khóa dẫn đến hạnh phúc. Hạnh phúc mới là chìa khóa dẫn đến thành công.", author: "Albert Schweitzer" },
  { text: "Giáo dục là vũ khí mạnh nhất mà bạn có thể dùng để thay đổi thế giới.", author: "Nelson Mandela" },
  { text: "Điều duy nhất chúng ta phải sợ là chính nỗi sợ hãi.", author: "Franklin D. Roosevelt" },
  { text: "Không có con đường nào dẫn đến hạnh phúc. Hạnh phúc chính là con đường.", author: "Thích Nhất Hạnh" },
  { text: "Hãy sống như thể bạn sẽ chết vào ngày mai. Hãy học như thể bạn sẽ sống mãi mãi.", author: "Mahatma Gandhi" },
  { text: "Tôi nghĩ, vậy nên tôi tồn tại.", author: "René Descartes" }
];

// --- TIỆN ÍCH LIÊN QUAN ---
const UTILITIES = [
  { name: "Tra cứu mã chứng khoán", icon: "📈", link: "#" },
  { name: "Tỷ giá ngoại tệ", icon: "💱", link: "#" },
  { name: "Giá vàng hôm nay", icon: "🥇", link: "#" },
  { name: "Kết quả xổ số", icon: "🎰", link: "#" },
  { name: "Lịch âm hôm nay", icon: "📅", link: "#" },
  { name: "Tra cứu phạt nguội", icon: "🚗", link: "#" },
  { name: "Thời tiết", icon: "🌤️", link: "#" },
  { name: "Tra cứu điểm thi", icon: "📝", link: "#" }
];

// --- LINK MẪU ---
const SAMPLE_LINKS = [
  "https://picsum.photos/seed/vapp1/800/450",
  "https://picsum.photos/seed/vapp2/800/450",
  "https://picsum.photos/seed/vapp3/800/450",
  "https://picsum.photos/seed/vapp4/800/450",
  "https://picsum.photos/seed/vapp5/800/450"
];

// --- TIÊU ĐỀ MẪU ---
const SAMPLE_TITLES = [
  "Thủ tướng chủ trì phiên họp Chính phủ thường kỳ tháng 2",
  "Giá vàng tiếp tục tăng mạnh, vượt mốc 95 triệu đồng/lượng",
  "VN-Index tăng 15 điểm, thanh khoản đạt mức cao nhất tháng",
  "Thời tiết ngày 27/2: Bắc Bộ trời rét, Nam Bộ nắng nóng",
  "Phát hiện hành tinh mới có khả năng tồn tại sự sống",
  "Đội tuyển Việt Nam chuẩn bị cho vòng loại World Cup 2026",
  "Giá xăng dầu hôm nay: Giảm nhẹ sau chuỗi tăng liên tiếp",
  "Hà Nội triển khai dự án metro số 5, kết nối Văn Cao - Hòa Lạc",
  "Apple ra mắt iPhone 17 với thiết kế hoàn toàn mới",
  "Bất động sản phía Nam bắt đầu hồi phục, giao dịch tăng 30%",
  "Bộ Y tế cảnh báo dịch cúm gia cầm có nguy cơ lây sang người",
  "Phim Việt Nam đoạt giải tại Liên hoan phim quốc tế Berlin",
  "Giải pháp năng lượng xanh cho các khu công nghiệp miền Trung",
  "Du lịch Phú Quốc bùng nổ mùa cao điểm, lượng khách tăng gấp đôi",
  "Ngân hàng Nhà nước giữ nguyên lãi suất điều hành",
  "Hội nghị thượng đỉnh ASEAN bàn về an ninh Biển Đông",
  "Startup Việt gọi vốn thành công 50 triệu USD cho AI y tế",
  "Xe điện VinFast VF 3 giao hàng loạt, giá từ 315 triệu đồng",
  "Trường đại học công bố điểm chuẩn tuyển sinh 2026",
  "Phát triển du lịch bền vững tại vườn quốc gia Phong Nha",
  "Tòa án xét xử vụ án lừa đảo qua mạng xã hội quy mô lớn",
  "Chuyên gia dinh dưỡng chia sẻ bí quyết ăn uống lành mạnh",
  "Manchester City đánh bại Real Madrid tại Champions League",
  "Thị trường bất động sản 2026: Cơ hội nào cho người mua nhà?",
  "AI tạo sinh: Cuộc cách mạng tiếp theo của ngành công nghệ",
  "Làng nghề truyền thống Bát Tràng thu hút du khách quốc tế",
  "Giải Marathon quốc tế TPHCM 2026 quy tụ 20.000 vận động viên",
  "Mẹo tiết kiệm điện hiệu quả trong mùa nắng nóng",
  "Bộ Giáo dục công bố lịch thi tốt nghiệp THPT 2026",
  "Nghị định mới về quản lý kinh doanh bất động sản có hiệu lực"
];

const SAMPLE_SAPOS = [
  "Phiên họp tập trung bàn về các giải pháp thúc đẩy tăng trưởng kinh tế quý I và kế hoạch phát triển kinh tế - xã hội năm 2026.",
  "Giá vàng SJC sáng nay được niêm yết ở mức 95,5 triệu đồng/lượng mua vào và 96 triệu đồng/lượng bán ra, tăng 500.000 đồng so với hôm qua.",
  "Thị trường chứng khoán Việt Nam phiên hôm nay giao dịch sôi động với thanh khoản vượt 25.000 tỷ đồng, VN-Index đóng cửa ở mức 1.299,50 điểm.",
  "Không khí lạnh tiếp tục ảnh hưởng đến các tỉnh phía Bắc với nhiệt độ thấp nhất 12-14°C, trong khi miền Nam nắng nóng trên 35°C.",
  "Các nhà khoa học NASA công bố phát hiện một hành tinh ngoài hệ mặt trời có điều kiện tương tự Trái Đất, nằm cách chúng ta 40 năm ánh sáng.",
  "Huấn luyện viên trưởng công bố danh sách 28 cầu thủ được triệu tập cho hai trận đấu quan trọng trong tháng 3.",
  "Giá xăng RON 95 giảm 200 đồng/lít, xuống còn 23.450 đồng/lít sau khi liên Bộ Công Thương - Tài chính điều chỉnh.",
  "Dự án metro số 5 có tổng vốn đầu tư 65.000 tỷ đồng, dự kiến hoàn thành vào năm 2030, giúp giảm tải giao thông cho thủ đô.",
  "Thế hệ iPhone mới sử dụng chip A20, camera 48MP và thiết kế viền siêu mỏng, giá khởi điểm từ 25.990.000 đồng.",
  "Số lượng giao dịch bất động sản tại các tỉnh phía Nam tăng mạnh trong tháng đầu năm, cho thấy tín hiệu phục hồi rõ nét.",
  "Bộ Y tế khuyến cáo người dân không tiếp xúc với gia cầm ốm chết, đồng thời tăng cường giám sát tại các chợ gia cầm sống.",
  "Bộ phim 'Ánh Sáng' của đạo diễn Trần Minh Tuấn giành giải Gấu Bạc tại LHP Berlin lần thứ 76.",
  "Nhiều khu công nghiệp tại Đà Nẵng, Quảng Nam chuyển đổi sang sử dụng điện mặt trời, giảm 40% chi phí năng lượng.",
  "Lượng khách du lịch đến Phú Quốc trong tháng 2 đạt 450.000 lượt, tăng 95% so với cùng kỳ năm trước.",
  "Ngân hàng Nhà nước quyết định giữ nguyên các mức lãi suất điều hành nhằm ổn định thị trường tiền tệ."
];

// --- CÂU HỎI AI MẪU ---
const AI_QUESTIONS = [
  { q: "Sự kiện này ảnh hưởng như thế nào đến người dân?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "Nguyên nhân chính dẫn đến vấn đề này là gì?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "Các chuyên gia nhận định như thế nào?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "Xu hướng này sẽ tiếp diễn ra sao trong thời gian tới?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "So sánh với các nước trong khu vực thì Việt Nam đang ở đâu?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "Chính phủ đã có những chính sách gì liên quan?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "Người dân cần lưu ý điều gì?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." },
  { q: "Lịch sử vấn đề này như thế nào?", a: "Đây là câu trả lời mẫu phục vụ thiết kế giao diện. Trong phiên bản chính thức, câu trả lời sẽ được AI tạo ra dựa trên nội dung bài viết thực tế." }
];

// --- THỜI TIẾT MẪU ---
const WEATHER_DATA = {
  current: { city: "Hà Nội", temp: "18°C", desc: "Có mây", icon: "⛅" },
  weekly: [
    { day: "T2", date: "24/02", temp: "17°C", icon: "🌧️" },
    { day: "T3", date: "25/02", temp: "18°C", icon: "⛅" },
    { day: "T4", date: "26/02", temp: "20°C", icon: "🌤️" },
    { day: "T5", date: "27/02", temp: "19°C", icon: "⛅" },
    { day: "T6", date: "28/02", temp: "22°C", icon: "☀️" },
    { day: "T7", date: "01/03", temp: "21°C", icon: "🌤️" },
    { day: "CN", date: "02/03", temp: "23°C", icon: "☀️" }
  ]
};

// --- ĐỊA PHƯƠNG ---
const LOCAL_CITIES = ["Hà Nội", "TP.HCM", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Huế"];

// --- TICKER DATA ---
const TICKER_DATA = {
  weather: "Hà Nội: 18°C ⛅",
  date: "Thứ Năm, 27/02/2026",
  lunarDate: "Mùng 1 tháng 2 Ất Tỵ",
  gold: "Vàng SJC: 95.500.000 đ/lượng",
  stock: "VN-Index: 1.284,35 (+15,20)"
};

// --- NGÂN HÀNG MẪU (cho Ebank) ---
const BANKS = [
  "Vietcombank", "VietinBank", "BIDV", "Agribank", "Techcombank",
  "MB Bank", "ACB", "VPBank", "Sacombank", "TPBank"
];

const LOAN_TERMS = ["1 tháng", "3 tháng", "6 tháng", "12 tháng", "24 tháng", "36 tháng"];

// ============================================================
// HÀM TẠO DỮ LIỆU
// ============================================================

let articleIdCounter = 1;

// Tạo thời gian ngẫu nhiên trong 48h gần đây
function randomTime() {
  const now = new Date(2026, 1, 27, 14, 0, 0);
  const hoursAgo = Math.floor(Math.random() * 48);
  const minutesAgo = Math.floor(Math.random() * 60);
  const d = new Date(now.getTime() - hoursAgo * 3600000 - minutesAgo * 60000);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${dd}/${mm}/2026 ${hh}:${min}`;
}

// Chọn ngẫu nhiên phần tử từ mảng
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Tạo 1 bài viết mẫu
function createArticle(categoryId, subId) {
  const id = articleIdCounter++;
  const cat = CATEGORIES.find(c => c.id === categoryId);
  const sub = cat ? cat.subs.find(s => s.id === subId) : null;
  return {
    id: id,
    title: randomPick(SAMPLE_TITLES),
    sapo: randomPick(SAMPLE_SAPOS),
    content: "Đây là bài sample phục vụ tham khảo thiết kế. Nội dung bài viết thực tế sẽ được thay thế trong phiên bản chính thức. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nội dung mẫu này chỉ để hiển thị bố cục và font chữ trên giao diện.",
    avaUrl: "https://picsum.photos/seed/vapp" + id + "/800/450",
    time: randomTime(),
    author: randomPick(AUTHORS),
    source: randomPick(SOURCES),
    categoryId: categoryId,
    categoryName: cat ? cat.name : "",
    subId: subId || (cat && cat.subs.length > 0 ? cat.subs[0].id : ""),
    subName: sub ? sub.name : (cat && cat.subs.length > 0 ? cat.subs[0].name : "")
  };
}

// Tạo nhiều bài viết cho 1 mục
function generateArticles(categoryId, count, subId) {
  const articles = [];
  const cat = CATEGORIES.find(c => c.id === categoryId);
  for (let i = 0; i < count; i++) {
    const sid = subId || (cat && cat.subs.length > 0 ? randomPick(cat.subs).id : null);
    articles.push(createArticle(categoryId, sid));
  }
  return articles;
}

// Tạo 4 câu hỏi AI ngẫu nhiên
function getRandomQuestions() {
  const shuffled = [...AI_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

// Lấy 1 quote ngẫu nhiên
function getRandomQuote() {
  return randomPick(QUOTES);
}

// ============================================================
// PRE-GENERATE DỮ LIỆU CHO TRANG CHỦ
// ============================================================

// Bài top trang chủ (4 bài)
const HOME_TOP_ARTICLES = generateArticles("thoi-su", 4);

// 15 bài cột trái trang chủ
const HOME_LEFT_ARTICLES = [];
CATEGORIES.forEach(cat => {
  HOME_LEFT_ARTICLES.push(createArticle(cat.id));
});
// Thêm bài nếu chưa đủ 15
while (HOME_LEFT_ARTICLES.length < 15) {
  HOME_LEFT_ARTICLES.push(createArticle(randomPick(CATEGORIES).id));
}

// 5 cụm mục nổi bật (mỗi cụm 5 bài)
const HOME_FEATURED = {};
FEATURED_CATEGORIES.forEach(catId => {
  HOME_FEATURED[catId] = generateArticles(catId, 5);
});

// Các mục còn lại (mỗi mục 3 bài)
const HOME_REMAINING = {};
CATEGORIES.forEach(cat => {
  if (!FEATURED_CATEGORIES.includes(cat.id)) {
    HOME_REMAINING[cat.id] = generateArticles(cat.id, 3);
  }
});

// Bài cho trang mục mẫu (20 bài)
const CATEGORY_ARTICLES = {};
CATEGORIES.forEach(cat => {
  CATEGORY_ARTICLES[cat.id] = generateArticles(cat.id, 20);
});

// Bài đọc nhiều nhất 48h
const MOST_READ_48H = generateArticles("thoi-su", 5).map((a, i) => {
  a.title = SAMPLE_TITLES[i];
  return a;
});

// ============================================================
// MOBILE STREAM DATA
// ============================================================
const MOBILE_TOP_5 = generateArticles("thoi-su", 5);
const MOBILE_CATEGORY_ARTICLES = {};
MOBILE_STREAM_CATEGORIES.forEach(catId => {
  MOBILE_CATEGORY_ARTICLES[catId] = generateArticles(catId, 5);
});

// Các mục còn lại cho mobile
const MOBILE_REMAINING = {};
CATEGORIES.forEach(cat => {
  if (!MOBILE_STREAM_CATEGORIES.includes(cat.id)) {
    MOBILE_REMAINING[cat.id] = generateArticles(cat.id, 5);
  }
});

// 5 bài mix top thay thế box VN-Index (sau Kinh doanh trong mobile)
const MOBILE_MIX_1 = [
  createArticle("thoi-su"),
  createArticle("the-gioi"),
  createArticle("cong-nghe"),
  createArticle("giao-duc"),
  createArticle("phap-luat")
];

// 5 bài mix top thay thế box Quote (sau Thể thao trong mobile)
const MOBILE_MIX_2 = [
  createArticle("du-lich"),
  createArticle("suc-khoe"),
  createArticle("xe"),
  createArticle("doi-song"),
  createArticle("thoi-su")
];

// 5 bài mix top (sau Giải trí, trước Remaining trong mobile)
const MOBILE_MIX_3 = [
  createArticle("kinh-doanh"),
  createArticle("the-thao"),
  createArticle("bat-dong-san"),
  createArticle("giao-duc"),
  createArticle("cong-nghe")
];

// 5 bài mix top (sau BĐS box, trước Thể thao trong mobile)
const MOBILE_MIX_4 = [
  createArticle("thoi-su"),
  createArticle("the-gioi"),
  createArticle("phap-luat"),
  createArticle("du-lich"),
  createArticle("doi-song")
];

// 5 video cho cụm Video mobile (swipe ngang)
const MOBILE_VIDEO_ARTICLES = generateArticles("video", 5);

// 5 video cho cụm Video web (dải ngang trang chủ)
const VIDEO_HOME_ARTICLES = generateArticles("video", 5);

// ============================================================
// EXPORT (global)
// ============================================================
window.VAPP = {
  CATEGORIES,
  FEATURED_CATEGORIES,
  MOBILE_STREAM_CATEGORIES,
  AUTHORS,
  SOURCES,
  QUOTES,
  UTILITIES,
  AI_QUESTIONS,
  WEATHER_DATA,
  LOCAL_CITIES,
  TICKER_DATA,
  BANKS,
  LOAN_TERMS,
  HOME_TOP_ARTICLES,
  HOME_LEFT_ARTICLES,
  HOME_FEATURED,
  HOME_REMAINING,
  CATEGORY_ARTICLES,
  MOST_READ_48H,
  MOBILE_TOP_5,
  MOBILE_CATEGORY_ARTICLES,
  MOBILE_REMAINING,
  MOBILE_MIX_1,
  MOBILE_MIX_2,
  MOBILE_MIX_3,
  MOBILE_MIX_4,
  MOBILE_VIDEO_ARTICLES,
  VIDEO_HOME_ARTICLES,
  generateArticles,
  createArticle,
  getRandomQuestions,
  getRandomQuote,
  randomPick
};
