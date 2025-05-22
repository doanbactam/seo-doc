import React from 'react';

interface MetaDescriptionPageProps {
  section?: string;
}

const MetaDescriptionPage: React.FC<MetaDescriptionPageProps> = ({ section }) => {
  if (section === 'structure') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Meta Description Tối Ưu</h1>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-medium">Cấu trúc Meta Description chuẩn SEO:</p>
          <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto">
            <code>{`<meta name="description" content="[Tóm tắt nội dung chính] + [Lợi ích/Giá trị] + [Call-to-action]" />`}</code>
          </pre>
        </div>
        
        <p className="mb-4">
          Meta Description là đoạn mô tả ngắn xuất hiện dưới tiêu đề trong kết quả tìm kiếm. Mặc dù không trực tiếp ảnh hưởng đến thứ hạng SEO, nhưng nó có tác động lớn đến tỷ lệ click (CTR) và là yếu tố quan trọng trong việc tối ưu hóa trải nghiệm người dùng.
        </p>
        
        <p className="mb-4">
          Cấu trúc Meta Description tối ưu bao gồm các thành phần chính sau:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Tóm tắt nội dung chính:</strong> Mô tả ngắn gọn về nội dung của trang, bao gồm từ khóa chính</li>
          <li className="mb-2"><strong>Lợi ích/Giá trị:</strong> Nêu rõ giá trị mà người đọc sẽ nhận được khi click vào kết quả</li>
          <li className="mb-2"><strong>Call-to-action:</strong> Kêu gọi hành động nhẹ nhàng để khuyến khích người dùng click</li>
        </ul>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, Meta Description cần phải tự nhiên, cung cấp thông tin hữu ích và phản ánh chính xác nội dung của trang. Google có thể hiển thị đoạn mô tả khác với Meta Description của bạn nếu thuật toán cho rằng đoạn đó phù hợp hơn với truy vấn tìm kiếm.</p>
        </div>
      </div>
    );
  } else if (section === 'templates') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Mẫu Meta Description Cho Mọi Ngành</h1>
        
        <p className="mb-6">
          Dưới đây là các mẫu Meta Description tối ưu cho nhiều loại bài viết khác nhau, áp dụng được cho mọi ngành nghề. Các mẫu này đã được tối ưu theo thuật toán Google 2025 và AI Search.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">1. Mẫu Bài Hướng Dẫn</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Khám phá [số lượng] cách/phương pháp [hành động] [đối tượng/vấn đề] hiệu quả. Bài viết bao gồm [điểm nổi bật 1], [điểm nổi bật 2] và bí quyết từ chuyên gia. Cập nhật [năm]!`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Khám phá 15 phương pháp tăng năng suất làm việc tại nhà hiệu quả. Bài viết bao gồm kỹ thuật quản lý thời gian, công cụ số hóa và bí quyết từ chuyên gia năng suất. Cập nhật 2025!"</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">2. Mẫu Bài Xu Hướng</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Cập nhật xu hướng [ngành/lĩnh vực] [năm] mới nhất với [điểm nổi bật 1], [điểm nổi bật 2] và [điểm nổi bật 3]. Bài viết phân tích chi tiết từ các chuyên gia hàng đầu và gợi ý áp dụng thực tế.`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Cập nhật xu hướng marketing số 2025 mới nhất với AI cá nhân hóa, video ngắn và marketing không cookie. Bài viết phân tích chi tiết từ các chuyên gia hàng đầu và gợi ý áp dụng thực tế."</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">3. Mẫu Bài Review</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Đánh giá chi tiết về [sản phẩm/dịch vụ] với [ưu điểm chính], [đặc điểm nổi bật] và [lợi ích]. Bài viết dựa trên trải nghiệm thực tế và phân tích chuyên sâu từ chuyên gia.`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Đánh giá chi tiết về phần mềm Trello với giao diện trực quan, tính năng tự động hóa và khả năng tích hợp. Bài viết dựa trên trải nghiệm thực tế và phân tích chuyên sâu từ chuyên gia quản lý dự án."</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">4. Mẫu Bài So Sánh</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`So sánh toàn diện giữa [đối tượng A] và [đối tượng B] dựa trên [tiêu chí 1], [tiêu chí 2] và [tiêu chí 3]. Tìm hiểu lựa chọn phù hợp nhất cho nhu cầu của bạn.`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "So sánh toàn diện giữa WordPress và Shopify dựa trên chi phí, tính linh hoạt và khả năng mở rộng. Tìm hiểu lựa chọn phù hợp nhất cho nhu cầu của doanh nghiệp bạn."</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">5. Mẫu Bài Giải Quyết Vấn Đề</h3>
            <pre className="bg-gray-100 p-4 rounded mb-3 overflow-x-auto">
              <code>{`Gặp khó khăn với [vấn đề]? Khám phá [số lượng] giải pháp hiệu quả được chứng minh giúp [lợi ích chính]. Bài viết bao gồm hướng dẫn từng bước và lời khuyên từ chuyên gia.`}</code>
            </pre>
            <p className="text-gray-700">Ví dụ: "Gặp khó khăn với xung đột nơi công sở? Khám phá 7 giải pháp hiệu quả được chứng minh giúp cải thiện môi trường làm việc. Bài viết bao gồm hướng dẫn từng bước và lời khuyên từ chuyên gia tâm lý."</p>
          </div>
        </div>
      </div>
    );
  } else if (section === 'rules') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Quy Tắc Tối Ưu Meta Description</h1>
        
        <p className="mb-6">
          Để tối ưu Meta Description theo thuật toán Google 2025 và AI Search, bạn cần tuân thủ các quy tắc sau:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Quy Tắc Tối Ưu Meta Description</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">1</span>
              <div>
                <p className="font-medium">Giới hạn độ dài: 150-155 ký tự</p>
                <p className="text-gray-600 mt-1">Google thường hiển thị khoảng 150-155 ký tự trong kết quả tìm kiếm. Meta description quá dài sẽ bị cắt và hiển thị dấu "..."</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">2</span>
              <div>
                <p className="font-medium">Đưa từ khóa chính vào đầu description</p>
                <p className="text-gray-600 mt-1">Từ khóa xuất hiện ở đầu meta description được nhấn mạnh trong kết quả tìm kiếm và tăng tỷ lệ click</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">3</span>
              <div>
                <p className="font-medium">Tóm tắt nội dung chính của bài viết</p>
                <p className="text-gray-600 mt-1">Meta description phải phản ánh chính xác nội dung của trang, không gây hiểu lầm</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">4</span>
              <div>
                <p className="font-medium">Nhấn mạnh giá trị và lợi ích cho người đọc</p>
                <p className="text-gray-600 mt-1">Nêu rõ người đọc sẽ nhận được gì khi click vào kết quả tìm kiếm của bạn</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">5</span>
              <div>
                <p className="font-medium">Thêm call-to-action nhẹ nhàng</p>
                <p className="text-gray-600 mt-1">Khuyến khích người dùng click nhưng không quá phô trương hoặc gây áp lực</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">6</span>
              <div>
                <p className="font-medium">Tạo tính độc đáo để tăng tỷ lệ click (CTR)</p>
                <p className="text-gray-600 mt-1">Meta description phải nổi bật và khác biệt so với các kết quả tìm kiếm khác</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">7</span>
              <div>
                <p className="font-medium">Sử dụng ngôn ngữ tự nhiên, tránh spam từ khóa</p>
                <p className="text-gray-600 mt-1">AI Search của Google 2025 phát hiện và phạt các meta description nhồi nhét từ khóa</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý về AI Search:</h3>
          <p>Thuật toán AI Search của Google 2025 có khả năng hiểu ngữ cảnh và ngữ nghĩa của meta description. Nó sẽ đánh giá cao các meta description cung cấp thông tin hữu ích, chính xác và phù hợp với ý định tìm kiếm của người dùng.</p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Những điều cần tránh:</h3>
          <ul className="list-disc pl-6">
            <li>Nhồi nhét từ khóa (keyword stuffing)</li>
            <li>Sao chép nội dung từ các trang khác</li>
            <li>Sử dụng cùng một meta description cho nhiều trang</li>
            <li>Viết meta description quá ngắn hoặc quá dài</li>
            <li>Sử dụng từ ngữ gây hiểu lầm hoặc không liên quan đến nội dung</li>
          </ul>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Meta Description Chuẩn SEO</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Meta Description là đoạn mô tả ngắn xuất hiện dưới tiêu đề trong kết quả tìm kiếm. Mặc dù không trực tiếp ảnh hưởng đến thứ hạng SEO, nhưng nó có tác động lớn đến tỷ lệ click (CTR) và là yếu tố quan trọng trong việc tối ưu hóa trải nghiệm người dùng.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cấu Trúc Meta Description</h3>
            <p className="text-gray-600 mb-4">Cấu trúc meta description tối ưu và các thành phần cần có</p>
            <div className="mt-auto">
              <a href="/meta-description/cau-truc" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Mẫu Meta Description</h3>
            <p className="text-gray-600 mb-4">Các mẫu meta description cho nhiều loại bài viết khác nhau</p>
            <div className="mt-auto">
              <a href="/meta-description/mau-mo-ta" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Quy Tắc Tối Ưu</h3>
            <p className="text-gray-600 mb-4">Các quy tắc tối ưu meta description theo thuật toán mới nhất</p>
            <div className="mt-auto">
              <a href="/meta-description/quy-tac" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ meta description chuẩn SEO:</h3>
          <pre className="bg-white p-4 rounded border border-gray-200">
            <code>{`<meta name="description" content="Khám phá 15 phương pháp tăng năng suất làm việc tại nhà hiệu quả. Bài viết bao gồm kỹ thuật quản lý thời gian, công cụ số hóa và bí quyết từ chuyên gia năng suất. Cập nhật 2025!" />`}</code>
          </pre>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025, Google có thể hiển thị đoạn mô tả khác với meta description của bạn nếu thuật toán cho rằng đoạn đó phù hợp hơn với truy vấn tìm kiếm. Tuy nhiên, một meta description được tối ưu tốt vẫn có cơ hội cao hơn để được hiển thị.</p>
        </div>
      </div>
    );
  }
};

export default MetaDescriptionPage;
