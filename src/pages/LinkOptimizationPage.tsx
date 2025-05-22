import React from 'react';

interface LinkOptimizationPageProps {
  section?: string;
}

const LinkOptimizationPage: React.FC<LinkOptimizationPageProps> = ({ section }) => {
  if (section === 'internal') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tối Ưu Liên Kết Nội Bộ</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Liên kết nội bộ (internal links) là các liên kết từ một trang đến trang khác trong cùng một website. Tối ưu liên kết nội bộ là một trong những yếu tố SEO quan trọng, giúp cải thiện cấu trúc website, phân phối giá trị liên kết và tăng thời gian người dùng dừng lại trên trang.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Lợi Ích Của Liên Kết Nội Bộ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Cải Thiện SEO</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Giúp Google khám phá và lập chỉ mục trang mới</li>
              <li>Phân phối giá trị liên kết (link juice) trong website</li>
              <li>Thiết lập mối quan hệ ngữ nghĩa giữa các trang</li>
              <li>Tăng thẩm quyền cho các trang quan trọng</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Cải Thiện UX</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Giúp người dùng điều hướng dễ dàng</li>
              <li>Giảm tỷ lệ thoát trang (bounce rate)</li>
              <li>Tăng thời gian dừng lại trên trang</li>
              <li>Cải thiện tỷ lệ chuyển đổi</li>
              <li>Tạo trải nghiệm khám phá nội dung liền mạch</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Cấu Trúc Website</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tạo cấu trúc phân cấp rõ ràng</li>
              <li>Nhóm các trang liên quan với nhau</li>
              <li>Làm nổi bật các trang quan trọng</li>
              <li>Tạo chủ đề và phân loại nội dung</li>
              <li>Cải thiện kiến trúc thông tin tổng thể</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-6">Chiến Lược Tối Ưu Liên Kết Nội Bộ</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Tạo Cấu Trúc Phân Cấp Rõ Ràng</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">
                  Cấu trúc phân cấp rõ ràng giúp Google và người dùng hiểu mối quan hệ giữa các trang trên website của bạn.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Cấu trúc kim tự tháp:</strong> Trang chủ ở trên cùng, liên kết đến các trang danh mục, mỗi trang danh mục liên kết đến các trang con</li>
                  <li><strong>Quy tắc 3 click:</strong> Người dùng có thể đến bất kỳ trang nào trên website trong tối đa 3 lần click</li>
                  <li><strong>Breadcrumbs:</strong> Hiển thị vị trí hiện tại của người dùng trong cấu trúc website</li>
                  <li><strong>Menu chính:</strong> Bao gồm các danh mục chính, có thể mở rộng để hiển thị danh mục con</li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Ví dụ cấu trúc phân cấp</h4>
                  <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                    <code>{`Trang chủ
├── Danh mục 1
│   ├── Bài viết 1.1
│   ├── Bài viết 1.2
│   └── Bài viết 1.3
├── Danh mục 2
│   ├── Bài viết 2.1
│   ├── Bài viết 2.2
│   └── Bài viết 2.3
└── Danh mục 3
    ├── Bài viết 3.1
    ├── Bài viết 3.2
    └── Bài viết 3.3`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Sử Dụng Anchor Text Tối Ưu</h3>
            
            <p className="mb-4">
              Anchor text (văn bản liên kết) là văn bản hiển thị dưới dạng liên kết. Anchor text tối ưu giúp Google hiểu nội dung của trang đích và cải thiện SEO.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Quy tắc tối ưu anchor text</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng từ khóa liên quan đến trang đích</li>
                  <li>Giữ anchor text ngắn gọn, súc tích (3-5 từ)</li>
                  <li>Đảm bảo anchor text mô tả chính xác nội dung trang đích</li>
                  <li>Tránh anchor text chung chung như "click here", "đọc thêm"</li>
                  <li>Đa dạng hóa anchor text, tránh lặp lại</li>
                  <li>Sử dụng từ khóa chính và từ khóa liên quan</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ anchor text tối ưu</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800 mb-1">Tốt:</p>
                    <p className="text-sm text-gray-700">"Tìm hiểu thêm về <a href="#" className="text-blue-600">cách tối ưu hóa hình ảnh</a> để cải thiện tốc độ tải trang."</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-800 mb-1">Không tốt:</p>
                    <p className="text-sm text-gray-700">"Để biết thêm về tối ưu hóa hình ảnh, <a href="#" className="text-blue-600">click here</a>."</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800 mb-1">Tốt:</p>
                    <p className="text-sm text-gray-700">"<a href="#" className="text-blue-600">Chiến lược xây dựng backlink 2025</a> giúp tăng thẩm quyền trang web."</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-800 mb-1">Không tốt:</p>
                    <p className="text-sm text-gray-700">"Chiến lược xây dựng backlink 2025 giúp tăng thẩm quyền trang web. <a href="#" className="text-blue-600">Đọc thêm</a>."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Tối Ưu Số Lượng Liên Kết</h3>
            
            <p className="mb-4">
              Số lượng liên kết nội bộ phù hợp giúp phân phối giá trị liên kết hiệu quả và cải thiện trải nghiệm người dùng.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Quy tắc số lượng liên kết</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Tổng số liên kết:</strong> 50-100 liên kết/trang (bao gồm cả liên kết nội bộ và ngoại)</li>
                  <li><strong>Liên kết nội bộ:</strong> 3-5 liên kết/1000 từ</li>
                  <li><strong>Phân bố đều:</strong> Đặt liên kết xuyên suốt nội dung, không dồn vào một khu vực</li>
                  <li><strong>Ưu tiên liên kết tự nhiên:</strong> Đặt liên kết trong ngữ cảnh phù hợp</li>
                  <li><strong>Liên kết hai chiều:</strong> Trang A liên kết đến trang B và ngược lại</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Vị trí đặt liên kết hiệu quả</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Đoạn văn đầu tiên:</strong> Đặt 1-2 liên kết đến trang quan trọng</li>
                  <li><strong>Trong nội dung chính:</strong> Đặt liên kết tự nhiên khi đề cập đến chủ đề liên quan</li>
                  <li><strong>Cuối mỗi phần:</strong> Đặt liên kết "Đọc thêm" hoặc "Tìm hiểu thêm"</li>
                  <li><strong>Phần "Bài viết liên quan":</strong> Hiển thị 3-5 bài viết liên quan ở cuối bài</li>
                  <li><strong>Sidebar:</strong> Hiển thị bài viết phổ biến hoặc bài viết mới</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. Sử Dụng Pillar Content và Topic Clusters</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">
                  Mô hình Pillar Content và Topic Clusters giúp tổ chức nội dung theo chủ đề, tăng thẩm quyền và cải thiện SEO.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Pillar Content (Nội dung trụ cột):</strong> Bài viết dài, toàn diện về một chủ đề rộng</li>
                  <li><strong>Topic Clusters (Cụm chủ đề):</strong> Các bài viết ngắn hơn, đi sâu vào các khía cạnh cụ thể của chủ đề</li>
                  <li><strong>Liên kết hai chiều:</strong> Pillar content liên kết đến tất cả cluster content và ngược lại</li>
                  <li><strong>Tạo thẩm quyền chủ đề:</strong> Giúp Google hiểu website của bạn là chuyên gia về chủ đề đó</li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Ví dụ mô hình Topic Clusters</h4>
                  <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                    <code>{`Pillar: SEO Toàn Diện 2025
├── Cluster: Tối ưu On-page
│   ├── Tiêu đề META
│   ├── Cấu trúc Heading
│   └── Tối ưu hình ảnh
├── Cluster: Tối ưu Off-page
│   ├── Xây dựng Backlink
│   ├── Social Signals
│   └── Brand Mentions
└── Cluster: Tối ưu Technical
    ├── Tốc độ trang
    ├── Mobile-friendly
    └── Schema Markup`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">5. Sửa Lỗi Liên Kết Đứt và Chuyển Hướng</h3>
            
            <p className="mb-4">
              Liên kết đứt (broken links) và chuyển hướng nhiều lần (redirect chains) ảnh hưởng tiêu cực đến SEO và trải nghiệm người dùng.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Kiểm tra và sửa lỗi liên kết</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng công cụ kiểm tra liên kết đứt (Screaming Frog, Semrush, Ahrefs)</li>
                  <li>Kiểm tra định kỳ hàng tháng hoặc khi cập nhật lớn</li>
                  <li>Sửa hoặc xóa các liên kết đứt</li>
                  <li>Tránh chuyển hướng nhiều lần (redirect chains)</li>
                  <li>Sử dụng liên kết tuyệt đối thay vì liên kết tương đối khi cần thiết</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Công cụ kiểm tra liên kết</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Screaming Frog:</strong> Công cụ crawl website toàn diện</li>
                    <li><strong>Semrush Site Audit:</strong> Kiểm tra và báo cáo lỗi liên kết</li>
                    <li><strong>Ahrefs Site Audit:</strong> Phát hiện liên kết đứt và chuyển hướng</li>
                    <li><strong>Google Search Console:</strong> Báo cáo lỗi crawl và liên kết</li>
                    <li><strong>Broken Link Checker:</strong> Plugin WordPress kiểm tra liên kết</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, liên kết nội bộ không chỉ giúp Google khám phá và lập chỉ mục trang web mà còn giúp xác định mối quan hệ ngữ nghĩa giữa các trang. Một chiến lược liên kết nội bộ tốt sẽ cải thiện đáng kể thứ hạng SEO và trải nghiệm người dùng.</p>
        </div>
      </div>
    );
  } else if (section === 'external') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tối Ưu Liên Kết Ngoài</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Liên kết ngoài (outbound links) là các liên kết từ trang web của bạn đến các trang web khác. Mặc dù nhiều người lo ngại việc liên kết ra ngoài có thể làm mất giá trị SEO, nhưng thực tế, liên kết ngoài chất lượng cao là một yếu tố quan trọng trong thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Lợi Ích Của Liên Kết Ngoài</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Tăng Độ Tin Cậy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Chứng minh nội dung dựa trên nghiên cứu</li>
              <li>Xây dựng uy tín với người đọc</li>
              <li>Tăng cường yếu tố E-E-A-T</li>
              <li>Thể hiện sự khách quan, trung thực</li>
              <li>Hỗ trợ các tuyên bố bằng dữ liệu</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Cải Thiện SEO</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tạo mối quan hệ ngữ nghĩa với các trang liên quan</li>
              <li>Giúp Google hiểu chủ đề của trang</li>
              <li>Tăng khả năng được liên kết ngược lại</li>
              <li>Cải thiện thứ hạng cho các từ khóa dài</li>
              <li>Tăng thời gian dừng lại trên trang</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Giá Trị Cho Người Đọc</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cung cấp thông tin bổ sung, chuyên sâu</li>
              <li>Giúp người đọc tìm hiểu thêm về chủ đề</li>
              <li>Tạo trải nghiệm đọc phong phú hơn</li>
              <li>Hỗ trợ người đọc xác minh thông tin</li>
              <li>Giới thiệu các nguồn tài nguyên có giá trị</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-6">Chiến Lược Tối Ưu Liên Kết Ngoài</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Chọn Nguồn Liên Kết Uy Tín</h3>
            
            <p className="mb-4">
              Chất lượng của các trang web bạn liên kết đến phản ánh chất lượng và độ tin cậy của trang web bạn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Tiêu chí chọn nguồn liên kết</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Thẩm quyền:</strong> Trang web có Domain Authority (DA) cao</li>
                  <li><strong>Liên quan:</strong> Nội dung liên quan đến chủ đề của bạn</li>
                  <li><strong>Cập nhật:</strong> Thông tin mới, được cập nhật thường xuyên</li>
                  <li><strong>Uy tín:</strong> Trang web được công nhận trong ngành</li>
                  <li><strong>Không spam:</strong> Trang web không có quá nhiều quảng cáo</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Nguồn liên kết uy tín theo ngành</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Tin tức:</strong> BBC, CNN, Reuters, AP</li>
                    <li><strong>Khoa học:</strong> Nature, Science, PubMed, Google Scholar</li>
                    <li><strong>Giáo dục:</strong> Các trang .edu, Khan Academy, Coursera</li>
                    <li><strong>Chính phủ:</strong> Các trang .gov, WHO, UN</li>
                    <li><strong>Công nghệ:</strong> TechCrunch, Wired, MIT Technology Review</li>
                    <li><strong>Marketing:</strong> HubSpot, Moz, Search Engine Journal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Tối Ưu Số Lượng Liên Kết Ngoài</h3>
            
            <p className="mb-4">
              Số lượng liên kết ngoài phù hợp giúp cân bằng giữa việc cung cấp giá trị cho người đọc và giữ người dùng ở lại trang web của bạn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Quy tắc số lượng liên kết ngoài</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Tỷ lệ tối ưu:</strong> 2-4 liên kết ngoài/1000 từ</li>
                  <li><strong>Cân bằng:</strong> Tỷ lệ liên kết nội bộ/ngoài khoảng 3:1</li>
                  <li><strong>Phân bố:</strong> Đặt liên kết xuyên suốt nội dung, không dồn vào một khu vực</li>
                  <li><strong>Đa dạng:</strong> Liên kết đến nhiều nguồn khác nhau, không chỉ một trang web</li>
                  <li><strong>Liên quan:</strong> Mỗi liên kết phải có mục đích cụ thể, bổ sung cho nội dung</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Vị trí đặt liên kết ngoài</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Khi trích dẫn số liệu, nghiên cứu:</strong> Liên kết đến nguồn gốc</li>
                  <li><strong>Khi đề cập đến khái niệm phức tạp:</strong> Liên kết đến giải thích chi tiết</li>
                  <li><strong>Khi đề cập đến công cụ, sản phẩm:</strong> Liên kết đến trang chính thức</li>
                  <li><strong>Phần "Tài liệu tham khảo":</strong> Liệt kê tất cả các nguồn ở cuối bài</li>
                  <li><strong>Phần "Đọc thêm":</strong> Gợi ý các nguồn bổ sung cho người đọc</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Sử Dụng Thuộc Tính Rel Phù Hợp</h3>
            
            <p className="mb-4">
              Thuộc tính rel trong thẻ liên kết giúp Google hiểu mối quan hệ giữa trang web của bạn và trang web bạn liên kết đến.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Các thuộc tính rel quan trọng</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>rel="nofollow":</strong> Không chuyển giá trị liên kết, sử dụng cho liên kết không đảm bảo</li>
                  <li><strong>rel="sponsored":</strong> Sử dụng cho liên kết quảng cáo, tài trợ</li>
                  <li><strong>rel="ugc":</strong> Sử dụng cho liên kết trong nội dung người dùng tạo (bình luận, diễn đàn)</li>
                  <li><strong>rel="noopener":</strong> Tăng bảo mật khi sử dụng target="_blank"</li>
                  <li><strong>rel="noreferrer":</strong> Không gửi thông tin referrer khi người dùng click vào liên kết</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ sử dụng thuộc tính rel</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Liên kết thông thường:</p>
                    <pre className="text-xs bg-white p-2 rounded overflow-x-auto">
                      <code>{`<a href="https://example.com/research">Nghiên cứu mới nhất</a>`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Liên kết tài trợ:</p>
                    <pre className="text-xs bg-white p-2 rounded overflow-x-auto">
                      <code>{`<a href="https://example.com/product" rel="sponsored">Sản phẩm khuyên dùng</a>`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Liên kết mở tab mới an toàn:</p>
                    <pre className="text-xs bg-white p-2 rounded overflow-x-auto">
                      <code>{`<a href="https://example.com" target="_blank" rel="noopener noreferrer">Trang web đối tác</a>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. Cập Nhật Liên Kết Thường Xuyên</h3>
            
            <p className="mb-4">
              Liên kết ngoài cần được kiểm tra và cập nhật thường xuyên để đảm bảo tính chính xác và giá trị.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Quy trình cập nhật liên kết</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Kiểm tra định kỳ:</strong> Kiểm tra tất cả liên kết ngoài 3-6 tháng/lần</li>
                  <li><strong>Sửa liên kết đứt:</strong> Thay thế hoặc xóa các liên kết không còn hoạt động</li>
                  <li><strong>Cập nhật nội dung:</strong> Thay thế liên kết cũ bằng nghiên cứu, dữ liệu mới hơn</li>
                  <li><strong>Kiểm tra chất lượng:</strong> Đánh giá lại uy tín của các trang web được liên kết</li>
                  <li><strong>Theo dõi thay đổi:</strong> Cập nhật khi trang đích thay đổi nội dung đáng kể</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Công cụ kiểm tra liên kết</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Screaming Frog:</strong> Kiểm tra tất cả liên kết ngoài</li>
                    <li><strong>Broken Link Checker:</strong> Plugin WordPress phát hiện liên kết đứt</li>
                    <li><strong>Ahrefs:</strong> Kiểm tra liên kết và đánh giá chất lượng trang đích</li>
                    <li><strong>SEMrush:</strong> Phân tích liên kết và báo cáo lỗi</li>
                    <li><strong>Google Search Console:</strong> Kiểm tra lỗi crawl liên quan đến liên kết</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">5. Tạo Giá Trị Thông Qua Liên Kết Ngoài</h3>
            
            <p className="mb-4">
              Liên kết ngoài nên được sử dụng có chiến lược để tạo giá trị tối đa cho người đọc và SEO.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tạo giá trị</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Liên kết đến nghiên cứu gốc:</strong> Tăng độ tin cậy của nội dung</li>
                  <li><strong>Liên kết đến nguồn dữ liệu:</strong> Hỗ trợ các tuyên bố bằng số liệu</li>
                  <li><strong>Liên kết đến định nghĩa:</strong> Giải thích các thuật ngữ phức tạp</li>
                  <li><strong>Liên kết đến hướng dẫn chi tiết:</strong> Mở rộng kiến thức cho người đọc</li>
                  <li><strong>Liên kết đến các quan điểm khác nhau:</strong> Thể hiện sự khách quan</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    "Theo <a href="#" className="text-blue-600">nghiên cứu mới nhất từ Đại học Harvard</a>, vitamin D đóng vai trò quan trọng trong việc tăng cường hệ miễn dịch. Nghiên cứu cho thấy những người có nồng độ vitamin D trong máu trên 30 ng/mL có nguy cơ mắc bệnh hô hấp thấp hơn 41% so với những người thiếu vitamin D."
                  </p>
                  <p className="text-sm text-gray-700 mt-3">
                    "Để tối ưu hóa website cho thuật toán AI Search, bạn cần hiểu rõ về <a href="#" className="text-blue-600">E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</a> - bộ tiêu chí đánh giá chất lượng nội dung của Google. Bạn cũng nên tham khảo <a href="#" className="text-blue-600">hướng dẫn chính thức từ Google</a> về cách cải thiện chất lượng trang web."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, liên kết ngoài chất lượng cao là một yếu tố quan trọng trong việc đánh giá độ tin cậy và thẩm quyền của trang web. Google xem việc liên kết đến các nguồn uy tín, liên quan là dấu hiệu của nội dung chất lượng cao và đáng tin cậy. Tuy nhiên, cần sử dụng liên kết ngoài một cách có chiến lược và đảm bảo chúng thực sự mang lại giá trị cho người đọc.</p>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tối Ưu Liên Kết</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Liên kết là một trong những yếu tố quan trọng trong SEO, ảnh hưởng đến cấu trúc website, thẩm quyền trang và trải nghiệm người dùng. Trang này cung cấp hướng dẫn đầy đủ về cách tối ưu liên kết nội bộ và liên kết ngoài theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Tối Ưu Liên Kết Nội Bộ</h3>
            <p className="text-gray-600 mb-4">Chiến lược tối ưu liên kết giữa các trang trong cùng một website</p>
            <div className="mt-auto">
              <a href="/lien-ket/noi-bo" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Tối Ưu Liên Kết Ngoài</h3>
            <p className="text-gray-600 mb-4">Hướng dẫn sử dụng liên kết đến các trang web khác một cách hiệu quả</p>
            <div className="mt-auto">
              <a href="/lien-ket/ngoai" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">So sánh liên kết nội bộ và liên kết ngoài:</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Đặc điểm</th>
                  <th className="py-2 px-4 border-b text-left">Liên kết nội bộ</th>
                  <th className="py-2 px-4 border-b text-left">Liên kết ngoài</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Định nghĩa</td>
                  <td className="py-2 px-4 border-b">Liên kết từ một trang đến trang khác trong cùng một website</td>
                  <td className="py-2 px-4 border-b">Liên kết từ trang web của bạn đến các trang web khác</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Mục đích chính</td>
                  <td className="py-2 px-4 border-b">Cải thiện cấu trúc website, phân phối giá trị liên kết</td>
                  <td className="py-2 px-4 border-b">Tăng độ tin cậy, cung cấp thông tin bổ sung</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Số lượng tối ưu</td>
                  <td className="py-2 px-4 border-b">3-5 liên kết/1000 từ</td>
                  <td className="py-2 px-4 border-b">2-4 liên kết/1000 từ</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Ảnh hưởng SEO</td>
                  <td className="py-2 px-4 border-b">Giúp Google khám phá và lập chỉ mục trang, phân phối giá trị liên kết</td>
                  <td className="py-2 px-4 border-b">Tăng độ tin cậy, thẩm quyền và yếu tố E-E-A-T</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, cả liên kết nội bộ và liên kết ngoài đều đóng vai trò quan trọng trong việc đánh giá chất lượng trang web. Một chiến lược liên kết tốt cần cân bằng giữa liên kết nội bộ và liên kết ngoài, đảm bảo mỗi liên kết đều mang lại giá trị cho người đọc và giúp Google hiểu rõ hơn về nội dung và mối quan hệ giữa các trang.</p>
        </div>
      </div>
    );
  }
};

export default LinkOptimizationPage;
