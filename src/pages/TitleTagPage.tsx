import React from 'react';

interface TitleTagPageProps {
  section?: string;
}

const TitleTagPage: React.FC<TitleTagPageProps> = ({ section }) => {
  // Render specific section or full content based on section prop
  if (section === 'structure') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Tiêu Đề META Tối Ưu</h1>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-medium">Cấu trúc tiêu đề META chuẩn SEO:</p>
          <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto">
            <code>{`<title>[Từ khóa chính] + [Lợi ích/Giá trị] + [Thương hiệu/Năm] | [Tên Website]</title>`}</code>
          </pre>
        </div>
        
        <p className="mb-4">
          Tiêu đề META (Title tag) là một trong những yếu tố SEO quan trọng nhất, ảnh hưởng trực tiếp đến thứ hạng tìm kiếm và tỷ lệ click (CTR). Một tiêu đề META tối ưu cần tuân theo cấu trúc chuẩn để vừa thu hút người dùng, vừa đáp ứng yêu cầu của thuật toán Google 2025 và AI Search.
        </p>
        
        <p className="mb-4">
          Cấu trúc tiêu đề META tối ưu bao gồm các thành phần chính sau:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Từ khóa chính:</strong> Đặt ở đầu tiêu đề để tăng trọng số SEO</li>
          <li className="mb-2"><strong>Lợi ích/Giá trị:</strong> Nêu rõ giá trị mà người đọc sẽ nhận được</li>
          <li className="mb-2"><strong>Thương hiệu/Năm:</strong> Thêm năm hiện tại (2025) để tăng tính cập nhật</li>
          <li className="mb-2"><strong>Tên Website:</strong> Đặt ở cuối tiêu đề, phân cách bằng dấu | hoặc -</li>
        </ul>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025, tiêu đề META không chỉ cần chứa từ khóa mà còn phải phản ánh chính xác nội dung trang và đáp ứng ý định tìm kiếm (search intent) của người dùng.</p>
        </div>
      </div>
    );
  } else if (section === 'templates') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Mẫu Tiêu Đề META Cho Mọi Ngành</h1>
        
        <p className="mb-6">
          Dưới đây là các mẫu tiêu đề META tối ưu cho nhiều loại bài viết khác nhau, áp dụng được cho mọi ngành nghề. Các mẫu này đã được tối ưu theo thuật toán Google 2025 và AI Search.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">1. Mẫu Bài Hướng Dẫn</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`[Số lượng] Cách/Phương Pháp [Hành động] [Đối tượng/Vấn đề] [Năm] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "15 Phương Pháp Tăng Năng Suất Làm Việc Tại Nhà 2025 | Website"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">2. Mẫu Bài Xu Hướng</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Xu Hướng [Ngành/Lĩnh vực] [Năm] Mới Nhất: [Điểm nổi bật] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Xu Hướng Marketing Số 2025 Mới Nhất: AI Và Cá Nhân Hóa | Website"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">3. Mẫu Bài Review</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Đánh Giá [Tên sản phẩm/dịch vụ]: [Lợi ích/Đặc điểm nổi bật] [Năm] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Đánh Giá Phần Mềm Trello: Giải Pháp Quản Lý Dự Án Toàn Diện 2025 | Website"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">4. Mẫu Bài So Sánh</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`So Sánh [Đối tượng A] và [Đối tượng B]: [Tiêu chí so sánh chính] [Năm] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "So Sánh WordPress và Shopify: Nền Tảng Nào Tốt Hơn Cho Doanh Nghiệp 2025 | Website"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">5. Mẫu Bài Danh Sách</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Top [Số lượng] [Đối tượng] [Tiêu chí] Cho [Đối tượng người dùng] [Năm] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Top 10 Công Cụ Phân Tích Dữ Liệu Hiệu Quả Cho Doanh Nghiệp Nhỏ 2025 | Website"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">6. Mẫu Bài Giải Quyết Vấn Đề</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Cách Giải Quyết [Vấn đề] Hiệu Quả: [Giải pháp chính] [Năm] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Cách Giải Quyết Xung Đột Nơi Công Sở Hiệu Quả: 7 Chiến Lược Giao Tiếp 2025 | Website"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">7. Mẫu Bài Nghiên Cứu</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`[Chủ đề nghiên cứu]: [Phát hiện chính] [Năm] | [Tên Website]`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Tác Động Của Trí Tuệ Nhân Tạo: Nghiên Cứu Mới Về Thị Trường Lao Động 2025 | Website"</p>
          </div>
        </div>
      </div>
    );
  } else if (section === 'rules') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Quy Tắc Tối Ưu Tiêu Đề META</h1>
        
        <p className="mb-6">
          Để tối ưu tiêu đề META theo thuật toán Google 2025 và AI Search, bạn cần tuân thủ các quy tắc sau:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Quy Tắc Tối Ưu Tiêu Đề META</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">1</span>
              <div>
                <p className="font-medium">Giới hạn độ dài: 55-60 ký tự (tối đa 580 pixel)</p>
                <p className="text-gray-600 mt-1">Google thường hiển thị khoảng 55-60 ký tự trong kết quả tìm kiếm. Tiêu đề quá dài sẽ bị cắt và hiển thị dấu "..."</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">2</span>
              <div>
                <p className="font-medium">Đặt từ khóa chính ở đầu tiêu đề</p>
                <p className="text-gray-600 mt-1">Từ khóa xuất hiện ở đầu tiêu đề có trọng số cao hơn trong thuật toán xếp hạng của Google</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">3</span>
              <div>
                <p className="font-medium">Sử dụng số liệu cụ thể khi có thể</p>
                <p className="text-gray-600 mt-1">Các con số như "Top 10", "15 Cách", "7 Bước" làm tăng tỷ lệ click (CTR) đáng kể</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">4</span>
              <div>
                <p className="font-medium">Thêm năm hiện tại (2025) để tăng tính cập nhật</p>
                <p className="text-gray-600 mt-1">Người dùng thường ưu tiên nội dung mới nhất, và Google cũng đánh giá cao tính cập nhật</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">5</span>
              <div>
                <p className="font-medium">Sử dụng dấu phân cách (|, -, :) để tăng khả năng đọc</p>
                <p className="text-gray-600 mt-1">Dấu phân cách giúp tiêu đề dễ đọc hơn và tách biệt các phần thông tin</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">6</span>
              <div>
                <p className="font-medium">Tạo tính cấp bách/tò mò nhưng không clickbait</p>
                <p className="text-gray-600 mt-1">Thuật toán Google 2025 phạt nặng các tiêu đề clickbait không đúng với nội dung</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">7</span>
              <div>
                <p className="font-medium">Đảm bảo đáp ứng ý định tìm kiếm (search intent)</p>
                <p className="text-gray-600 mt-1">AI Search của Google 2025 đặc biệt chú trọng vào việc tiêu đề phải phản ánh đúng ý định tìm kiếm của người dùng</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý về AI Search:</h3>
          <p>Thuật toán AI Search của Google 2025 phân tích ngữ cảnh và ngữ nghĩa của tiêu đề, không chỉ dựa vào từ khóa đơn thuần. Tiêu đề cần phải tự nhiên, cung cấp giá trị rõ ràng và phản ánh chính xác nội dung.</p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Những điều cần tránh:</h3>
          <ul className="list-disc pl-6">
            <li>Nhồi nhét từ khóa (keyword stuffing)</li>
            <li>Tiêu đề quá dài bị cắt trong kết quả tìm kiếm</li>
            <li>Sử dụng từ ngữ gây hiểu lầm hoặc không liên quan đến nội dung</li>
            <li>Lặp lại từ khóa không cần thiết</li>
            <li>Viết hoa toàn bộ tiêu đề</li>
          </ul>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tiêu Đề META Chuẩn SEO</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Tiêu đề META (Title tag) là một trong những yếu tố SEO quan trọng nhất, ảnh hưởng trực tiếp đến thứ hạng tìm kiếm và tỷ lệ click (CTR). Trang này cung cấp hướng dẫn đầy đủ về cách tạo tiêu đề META chuẩn SEO theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cấu Trúc Tiêu Đề META</h3>
            <p className="text-gray-600 mb-4">Cấu trúc tiêu đề META tối ưu và các thành phần cần có</p>
            <div className="mt-auto">
              <a href="/tieu-de-meta/cau-truc" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Mẫu Tiêu Đề META</h3>
            <p className="text-gray-600 mb-4">Các mẫu tiêu đề META cho nhiều loại bài viết khác nhau</p>
            <div className="mt-auto">
              <a href="/tieu-de-meta/mau-tieu-de" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Quy Tắc Tối Ưu</h3>
            <p className="text-gray-600 mb-4">Các quy tắc tối ưu tiêu đề META theo thuật toán mới nhất</p>
            <div className="mt-auto">
              <a href="/tieu-de-meta/quy-tac" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ tiêu đề META chuẩn SEO:</h3>
          <pre className="bg-white p-4 rounded border border-gray-200">
            <code>{`<title>15 Phương Pháp Tăng Năng Suất Làm Việc Tại Nhà 2025 | Website</title>`}</code>
          </pre>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025, tiêu đề META không chỉ cần chứa từ khóa mà còn phải phản ánh chính xác nội dung trang và đáp ứng ý định tìm kiếm (search intent) của người dùng.</p>
        </div>
      </div>
    );
  }
};

export default TitleTagPage;
