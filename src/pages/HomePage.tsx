import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-6">Hướng Dẫn SEO Toàn Diện 2025</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-lg">
          Chào mừng bạn đến với hướng dẫn SEO toàn diện theo thuật toán Google 2025 và AI Search. Tài liệu này tổng hợp các nghiên cứu từ Semrush, Ahrefs, Moz và các nền tảng SEO hàng đầu, cung cấp cho bạn các chiến lược tối ưu hóa mới nhất.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Các Phần Chính</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Tiêu đề META</h3>
          <p className="text-gray-600 mb-4">Hướng dẫn tối ưu tiêu đề META theo thuật toán Google 2025 và AI Search</p>
          <div className="mt-auto">
            <Link to="/title-tag" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Meta Description</h3>
          <p className="text-gray-600 mb-4">Cách viết meta description hiệu quả, thu hút click và tối ưu cho AI</p>
          <div className="mt-auto">
            <Link to="/meta-description" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Cấu trúc Heading</h3>
          <p className="text-gray-600 mb-4">Tối ưu cấu trúc H1, H2, H3 cho SEO và trải nghiệm người dùng</p>
          <div className="mt-auto">
            <Link to="/heading-structure" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Cấu trúc nội dung</h3>
          <p className="text-gray-600 mb-4">Hướng dẫn tổ chức nội dung, đoạn văn và tối ưu tính dễ đọc</p>
          <div className="mt-auto">
            <Link to="/content-structure" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Tối ưu hình ảnh</h3>
          <p className="text-gray-600 mb-4">Chiến lược tối ưu hình ảnh cho SEO và tốc độ tải trang</p>
          <div className="mt-auto">
            <Link to="/image-optimization" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">AI Search & SGE</h3>
          <p className="text-gray-600 mb-4">Tối ưu cho AI Search và SGE (Search Generative Experience)</p>
          <div className="mt-auto">
            <Link to="/ai-search" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Tối ưu liên kết</h3>
          <p className="text-gray-600 mb-4">Chiến lược tối ưu liên kết nội bộ và liên kết ngoài</p>
          <div className="mt-auto">
            <Link to="/link-optimization" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Social Meta Tags</h3>
          <p className="text-gray-600 mb-4">Tối ưu hiển thị khi chia sẻ trên mạng xã hội</p>
          <div className="mt-auto">
            <Link to="/social-meta" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Schema Markup</h3>
          <p className="text-gray-600 mb-4">Hướng dẫn triển khai Schema Markup cho rich snippets</p>
          <div className="mt-auto">
            <Link to="/schema-markup" className="text-blue-600 hover:underline">Xem chi tiết →</Link>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4">Thuật Toán Google 2025 & AI Search</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <p className="mb-4">
          Thuật toán Google 2025 và AI Search đánh dấu bước chuyển mình quan trọng trong cách Google hiểu và đánh giá nội dung. Thay vì chỉ dựa vào từ khóa và backlink, Google giờ đây sử dụng AI để hiểu ngữ cảnh, ngữ nghĩa và giá trị thực sự của nội dung.
        </p>
        
        <p className="mb-4">
          Các yếu tố quan trọng trong thuật toán Google 2025:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness):</strong> Bổ sung yếu tố "Experience" (Kinh nghiệm) vào bộ tiêu chí E-A-T truyền thống</li>
          <li><strong>AI Search:</strong> Sử dụng AI để hiểu nội dung sâu hơn, vượt ra ngoài từ khóa đơn thuần</li>
          <li><strong>SGE (Search Generative Experience):</strong> Tạo tóm tắt AI từ nhiều nguồn ngay trên trang kết quả tìm kiếm</li>
          <li><strong>Helpful Content:</strong> Đánh giá cao nội dung hữu ích, toàn diện, đáp ứng nhu cầu người dùng</li>
          <li><strong>Page Experience:</strong> Tập trung vào trải nghiệm người dùng, tốc độ tải trang, tương tác</li>
        </ul>
        
        <p>
          Hướng dẫn này cung cấp các chiến lược tối ưu hóa phù hợp với thuật toán mới nhất, giúp trang web của bạn không chỉ xếp hạng tốt trong kết quả tìm kiếm truyền thống mà còn xuất hiện trong SGE và các tính năng AI mới của Google.
        </p>
      </div>
      
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
        <p>Tài liệu này được tổng hợp từ các nguồn uy tín như Semrush, Ahrefs, Moz và cập nhật theo thuật toán mới nhất của Google 2025 và AI. Các chiến lược và hướng dẫn được thiết kế để áp dụng cho mọi ngành nghề, giúp trang web của bạn đạt hiệu quả SEO tối ưu trong kỷ nguyên AI Search.</p>
      </div>
    </div>
  );
};

export default HomePage;
