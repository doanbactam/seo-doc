import React from 'react';

interface HeadingStructurePageProps {
  section?: string;
}

const HeadingStructurePage: React.FC<HeadingStructurePageProps> = ({ section }) => {
  if (section === 'structure') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Heading Tối Ưu</h1>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-medium">Cấu trúc Heading chuẩn SEO:</p>
          <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto">
            <code>{`H1: [Tiêu đề chính của bài viết - chứa từ khóa chính]
  H2: [Giới thiệu/Tổng quan về chủ đề]
  H2: [Định nghĩa/Bối cảnh/Tầm quan trọng]
  H2: [Chủ đề chính #1 - chứa từ khóa thứ cấp]
    H3: [Điểm chi tiết #1.1]
    H3: [Điểm chi tiết #1.2]
  H2: [Chủ đề chính #2 - chứa từ khóa thứ cấp]
    H3: [Điểm chi tiết #2.1]
    H3: [Điểm chi tiết #2.2]
  H2: [Chủ đề chính #3 - chứa từ khóa thứ cấp]
  H2: [Câu hỏi thường gặp - FAQ]
  H2: [Kết luận/Tổng kết]`}</code>
          </pre>
        </div>
        
        <p className="mb-4">
          Cấu trúc heading là một trong những yếu tố SEO quan trọng, giúp tổ chức nội dung một cách logic và dễ hiểu cho cả người đọc và công cụ tìm kiếm. Một cấu trúc heading tối ưu giúp Google và AI Search hiểu rõ hơn về chủ đề và nội dung của bài viết.
        </p>
        
        <p className="mb-4">
          Cấu trúc heading tối ưu bao gồm các thành phần chính sau:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>H1:</strong> Tiêu đề chính của bài viết, chứa từ khóa chính và chỉ sử dụng một lần duy nhất</li>
          <li className="mb-2"><strong>H2:</strong> Các phần chính của bài viết, chứa từ khóa thứ cấp và từ khóa liên quan</li>
          <li className="mb-2"><strong>H3:</strong> Các điểm chi tiết trong mỗi phần H2, giúp phân chia nội dung thành các đoạn nhỏ dễ đọc</li>
          <li className="mb-2"><strong>H4-H6:</strong> Sử dụng khi cần phân chia nội dung chi tiết hơn nữa</li>
        </ul>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, cấu trúc heading cần phải logic, phản ánh đúng nội dung của bài viết và tuân theo thứ tự phân cấp (H1 → H2 → H3). Việc bỏ qua cấp độ (ví dụ: từ H1 nhảy xuống H3) có thể ảnh hưởng tiêu cực đến SEO.</p>
        </div>
      </div>
    );
  } else if (section === 'templates') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Mẫu Cấu Trúc Heading Cho Các Loại Bài Viết</h1>
        
        <p className="mb-6">
          Dưới đây là các mẫu cấu trúc heading tối ưu cho nhiều loại bài viết khác nhau, áp dụng được cho mọi ngành nghề. Các mẫu này đã được tối ưu theo thuật toán Google 2025 và AI Search.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">1. Mẫu Bài Hướng Dẫn (How-to)</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`H1: [Số lượng] Cách [Hành động] [Đối tượng/Vấn đề] [Năm]
  H2: Tại Sao [Hành động] [Đối tượng/Vấn đề] Lại Quan Trọng?
  H2: Những Nguyên Tắc Cơ Bản Khi [Hành động] [Đối tượng/Vấn đề]
    H3: Nguyên Tắc #1: [Tên nguyên tắc]
    H3: Nguyên Tắc #2: [Tên nguyên tắc]
  H2: [Số lượng] Bước [Hành động] [Đối tượng/Vấn đề] Hiệu Quả
    H3: Bước 1: [Tên bước]
    H3: Bước 2: [Tên bước]
    H3: Bước 3: [Tên bước]
  H2: Công Cụ/Tài Nguyên Hỗ Trợ [Hành động] [Đối tượng/Vấn đề]
  H2: Lỗi Thường Gặp Khi [Hành động] [Đối tượng/Vấn đề] Và Cách Khắc Phục
  H2: Câu Hỏi Thường Gặp Về [Hành động] [Đối tượng/Vấn đề]
  H2: Tổng Kết: Những Điểm Chính Cần Nhớ Khi [Hành động] [Đối tượng/Vấn đề]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "15 Cách Tăng Năng Suất Làm Việc Tại Nhà 2025"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">2. Mẫu Bài Danh Sách (Listicle)</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`H1: Top [Số lượng] [Đối tượng] [Tiêu chí] Cho [Đối tượng người dùng] [Năm]
  H2: Tại Sao Cần Chọn [Đối tượng] [Tiêu chí]?
  H2: Tiêu Chí Đánh Giá [Đối tượng] [Tiêu chí]
  H2: #1: [Tên đối tượng thứ nhất]
    H3: Đặc Điểm Nổi Bật
    H3: Ưu Điểm Và Nhược Điểm
    H3: Phù Hợp Với Ai?
  H2: #2: [Tên đối tượng thứ hai]
    H3: Đặc Điểm Nổi Bật
    H3: Ưu Điểm Và Nhược Điểm
    H3: Phù Hợp Với Ai?
  [Tiếp tục với các đối tượng khác...]
  H2: Bảng So Sánh [Số lượng] [Đối tượng] [Tiêu chí]
  H2: Câu Hỏi Thường Gặp Về [Đối tượng]
  H2: Kết Luận: [Đối tượng] Nào Phù Hợp Nhất Với Bạn?`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Top 10 Công Cụ Phân Tích Dữ Liệu Hiệu Quả Cho Doanh Nghiệp Nhỏ 2025"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">3. Mẫu Bài So Sánh (Comparison)</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`H1: So Sánh [Đối tượng A] và [Đối tượng B]: [Tiêu chí so sánh chính] [Năm]
  H2: Tổng Quan Về [Đối tượng A] Và [Đối tượng B]
  H2: So Sánh Về [Tiêu chí 1]
    H3: [Đối tượng A] - [Tiêu chí 1]
    H3: [Đối tượng B] - [Tiêu chí 1]
  H2: So Sánh Về [Tiêu chí 2]
    H3: [Đối tượng A] - [Tiêu chí 2]
    H3: [Đối tượng B] - [Tiêu chí 2]
  H2: So Sánh Về [Tiêu chí 3]
  H2: Bảng So Sánh Tổng Hợp
  H2: [Đối tượng A] Phù Hợp Với Ai?
  H2: [Đối tượng B] Phù Hợp Với Ai?
  H2: Câu Hỏi Thường Gặp Khi Chọn Giữa [Đối tượng A] Và [Đối tượng B]
  H2: Kết Luận: Nên Chọn [Đối tượng A] Hay [Đối tượng B]?`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "So Sánh WordPress và Shopify: Nền Tảng Nào Tốt Hơn Cho Doanh Nghiệp 2025"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">4. Mẫu Bài Giải Quyết Vấn Đề (Problem-Solving)</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`H1: Cách Giải Quyết [Vấn đề] Hiệu Quả: [Giải pháp chính] [Năm]
  H2: [Vấn đề] Là Gì Và Tại Sao Nó Quan Trọng?
  H2: Nguyên Nhân Phổ Biến Gây Ra [Vấn đề]
    H3: Nguyên Nhân #1: [Tên nguyên nhân]
    H3: Nguyên Nhân #2: [Tên nguyên nhân]
  H2: [Số lượng] Giải Pháp Hiệu Quả Cho [Vấn đề]
    H3: Giải Pháp #1: [Tên giải pháp]
    H3: Giải Pháp #2: [Tên giải pháp]
  H2: Quy Trình [Số] Bước Để Giải Quyết [Vấn đề]
  H2: Công Cụ Và Tài Nguyên Hỗ Trợ Giải Quyết [Vấn đề]
  H2: Cách Phòng Ngừa [Vấn đề] Trong Tương Lai
  H2: Câu Hỏi Thường Gặp Về [Vấn đề]
  H2: Tổng Kết: Chiến Lược Toàn Diện Để Giải Quyết [Vấn đề]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Cách Giải Quyết Xung Đột Nơi Công Sở Hiệu Quả: 7 Chiến Lược Giao Tiếp 2025"</p>
          </div>
        </div>
      </div>
    );
  } else if (section === 'rules') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Quy Tắc Tối Ưu Heading</h1>
        
        <p className="mb-6">
          Để tối ưu heading theo thuật toán Google 2025 và AI Search, bạn cần tuân thủ các quy tắc sau:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Quy Tắc Tối Ưu Heading</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">1</span>
              <div>
                <p className="font-medium">Chỉ sử dụng một H1 duy nhất trên trang</p>
                <p className="text-gray-600 mt-1">H1 là tiêu đề chính của trang và chỉ nên xuất hiện một lần. Nhiều H1 có thể gây nhầm lẫn cho công cụ tìm kiếm về chủ đề chính của trang.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">2</span>
              <div>
                <p className="font-medium">Đảm bảo cấu trúc heading theo thứ tự hợp lý (H1 → H2 → H3)</p>
                <p className="text-gray-600 mt-1">Không bỏ qua cấp độ heading (ví dụ: từ H1 nhảy xuống H3). Cấu trúc phân cấp logic giúp Google hiểu rõ hơn về tổ chức nội dung.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">3</span>
              <div>
                <p className="font-medium">Đưa từ khóa chính vào H1</p>
                <p className="text-gray-600 mt-1">H1 nên chứa từ khóa chính một cách tự nhiên, không gượng ép. Đây là tín hiệu quan trọng cho Google về chủ đề của trang.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">4</span>
              <div>
                <p className="font-medium">Đưa từ khóa thứ cấp và từ khóa liên quan vào H2, H3</p>
                <p className="text-gray-600 mt-1">Các heading phụ nên chứa từ khóa thứ cấp và từ khóa liên quan để tăng cường topical authority.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">5</span>
              <div>
                <p className="font-medium">Giữ heading ngắn gọn, dễ hiểu (dưới 70 ký tự)</p>
                <p className="text-gray-600 mt-1">Heading ngắn gọn, súc tích giúp người đọc và công cụ tìm kiếm nắm bắt nhanh nội dung chính.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">6</span>
              <div>
                <p className="font-medium">Sử dụng số liệu, con số trong heading khi có thể</p>
                <p className="text-gray-600 mt-1">Số liệu cụ thể làm tăng tính hấp dẫn và độ tin cậy của heading, đồng thời cải thiện tỷ lệ click.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">7</span>
              <div>
                <p className="font-medium">Đảm bảo heading mô tả chính xác nội dung phần đó</p>
                <p className="text-gray-600 mt-1">AI Search của Google 2025 có khả năng phát hiện heading không phù hợp với nội dung bên dưới nó.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý về AI Search:</h3>
          <p>Thuật toán AI Search của Google 2025 phân tích mối quan hệ giữa các heading và nội dung bên dưới chúng. Heading cần phải mô tả chính xác nội dung và tạo thành một cấu trúc logic, dễ hiểu.</p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Những điều cần tránh:</h3>
          <ul className="list-disc pl-6">
            <li>Sử dụng nhiều H1 trên cùng một trang</li>
            <li>Bỏ qua cấp độ heading (ví dụ: từ H1 nhảy xuống H3)</li>
            <li>Heading quá dài hoặc quá ngắn</li>
            <li>Nhồi nhét từ khóa vào heading</li>
            <li>Heading không liên quan đến nội dung bên dưới</li>
            <li>Sử dụng cùng một heading cho nhiều phần khác nhau</li>
          </ul>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Heading Chuẩn SEO</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Cấu trúc heading là một trong những yếu tố SEO quan trọng, giúp tổ chức nội dung một cách logic và dễ hiểu cho cả người đọc và công cụ tìm kiếm. Trang này cung cấp hướng dẫn đầy đủ về cách tạo cấu trúc heading chuẩn SEO theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cấu Trúc Heading Tối Ưu</h3>
            <p className="text-gray-600 mb-4">Cấu trúc heading tối ưu và các thành phần cần có</p>
            <div className="mt-auto">
              <a href="/heading/cau-truc" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Mẫu Cấu Trúc Heading</h3>
            <p className="text-gray-600 mb-4">Các mẫu cấu trúc heading cho nhiều loại bài viết khác nhau</p>
            <div className="mt-auto">
              <a href="/heading/mau-heading" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Quy Tắc Tối Ưu</h3>
            <p className="text-gray-600 mb-4">Các quy tắc tối ưu heading theo thuật toán mới nhất</p>
            <div className="mt-auto">
              <a href="/heading/quy-tac" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ cấu trúc heading chuẩn SEO:</h3>
          <pre className="bg-white p-4 rounded border border-gray-200">
            <code>{`<h1>15 Phương Pháp Tăng Năng Suất Làm Việc Tại Nhà 2025</h1>
<h2>Tại Sao Năng Suất Làm Việc Tại Nhà Lại Quan Trọng?</h2>
<h2>5 Phương Pháp Quản Lý Thời Gian Hiệu Quả</h2>
<h3>Phương Pháp Pomodoro Cải Tiến</h3>
<h3>Phương Pháp Time Blocking 2.0</h3>
<h2>5 Công Cụ Số Hóa Tăng Năng Suất Năm 2025</h2>
<h2>Câu Hỏi Thường Gặp Về Tăng Năng Suất Làm Việc Tại Nhà</h2>
<h2>Tổng Kết: Xây Dựng Kế Hoạch Tăng Năng Suất Cá Nhân</h2>`}</code>
          </pre>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, cấu trúc heading cần phải logic, phản ánh đúng nội dung của bài viết và tuân theo thứ tự phân cấp (H1 → H2 → H3). Việc bỏ qua cấp độ (ví dụ: từ H1 nhảy xuống H3) có thể ảnh hưởng tiêu cực đến SEO.</p>
        </div>
      </div>
    );
  }
};

export default HeadingStructurePage;
