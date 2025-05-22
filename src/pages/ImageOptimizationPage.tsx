import React from 'react';

interface ImageOptimizationPageProps {
  section?: string;
}

const ImageOptimizationPage: React.FC<ImageOptimizationPageProps> = ({ section }) => {
  if (section === 'rules') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Quy Tắc Tối Ưu Hình Ảnh</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Tối ưu hóa hình ảnh là một trong những yếu tố quan trọng trong SEO, ảnh hưởng đến tốc độ tải trang, trải nghiệm người dùng và khả năng hiển thị trên công cụ tìm kiếm hình ảnh. Dưới đây là các quy tắc tối ưu hình ảnh theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Tên File Hình Ảnh</h3>
            
            <p className="mb-4">Sử dụng từ khóa trong tên file, phân cách bằng dấu gạch ngang.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="text-base font-medium text-green-800 mb-2">Tốt</h4>
                <code className="text-sm block bg-white p-2 rounded">cach-tang-nang-suat-lam-viec-tai-nha-2025.jpg</code>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="text-base font-medium text-red-800 mb-2">Không tốt</h4>
                <code className="text-sm block bg-white p-2 rounded">IMG_12345.jpg</code>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Tên file có chứa từ khóa giúp Google hiểu nội dung của hình ảnh, cải thiện SEO hình ảnh và tăng cơ hội xuất hiện trong kết quả tìm kiếm hình ảnh.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Alt Text</h3>
            
            <p className="mb-4">Mô tả chính xác hình ảnh, bao gồm từ khóa một cách tự nhiên.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="text-base font-medium text-green-800 mb-2">Tốt</h4>
                <code className="text-sm block bg-white p-2 rounded">alt="Biểu đồ tăng năng suất làm việc tại nhà với 5 phương pháp hiệu quả 2025"</code>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="text-base font-medium text-red-800 mb-2">Không tốt</h4>
                <code className="text-sm block bg-white p-2 rounded">alt="Biểu đồ" hoặc alt="năng suất, làm việc, tại nhà, hiệu quả, 2025"</code>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Alt text giúp Google hiểu nội dung của hình ảnh, cải thiện khả năng tiếp cận cho người dùng khiếm thị và là yếu tố quan trọng trong thuật toán AI Search 2025.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Kích Thước và Định Dạng</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Kích thước</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tối ưu dưới 100KB, giữ chất lượng tốt</li>
                  <li>Sử dụng công cụ nén như TinyPNG, Squoosh</li>
                  <li>Cân bằng giữa chất lượng và kích thước file</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Định dạng</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>WebP:</strong> Ưu tiên sử dụng (hỗ trợ tốt, kích thước nhỏ)</li>
                  <li><strong>JPEG/JPG:</strong> Phù hợp cho hình ảnh có nhiều màu sắc</li>
                  <li><strong>PNG:</strong> Phù hợp cho hình ảnh cần độ trong suốt</li>
                  <li><strong>SVG:</strong> Lý tưởng cho biểu tượng, logo, đồ họa vector</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Hình ảnh được tối ưu kích thước và định dạng giúp tăng tốc độ tải trang, cải thiện trải nghiệm người dùng và là yếu tố xếp hạng quan trọng trong thuật toán Google 2025.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Responsive và Lazy Loading</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Responsive</h4>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  <code>{`<img src="image-800.webp" 
     srcset="image-400.webp 400w, 
             image-800.webp 800w, 
             image-1200.webp 1200w" 
     sizes="(max-width: 600px) 400px, 
            (max-width: 1200px) 800px, 
            1200px" 
     alt="Mô tả hình ảnh">`}</code>
                </pre>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Lazy Loading</h4>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  <code>{`<img src="image.webp" 
     alt="Mô tả hình ảnh" 
     loading="lazy">`}</code>
                </pre>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Hình ảnh responsive đảm bảo hiển thị tốt trên mọi thiết bị, trong khi lazy loading giúp tăng tốc độ tải trang ban đầu bằng cách chỉ tải hình ảnh khi người dùng cuộn đến vị trí của chúng.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, hình ảnh được tối ưu không chỉ cải thiện trải nghiệm người dùng mà còn là yếu tố quan trọng trong việc đánh giá chất lượng trang web. Google ngày càng có khả năng "hiểu" nội dung của hình ảnh và đánh giá mức độ liên quan của chúng với nội dung văn bản.</p>
        </div>
      </div>
    );
  } else if (section === 'placement') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Vị Trí Đặt Hình Ảnh</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Vị trí đặt hình ảnh trong bài viết có ảnh hưởng lớn đến trải nghiệm người dùng và SEO. Việc đặt hình ảnh ở vị trí phù hợp giúp minh họa nội dung hiệu quả, tăng khả năng đọc và giữ chân người dùng lâu hơn trên trang.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Hình Ảnh Chính (Hero Image)</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-1/2">
                <p className="mb-4">Đặt ngay dưới H1, trước đoạn mở đầu hoặc sau đoạn mở đầu ngắn.</p>
                
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Kích thước lớn, chiếm toàn bộ chiều rộng cột nội dung</li>
                  <li>Chất lượng cao, liên quan trực tiếp đến chủ đề chính</li>
                  <li>Tỷ lệ khuyến nghị: 16:9 hoặc 1.91:1 (1200x630px)</li>
                  <li>Không sử dụng loading="lazy" cho hero image</li>
                </ul>
                
                <p className="text-gray-700 text-sm">
                  <strong>Lý do:</strong> Hero image là ấn tượng đầu tiên của người đọc, giúp thu hút sự chú ý và thiết lập bối cảnh cho bài viết. Đây cũng là hình ảnh thường được hiển thị khi chia sẻ trên mạng xã hội.
                </p>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<h1>15 Phương Pháp Tăng Năng Suất Làm Việc Tại Nhà 2025</h1>

<img src="tang-nang-suat-lam-viec-tai-nha-2025.webp" 
     alt="Không gian làm việc tại nhà được tổ chức khoa học với ánh sáng tự nhiên" 
     width="1200" height="630" 
     loading="eager">

<p>Làm việc tại nhà đã trở thành xu hướng phổ biến trong thời đại số hóa, đặc biệt sau đại dịch COVID-19. Tuy nhiên, nhiều người vẫn gặp khó khăn trong việc duy trì năng suất khi làm việc trong môi trường gia đình...</p>`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Hình Ảnh Minh Họa Cho Mỗi Phần H2</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-1/2">
                <p className="mb-4">Mỗi phần H2 nên có ít nhất 1 hình ảnh minh họa liên quan trực tiếp đến nội dung phần đó.</p>
                
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Đặt hình ảnh sau 1-2 đoạn văn đầu tiên của phần H2</li>
                  <li>Kích thước vừa phải, không quá lớn (800x450px)</li>
                  <li>Sử dụng caption để bổ sung thông tin</li>
                  <li>Đảm bảo hình ảnh liên quan trực tiếp đến nội dung phần đó</li>
                </ul>
                
                <p className="text-gray-700 text-sm">
                  <strong>Lý do:</strong> Hình ảnh minh họa giúp chia nhỏ các khối văn bản dài, tăng khả năng đọc và giúp người đọc hiểu rõ hơn về nội dung. Thuật toán AI Search 2025 cũng đánh giá cao sự liên quan giữa hình ảnh và nội dung văn bản xung quanh.
                </p>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<h2>5 Phương Pháp Quản Lý Thời Gian Hiệu Quả</h2>

<p>Quản lý thời gian hiệu quả là yếu tố then chốt để tăng năng suất khi làm việc tại nhà. Dưới đây là 5 phương pháp đã được chứng minh hiệu quả.</p>

<figure>
  <img src="phuong-phap-quan-ly-thoi-gian-2025.webp" 
       alt="Biểu đồ so sánh hiệu quả của 5 phương pháp quản lý thời gian khi làm việc tại nhà" 
       width="800" height="450" 
       loading="lazy">
  <figcaption>Biểu đồ so sánh hiệu quả của các phương pháp quản lý thời gian. Nguồn: Nghiên cứu XYZ 2025</figcaption>
</figure>

<h3>Phương Pháp Pomodoro Cải Tiến</h3>

<p>Phương pháp Pomodoro truyền thống gồm 25 phút làm việc tập trung và 5 phút nghỉ ngơi. Tuy nhiên, phiên bản cải tiến năm 2025 đề xuất điều chỉnh thời gian làm việc theo đặc thù công việc và nhịp sinh học cá nhân.</p>`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Vị Trí Đặt Các Loại Hình Ảnh Đặc Biệt</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Infographics</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Đặt sau khi đã giới thiệu đầy đủ về chủ đề</li>
                  <li>Sử dụng để tóm tắt thông tin phức tạp</li>
                  <li>Kích thước lớn hơn hình ảnh thông thường</li>
                  <li>Tỷ lệ khuyến nghị: 1:2.5 (800x2000px)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Hình Ảnh "Before/After"</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Đặt trong phần kết quả hoặc minh họa cho bài hướng dẫn</li>
                  <li>Sử dụng slider hoặc đặt cạnh nhau để dễ so sánh</li>
                  <li>Đảm bảo cùng kích thước và góc chụp</li>
                  <li>Thêm chú thích rõ ràng cho mỗi hình</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Biểu Đồ và Đồ Thị</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Đặt ngay sau khi đề cập đến dữ liệu liên quan</li>
                  <li>Sử dụng cho dữ liệu số liệu, thống kê</li>
                  <li>Đảm bảo có tiêu đề, nhãn trục và chú thích rõ ràng</li>
                  <li>Sử dụng màu sắc tương phản để dễ đọc</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ảnh Chụp Màn Hình</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Đặt trong các bước hướng dẫn cụ thể</li>
                  <li>Thêm đánh dấu, mũi tên hoặc khoanh tròn vào điểm quan trọng</li>
                  <li>Sử dụng số thứ tự hoặc chú thích cho mỗi bước</li>
                  <li>Đảm bảo hình ảnh đủ rõ để đọc được văn bản</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Quy Tắc Xen Kẽ Hình Ảnh và Văn Bản</h3>
            
            <p className="mb-4">Xen kẽ hình ảnh và văn bản một cách hợp lý giúp tăng khả năng đọc và giữ chân người dùng.</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Không đặt quá 2 hình ảnh liên tiếp mà không có văn bản ở giữa</li>
              <li>Tránh các khối văn bản dài quá 300 từ mà không có hình ảnh</li>
              <li>Đặt hình ảnh gần với nội dung liên quan nhất</li>
              <li>Sử dụng hình ảnh để ngắt các phần nội dung phức tạp</li>
              <li>Đảm bảo tỷ lệ văn bản/hình ảnh hợp lý (khoảng 70/30)</li>
            </ul>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Xen kẽ hình ảnh và văn bản giúp tạo nhịp điệu đọc, giảm mệt mỏi cho người đọc và tăng thời gian dừng lại trên trang - một yếu tố quan trọng trong thuật toán Google 2025.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, vị trí đặt hình ảnh không chỉ ảnh hưởng đến trải nghiệm người dùng mà còn giúp Google hiểu mối quan hệ giữa hình ảnh và nội dung văn bản xung quanh. Hình ảnh đặt ở vị trí phù hợp, liên quan chặt chẽ với nội dung sẽ được đánh giá cao hơn.</p>
        </div>
      </div>
    );
  } else if (section === 'types') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Loại Hình Ảnh Nên Sử Dụng</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Lựa chọn đúng loại hình ảnh cho bài viết không chỉ giúp minh họa nội dung hiệu quả mà còn tăng giá trị SEO và trải nghiệm người dùng. Dưới đây là các loại hình ảnh nên sử dụng cho bài viết blog theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Hình Ảnh Chất Lượng Cao</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">Sử dụng hình ảnh chất lượng cao, liên quan trực tiếp đến nội dung là yếu tố quan trọng hàng đầu.</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Độ phân giải:</strong> Tối thiểu 72 dpi cho web</li>
                  <li><strong>Độ sắc nét:</strong> Hình ảnh rõ ràng, không bị mờ hoặc nhiễu</li>
                  <li><strong>Ánh sáng:</strong> Đủ sáng, có độ tương phản tốt</li>
                  <li><strong>Bố cục:</strong> Cân đối, tập trung vào chủ thể chính</li>
                  <li><strong>Nguồn:</strong> Sử dụng hình ảnh có bản quyền hoặc miễn phí từ các nguồn uy tín</li>
                </ul>
                
                <p className="text-gray-700 text-sm">
                  <strong>Lý do:</strong> Thuật toán AI Search của Google 2025 có khả năng đánh giá chất lượng hình ảnh và mức độ liên quan với nội dung. Hình ảnh chất lượng cao cũng cải thiện trải nghiệm người dùng và tăng thời gian dừng lại trên trang.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Nguồn hình ảnh chất lượng cao</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unsplash</li>
                    <li>Pexels</li>
                    <li>Pixabay</li>
                    <li>Shutterstock (trả phí)</li>
                    <li>Adobe Stock (trả phí)</li>
                    <li>Getty Images (trả phí)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Infographics</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">Infographics là công cụ hiệu quả để trình bày thông tin phức tạp một cách trực quan, dễ hiểu.</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Tóm tắt thông tin quan trọng:</strong> Chuyển đổi dữ liệu phức tạp thành hình ảnh dễ hiểu</li>
                  <li><strong>Quy trình từng bước:</strong> Minh họa các quy trình, hướng dẫn bằng hình ảnh và biểu tượng</li>
                  <li><strong>So sánh trực quan:</strong> Đối chiếu các lựa chọn, sản phẩm, phương pháp</li>
                  <li><strong>Timeline:</strong> Hiển thị lịch sử, phát triển theo thời gian</li>
                  <li><strong>Mind map:</strong> Thể hiện mối quan hệ giữa các khái niệm, ý tưởng</li>
                </ul>
                
                <p className="text-gray-700 text-sm">
                  <strong>Lý do:</strong> Infographics có tỷ lệ chia sẻ cao, tăng thời gian dừng lại trên trang và cải thiện khả năng hiểu nội dung. Google 2025 đánh giá cao nội dung trình bày thông tin một cách trực quan, dễ tiếp cận.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Công cụ tạo infographics</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Canva</li>
                    <li>Piktochart</li>
                    <li>Visme</li>
                    <li>Infogram</li>
                    <li>Adobe Express</li>
                    <li>Venngage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Biểu Đồ và Đồ Thị</h3>
            
            <p className="mb-4">Biểu đồ và đồ thị giúp trình bày dữ liệu số liệu một cách trực quan, dễ hiểu.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Loại biểu đồ phù hợp với dữ liệu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Biểu đồ cột:</strong> So sánh giữa các nhóm</li>
                  <li><strong>Biểu đồ đường:</strong> Xu hướng theo thời gian</li>
                  <li><strong>Biểu đồ tròn:</strong> Tỷ lệ phần trăm của tổng thể</li>
                  <li><strong>Biểu đồ thanh:</strong> So sánh giữa các mục</li>
                  <li><strong>Biểu đồ radar:</strong> So sánh nhiều biến số</li>
                  <li><strong>Biểu đồ phân tán:</strong> Mối tương quan giữa các biến</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Quy tắc thiết kế biểu đồ hiệu quả</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng tiêu đề rõ ràng, mô tả chính xác nội dung</li>
                  <li>Thêm nhãn trục và đơn vị đo lường</li>
                  <li>Sử dụng màu sắc tương phản, dễ phân biệt</li>
                  <li>Thêm chú thích giải thích các yếu tố</li>
                  <li>Tránh quá nhiều thông tin trong một biểu đồ</li>
                  <li>Đảm bảo tỷ lệ chính xác, không gây hiểu lầm</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Biểu đồ và đồ thị giúp người đọc hiểu dữ liệu nhanh chóng, tăng độ tin cậy của nội dung và được đánh giá cao bởi thuật toán AI Search 2025 về khía cạnh cung cấp thông tin có giá trị.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Ảnh Chụp Màn Hình và Hướng Dẫn</h3>
            
            <p className="mb-4">Ảnh chụp màn hình là công cụ thiết yếu cho các bài viết hướng dẫn, tutorial và review.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Quy tắc chụp màn hình hiệu quả</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Chụp toàn bộ phần cần hướng dẫn, không cắt xén quan trọng</li>
                  <li>Sử dụng công cụ chụp màn hình có khả năng chỉnh sửa</li>
                  <li>Thêm đánh dấu, mũi tên, khoanh tròn vào điểm quan trọng</li>
                  <li>Đánh số thứ tự cho các bước hướng dẫn</li>
                  <li>Đảm bảo độ phân giải đủ cao để đọc được văn bản</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Loại hình ảnh hướng dẫn</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Ảnh chụp màn hình phần mềm/ứng dụng:</strong> Minh họa giao diện và chức năng</li>
                  <li><strong>Hướng dẫn từng bước có chú thích:</strong> Giải thích quy trình chi tiết</li>
                  <li><strong>Video demo ngắn chuyển thành GIF:</strong> Minh họa các thao tác động</li>
                  <li><strong>Hình ảnh so sánh giao diện:</strong> Trước/sau khi thực hiện thay đổi</li>
                  <li><strong>Sơ đồ quy trình:</strong> Tổng quan các bước thực hiện</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Ảnh chụp màn hình và hướng dẫn trực quan giúp người đọc dễ dàng làm theo, giảm tỷ lệ thoát trang và tăng thời gian dừng lại - các yếu tố được thuật toán Google 2025 đánh giá cao.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Hình Ảnh Sản Phẩm và Dịch Vụ</h3>
            
            <p className="mb-4">Hình ảnh sản phẩm và dịch vụ chất lượng cao là yếu tố then chốt cho các bài viết review, so sánh và giới thiệu.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Quy tắc chụp hình sản phẩm</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Chụp từ nhiều góc độ khác nhau (trước, sau, bên)</li>
                  <li>Sử dụng ánh sáng tự nhiên hoặc đèn studio chuyên dụng</li>
                  <li>Đặt sản phẩm trên nền đơn giản, không gây mất tập trung</li>
                  <li>Chụp cận cảnh các chi tiết, đặc điểm nổi bật</li>
                  <li>Sử dụng chế độ macro cho các chi tiết nhỏ</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Loại hình ảnh sản phẩm hiệu quả</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Hình ảnh sản phẩm từ nhiều góc độ:</strong> Giúp người đọc có cái nhìn toàn diện</li>
                  <li><strong>Hình ảnh sản phẩm trong môi trường sử dụng:</strong> Thể hiện cách sản phẩm hoạt động trong thực tế</li>
                  <li><strong>Hình ảnh chi tiết đặc điểm nổi bật:</strong> Nhấn mạnh các tính năng quan trọng</li>
                  <li><strong>Hình ảnh so sánh kích thước:</strong> Đặt cạnh vật dụng quen thuộc để người đọc dễ hình dung</li>
                  <li><strong>Hình ảnh unboxing:</strong> Thể hiện trải nghiệm mở hộp, phụ kiện đi kèm</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              <strong>Lý do:</strong> Hình ảnh sản phẩm chất lượng cao giúp người đọc đánh giá sản phẩm tốt hơn, tăng độ tin cậy của bài viết và cải thiện tỷ lệ chuyển đổi. Google 2025 đánh giá cao nội dung cung cấp thông tin đầy đủ, trực quan về sản phẩm.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, việc sử dụng đúng loại hình ảnh cho từng mục đích cụ thể không chỉ cải thiện trải nghiệm người dùng mà còn giúp Google hiểu rõ hơn về nội dung và mục đích của trang web. Hình ảnh độc đáo, chất lượng cao và liên quan trực tiếp đến nội dung sẽ được đánh giá cao hơn so với hình ảnh stock thông thường.</p>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tối Ưu Hóa Hình Ảnh</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Tối ưu hóa hình ảnh là một trong những yếu tố quan trọng trong SEO, ảnh hưởng đến tốc độ tải trang, trải nghiệm người dùng và khả năng hiển thị trên công cụ tìm kiếm hình ảnh. Trang này cung cấp hướng dẫn đầy đủ về cách tối ưu hình ảnh theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Quy Tắc Tối Ưu</h3>
            <p className="text-gray-600 mb-4">Các quy tắc tối ưu tên file, alt text, kích thước và định dạng hình ảnh</p>
            <div className="mt-auto">
              <a href="/hinh-anh/quy-tac" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Vị Trí Đặt Hình Ảnh</h3>
            <p className="text-gray-600 mb-4">Hướng dẫn vị trí đặt hình ảnh tối ưu trong bài viết</p>
            <div className="mt-auto">
              <a href="/hinh-anh/vi-tri" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Loại Hình Ảnh</h3>
            <p className="text-gray-600 mb-4">Các loại hình ảnh nên sử dụng cho bài viết blog</p>
            <div className="mt-auto">
              <a href="/hinh-anh/loai-hinh-anh" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ tối ưu hình ảnh chuẩn SEO:</h3>
          <pre className="bg-white p-4 rounded border border-gray-200">
            <code>{`<figure>
  <img src="tang-nang-suat-lam-viec-tai-nha-2025.webp" 
       alt="Biểu đồ so sánh năng suất làm việc tại nhà và tại văn phòng giai đoạn 2023-2025" 
       width="800" height="450" 
       loading="lazy">
  <figcaption>Biểu đồ so sánh năng suất làm việc tại nhà và tại văn phòng. Nguồn: Nghiên cứu XYZ 2025</figcaption>
</figure>`}</code>
          </pre>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, hình ảnh được tối ưu không chỉ cải thiện trải nghiệm người dùng mà còn là yếu tố quan trọng trong việc đánh giá chất lượng trang web. Google ngày càng có khả năng "hiểu" nội dung của hình ảnh và đánh giá mức độ liên quan của chúng với nội dung văn bản.</p>
        </div>
      </div>
    );
  }
};

export default ImageOptimizationPage;
