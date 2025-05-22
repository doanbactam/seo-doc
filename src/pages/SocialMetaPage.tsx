import React from 'react';

interface SocialMetaPageProps {
  section?: string;
}

const SocialMetaPage: React.FC<SocialMetaPageProps> = ({ section }) => {
  if (section === 'structure') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Social Meta Tags</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Social Meta Tags là các thẻ meta đặc biệt giúp kiểm soát cách nội dung của bạn hiển thị khi được chia sẻ trên các nền tảng mạng xã hội. Việc tối ưu các thẻ này không chỉ cải thiện tỷ lệ click mà còn gián tiếp hỗ trợ SEO thông qua các tín hiệu xã hội.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Các Loại Social Meta Tags</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Open Graph (OG) Tags</h3>
            
            <p className="mb-4">
              Open Graph là giao thức được phát triển bởi Facebook, nhưng hiện được sử dụng bởi nhiều nền tảng khác như LinkedIn, Pinterest và Twitter (khi không có Twitter Cards).
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Cấu trúc cơ bản:</h4>
              <pre className="text-sm bg-white p-3 rounded overflow-x-auto">
                <code>{`<meta property="og:title" content="Tiêu đề hấp dẫn cho mạng xã hội" />
<meta property="og:description" content="Mô tả ngắn gọn, hấp dẫn về nội dung trang (55-200 ký tự)" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Tên Website" />`}</code>
              </pre>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-medium mb-2">Các thẻ OG quan trọng:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>og:title:</strong> Tiêu đề khi chia sẻ (70 ký tự)</li>
                  <li><strong>og:description:</strong> Mô tả khi chia sẻ (55-200 ký tự)</li>
                  <li><strong>og:image:</strong> URL hình ảnh khi chia sẻ</li>
                  <li><strong>og:url:</strong> URL chính thức của trang</li>
                  <li><strong>og:type:</strong> Loại nội dung (website, article, product...)</li>
                  <li><strong>og:site_name:</strong> Tên website</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Thẻ OG bổ sung cho bài viết:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>og:article:published_time:</strong> Thời gian xuất bản</li>
                  <li><strong>og:article:modified_time:</strong> Thời gian cập nhật</li>
                  <li><strong>og:article:author:</strong> Tác giả bài viết</li>
                  <li><strong>og:article:section:</strong> Chuyên mục của bài viết</li>
                  <li><strong>og:article:tag:</strong> Thẻ tag của bài viết</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Twitter Cards</h3>
            
            <p className="mb-4">
              Twitter Cards là các thẻ meta đặc biệt cho Twitter, giúp tạo ra các bài đăng phong phú hơn với hình ảnh, tiêu đề và mô tả.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Cấu trúc cơ bản:</h4>
              <pre className="text-sm bg-white p-3 rounded overflow-x-auto">
                <code>{`<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@tên_tài_khoản" />
<meta name="twitter:creator" content="@tên_tác_giả" />
<meta name="twitter:title" content="Tiêu đề hấp dẫn cho Twitter" />
<meta name="twitter:description" content="Mô tả ngắn gọn, hấp dẫn về nội dung trang (55-200 ký tự)" />
<meta name="twitter:image" content="https://example.com/image.jpg" />`}</code>
              </pre>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-medium mb-2">Các thẻ Twitter Cards quan trọng:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>twitter:card:</strong> Loại card (summary, summary_large_image, app, player)</li>
                  <li><strong>twitter:site:</strong> Username của tài khoản Twitter chính thức</li>
                  <li><strong>twitter:creator:</strong> Username của tác giả</li>
                  <li><strong>twitter:title:</strong> Tiêu đề khi chia sẻ (70 ký tự)</li>
                  <li><strong>twitter:description:</strong> Mô tả khi chia sẻ (55-200 ký tự)</li>
                  <li><strong>twitter:image:</strong> URL hình ảnh khi chia sẻ</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Các loại Twitter Cards:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>summary:</strong> Card nhỏ với hình ảnh vuông, tiêu đề và mô tả</li>
                  <li><strong>summary_large_image:</strong> Card lớn với hình ảnh ngang, tiêu đề và mô tả</li>
                  <li><strong>app:</strong> Card cho ứng dụng di động</li>
                  <li><strong>player:</strong> Card cho nội dung video hoặc âm thanh</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Pinterest Rich Pins</h3>
            
            <p className="mb-4">
              Pinterest Rich Pins là các pin được làm phong phú với thông tin bổ sung từ website của bạn, giúp tăng tương tác và lượt click.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Cấu trúc cơ bản:</h4>
              <p className="text-sm mb-2">Pinterest sử dụng Open Graph tags và schema.org markup:</p>
              <pre className="text-sm bg-white p-3 rounded overflow-x-auto">
                <code>{`<!-- Open Graph Tags -->
<meta property="og:title" content="Tiêu đề hấp dẫn cho Pinterest" />
<meta property="og:description" content="Mô tả ngắn gọn, hấp dẫn về nội dung trang" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/page" />

<!-- Schema.org cho Article -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tiêu đề bài viết",
  "image": "https://example.com/image.jpg",
  "author": {
    "@type": "Person",
    "name": "Tên tác giả"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tên Website",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.jpg"
    }
  },
  "datePublished": "2025-01-01T08:00:00+08:00",
  "dateModified": "2025-01-02T09:00:00+08:00"
}
</script>`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-2">Các loại Rich Pins:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Article Pins:</strong> Hiển thị tiêu đề, mô tả và tác giả</li>
                <li><strong>Product Pins:</strong> Hiển thị giá, tình trạng còn hàng và thông tin sản phẩm</li>
                <li><strong>Recipe Pins:</strong> Hiển thị thời gian nấu, nguyên liệu và khẩu phần</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. LinkedIn Post Inspector</h3>
            
            <p className="mb-4">
              LinkedIn sử dụng Open Graph tags để hiển thị nội dung khi được chia sẻ trên nền tảng của họ.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Cấu trúc cơ bản:</h4>
              <pre className="text-sm bg-white p-3 rounded overflow-x-auto">
                <code>{`<meta property="og:title" content="Tiêu đề chuyên nghiệp cho LinkedIn" />
<meta property="og:description" content="Mô tả ngắn gọn, chuyên nghiệp về nội dung trang" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2025-01-01T08:00:00+08:00" />
<meta property="article:author" content="Tên tác giả" />`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-2">Lưu ý cho LinkedIn:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sử dụng hình ảnh tỷ lệ 1.91:1 (1200x627px) để hiển thị tốt nhất</li>
                <li>Tiêu đề nên ngắn gọn, chuyên nghiệp và liên quan đến nội dung</li>
                <li>Mô tả nên tập trung vào giá trị chuyên môn và lợi ích</li>
                <li>Sử dụng og:type "article" cho bài viết chuyên môn</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Kích Thước Hình Ảnh Tối Ưu Cho Social Media</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Nền tảng</th>
                <th className="py-2 px-4 border-b text-left">Kích thước tối ưu</th>
                <th className="py-2 px-4 border-b text-left">Tỷ lệ</th>
                <th className="py-2 px-4 border-b text-left">Dung lượng tối đa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Facebook</td>
                <td className="py-2 px-4 border-b">1200 x 630 pixels</td>
                <td className="py-2 px-4 border-b">1.91:1</td>
                <td className="py-2 px-4 border-b">8MB</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Twitter</td>
                <td className="py-2 px-4 border-b">1200 x 675 pixels</td>
                <td className="py-2 px-4 border-b">16:9</td>
                <td className="py-2 px-4 border-b">5MB</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">LinkedIn</td>
                <td className="py-2 px-4 border-b">1200 x 627 pixels</td>
                <td className="py-2 px-4 border-b">1.91:1</td>
                <td className="py-2 px-4 border-b">5MB</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Pinterest</td>
                <td className="py-2 px-4 border-b">1000 x 1500 pixels</td>
                <td className="py-2 px-4 border-b">2:3</td>
                <td className="py-2 px-4 border-b">10MB</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Instagram</td>
                <td className="py-2 px-4 border-b">1080 x 1080 pixels</td>
                <td className="py-2 px-4 border-b">1:1</td>
                <td className="py-2 px-4 border-b">30MB</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, các tín hiệu xã hội (social signals) từ việc chia sẻ nội dung trên mạng xã hội có thể gián tiếp ảnh hưởng đến SEO. Tối ưu Social Meta Tags không chỉ cải thiện tỷ lệ click từ mạng xã hội mà còn tăng khả năng tiếp cận và uy tín của trang web, từ đó gián tiếp hỗ trợ SEO.</p>
        </div>
      </div>
    );
  } else if (section === 'rules') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Quy Tắc Tối Ưu Social Meta Tags</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Tối ưu Social Meta Tags là một phần quan trọng trong chiến lược SEO và tiếp thị nội dung. Dưới đây là các quy tắc tối ưu Social Meta Tags theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Tối Ưu Tiêu Đề (Title)</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">
                  Tiêu đề trong Social Meta Tags là yếu tố đầu tiên người dùng nhìn thấy khi nội dung được chia sẻ trên mạng xã hội.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Độ dài tối ưu:</strong> 60-70 ký tự (có thể khác nhau tùy nền tảng)</li>
                  <li><strong>Bao gồm từ khóa chính:</strong> Đặt từ khóa chính ở đầu tiêu đề nếu có thể</li>
                  <li><strong>Tạo sự tò mò:</strong> Sử dụng tiêu đề gây tò mò nhưng không clickbait</li>
                  <li><strong>Thêm số liệu:</strong> Sử dụng số liệu cụ thể để tăng tỷ lệ click</li>
                  <li><strong>Khác biệt với tiêu đề SEO:</strong> Có thể khác với thẻ title nhưng vẫn liên quan</li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800 mb-1">Tốt:</p>
                    <p className="text-sm text-gray-700">"15 Chiến Lược SEO Mới Nhất 2025 Tăng Lưu Lượng 200%"</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-800 mb-1">Không tốt:</p>
                    <p className="text-sm text-gray-700">"Chiến Lược SEO | Tối Ưu Hóa Công Cụ Tìm Kiếm | Tăng Lưu Lượng | Cải Thiện Thứ Hạng | 2025"</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800 mb-1">Tốt:</p>
                    <p className="text-sm text-gray-700">"Vitamin D: 7 Lợi Ích Sức Khỏe Được Khoa Học Chứng Minh"</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-800 mb-1">Không tốt:</p>
                    <p className="text-sm text-gray-700">"Bạn Sẽ Không Tin Điều Xảy Ra Khi Bổ Sung Vitamin D!!!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Tối Ưu Mô Tả (Description)</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">
                  Mô tả trong Social Meta Tags cung cấp thêm thông tin về nội dung và thuyết phục người dùng click vào liên kết.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Độ dài tối ưu:</strong> 150-200 ký tự (tùy thuộc vào nền tảng)</li>
                  <li><strong>Bổ sung cho tiêu đề:</strong> Cung cấp thông tin bổ sung, không lặp lại tiêu đề</li>
                  <li><strong>Tạo giá trị:</strong> Nêu rõ giá trị/lợi ích người đọc sẽ nhận được</li>
                  <li><strong>Thêm call-to-action:</strong> Khuyến khích người dùng click nhẹ nhàng</li>
                  <li><strong>Sử dụng từ khóa phụ:</strong> Thêm từ khóa phụ một cách tự nhiên</li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800 mb-1">Tốt:</p>
                    <p className="text-sm text-gray-700">"Khám phá 15 chiến lược SEO mới nhất năm 2025 đã giúp hơn 500 doanh nghiệp tăng lưu lượng truy cập tự nhiên lên 200%. Bao gồm hướng dẫn từng bước và công cụ miễn phí."</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-800 mb-1">Không tốt:</p>
                    <p className="text-sm text-gray-700">"15 Chiến Lược SEO Mới Nhất 2025 Tăng Lưu Lượng 200%. Đọc ngay! Đọc ngay! Đọc ngay! Đọc ngay! Đọc ngay! Đọc ngay! Đọc ngay! Đọc ngay!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Tối Ưu Hình Ảnh (Image)</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="md:w-2/3">
                <p className="mb-4">
                  Hình ảnh trong Social Meta Tags là yếu tố thu hút sự chú ý mạnh mẽ nhất, ảnh hưởng lớn đến tỷ lệ click.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Kích thước tối ưu:</strong> Sử dụng kích thước phù hợp với từng nền tảng</li>
                  <li><strong>Chất lượng cao:</strong> Hình ảnh sắc nét, không bị mờ hoặc bị nén quá mức</li>
                  <li><strong>Liên quan đến nội dung:</strong> Hình ảnh phải phản ánh chính xác nội dung</li>
                  <li><strong>Tương phản cao:</strong> Sử dụng màu sắc tương phản để nổi bật</li>
                  <li><strong>Thêm văn bản:</strong> Có thể thêm văn bản ngắn gọn trên hình ảnh</li>
                  <li><strong>Tránh quá nhiều chi tiết:</strong> Hình ảnh đơn giản, dễ hiểu khi thu nhỏ</li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Công cụ tạo hình ảnh social:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Canva:</strong> Có sẵn template cho mọi nền tảng</li>
                    <li><strong>Adobe Express:</strong> Công cụ chuyên nghiệp</li>
                    <li><strong>Snappa:</strong> Dễ sử dụng, nhiều template</li>
                    <li><strong>Crello:</strong> Thay thế tốt cho Canva</li>
                    <li><strong>Pablo by Buffer:</strong> Đơn giản, nhanh chóng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. Tối Ưu Theo Từng Nền Tảng</h3>
            
            <p className="mb-4">
              Mỗi nền tảng mạng xã hội có đặc thù riêng, việc tối ưu theo từng nền tảng sẽ mang lại hiệu quả cao hơn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Facebook & Instagram:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng hình ảnh tỷ lệ 1.91:1 (1200x630px)</li>
                  <li>Giữ văn bản trên hình ảnh dưới 20% diện tích</li>
                  <li>Tiêu đề ngắn gọn, gây tò mò (5-10 từ)</li>
                  <li>Mô tả cung cấp giá trị rõ ràng</li>
                  <li>Thêm og:locale nếu có nhiều phiên bản ngôn ngữ</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Twitter:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng summary_large_image cho hiển thị tốt nhất</li>
                  <li>Hình ảnh tỷ lệ 16:9 (1200x675px)</li>
                  <li>Tiêu đề ngắn, trực tiếp (70 ký tự)</li>
                  <li>Mô tả súc tích, có call-to-action</li>
                  <li>Thêm twitter:site và twitter:creator</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">LinkedIn:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng ngôn ngữ chuyên nghiệp</li>
                  <li>Hình ảnh tỷ lệ 1.91:1 (1200x627px)</li>
                  <li>Tiêu đề tập trung vào giá trị chuyên môn</li>
                  <li>Mô tả nêu rõ lợi ích cho sự nghiệp/kinh doanh</li>
                  <li>Thêm thông tin tác giả và chức danh</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Pinterest:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng hình ảnh dọc tỷ lệ 2:3 (1000x1500px)</li>
                  <li>Tiêu đề mô tả rõ nội dung hình ảnh</li>
                  <li>Sử dụng Rich Pins cho bài viết, sản phẩm, công thức</li>
                  <li>Thêm schema.org markup để hỗ trợ Rich Pins</li>
                  <li>Tối ưu alt text cho hình ảnh</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">5. Kiểm Tra và Xác Thực</h3>
            
            <p className="mb-4">
              Kiểm tra và xác thực Social Meta Tags trước khi xuất bản giúp đảm bảo hiển thị đúng trên các nền tảng mạng xã hội.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Công cụ kiểm tra:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Facebook Sharing Debugger:</strong> Kiểm tra và làm mới cache cho Facebook</li>
                  <li><strong>Twitter Card Validator:</strong> Xác thực Twitter Cards</li>
                  <li><strong>LinkedIn Post Inspector:</strong> Kiểm tra hiển thị trên LinkedIn</li>
                  <li><strong>Pinterest Rich Pins Validator:</strong> Xác thực Rich Pins</li>
                  <li><strong>Open Graph Check:</strong> Kiểm tra tất cả thẻ Open Graph</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Quy trình kiểm tra:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Kiểm tra trước khi xuất bản nội dung</li>
                  <li>Làm mới cache sau khi cập nhật meta tags</li>
                  <li>Kiểm tra trên tất cả nền tảng mạng xã hội chính</li>
                  <li>Xác minh hiển thị trên cả desktop và mobile</li>
                  <li>Sửa lỗi và kiểm tra lại sau khi chỉnh sửa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, mặc dù Social Meta Tags không trực tiếp ảnh hưởng đến thứ hạng SEO, nhưng chúng gián tiếp tác động thông qua việc tăng lượng truy cập, thời gian dừng lại trên trang và tỷ lệ tương tác. Ngoài ra, các tín hiệu xã hội (social signals) ngày càng được Google coi trọng như một yếu tố đánh giá chất lượng và độ tin cậy của nội dung.</p>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Social Meta Tags</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Social Meta Tags là các thẻ meta đặc biệt giúp kiểm soát cách nội dung của bạn hiển thị khi được chia sẻ trên các nền tảng mạng xã hội. Trang này cung cấp hướng dẫn đầy đủ về cách tối ưu Social Meta Tags theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cấu Trúc Social Meta Tags</h3>
            <p className="text-gray-600 mb-4">Hướng dẫn chi tiết về cấu trúc Open Graph, Twitter Cards và các loại social meta tags khác</p>
            <div className="mt-auto">
              <a href="/social-meta/cau-truc" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Quy Tắc Tối Ưu</h3>
            <p className="text-gray-600 mb-4">Các quy tắc tối ưu social meta tags cho từng nền tảng mạng xã hội</p>
            <div className="mt-auto">
              <a href="/social-meta/quy-tac" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ social meta tags chuẩn:</h3>
          <pre className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
            <code>{`<!-- Open Graph Tags -->
<meta property="og:title" content="15 Chiến Lược SEO Mới Nhất 2025 Tăng Lưu Lượng 200%" />
<meta property="og:description" content="Khám phá 15 chiến lược SEO mới nhất năm 2025 đã giúp hơn 500 doanh nghiệp tăng lưu lượng truy cập tự nhiên lên 200%. Bao gồm hướng dẫn từng bước và công cụ miễn phí." />
<meta property="og:image" content="https://example.com/images/seo-strategies-2025.jpg" />
<meta property="og:url" content="https://example.com/seo-strategies-2025" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="SEO Guide" />
<meta property="article:published_time" content="2025-01-15T08:00:00+07:00" />
<meta property="article:author" content="Nguyễn Văn A" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@seoguide" />
<meta name="twitter:creator" content="@nguyenvana" />
<meta name="twitter:title" content="15 Chiến Lược SEO Mới Nhất 2025 Tăng Lưu Lượng 200%" />
<meta name="twitter:description" content="Khám phá 15 chiến lược SEO mới nhất năm 2025 đã giúp hơn 500 doanh nghiệp tăng lưu lượng truy cập tự nhiên lên 200%. Bao gồm hướng dẫn từng bước và công cụ miễn phí." />
<meta name="twitter:image" content="https://example.com/images/seo-strategies-2025.jpg" />`}</code>
          </pre>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, mặc dù Social Meta Tags không trực tiếp ảnh hưởng đến thứ hạng SEO, nhưng chúng gián tiếp tác động thông qua việc tăng lượng truy cập, thời gian dừng lại trên trang và tỷ lệ tương tác. Ngoài ra, các tín hiệu xã hội (social signals) ngày càng được Google coi trọng như một yếu tố đánh giá chất lượng và độ tin cậy của nội dung.</p>
        </div>
      </div>
    );
  }
};

export default SocialMetaPage;
