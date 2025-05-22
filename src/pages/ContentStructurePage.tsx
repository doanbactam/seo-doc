import React from 'react';

interface ContentStructurePageProps {
  section?: string;
}

const ContentStructurePage: React.FC<ContentStructurePageProps> = ({ section }) => {
  if (section === 'paragraphs') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Đoạn Văn Tối Ưu</h1>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-medium">Cấu trúc đoạn văn tối ưu cho SEO:</p>
          <ul className="mt-4 space-y-2">
            <li><strong>Độ dài đoạn văn:</strong> 3-5 câu (tối đa 150 từ)</li>
            <li><strong>Độ dài câu:</strong> 15-20 từ trung bình</li>
            <li><strong>Tỷ lệ từ khóa:</strong> 1-2% (tự nhiên, không spam)</li>
            <li><strong>Readability score:</strong> 60-70 (thang điểm Flesch Reading Ease)</li>
          </ul>
        </div>
        
        <p className="mb-4">
          Cấu trúc đoạn văn là yếu tố quan trọng trong việc tối ưu nội dung cho SEO và trải nghiệm người dùng. Một đoạn văn được cấu trúc tốt không chỉ giúp người đọc dễ dàng tiếp thu thông tin mà còn giúp thuật toán Google 2025 và AI Search hiểu rõ hơn về nội dung của bài viết.
        </p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Độ dài đoạn văn</h3>
        
        <p className="mb-4">
          Theo nghiên cứu mới nhất, đoạn văn tối ưu cho SEO nên có độ dài từ 3-5 câu, tương đương khoảng 100-150 từ. Đoạn văn quá dài (trên 200 từ) có thể khiến người đọc mất tập trung, trong khi đoạn văn quá ngắn (1-2 câu) có thể không cung cấp đủ thông tin.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="text-lg font-medium text-green-800 mb-3">Đoạn văn tốt</h4>
            <p className="text-gray-700">
              Cấu trúc đoạn văn tối ưu giúp tăng khả năng đọc và hiểu của người dùng. Mỗi đoạn nên tập trung vào một ý chính và có độ dài vừa phải, khoảng 3-5 câu. Điều này giúp người đọc dễ dàng nắm bắt thông tin và không cảm thấy quá tải. Thuật toán Google 2025 cũng đánh giá cao các đoạn văn có cấu trúc rõ ràng và dễ đọc.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="text-lg font-medium text-red-800 mb-3">Đoạn văn không tốt</h4>
            <p className="text-gray-700">
              Đoạn văn quá dài, chứa nhiều ý không liên quan và câu phức tạp sẽ khiến người đọc khó theo dõi và dễ bỏ qua. Thuật toán Google 2025 và AI Search có thể đánh giá thấp các trang có đoạn văn dài, khó đọc và thiếu cấu trúc rõ ràng. Việc nhồi nhét từ khóa vào đoạn văn một cách không tự nhiên cũng bị phạt nặng. Ngoài ra, đoạn văn không có khoảng cách giữa các ý, thiếu transition words và không có sự liên kết logic giữa các câu sẽ làm giảm trải nghiệm người dùng và ảnh hưởng tiêu cực đến thứ hạng SEO của trang web.
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Độ dài câu</h3>
        
        <p className="mb-4">
          Câu văn trong đoạn nên có độ dài trung bình từ 15-20 từ. Câu quá dài (trên 30 từ) có thể khó hiểu, trong khi câu quá ngắn có thể làm văn bản thiếu sự liên kết. Nên kết hợp câu ngắn và câu dài để tạo nhịp điệu cho bài viết.
        </p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Tỷ lệ từ khóa</h3>
        
        <p className="mb-4">
          Tỷ lệ từ khóa trong đoạn văn nên duy trì ở mức 1-2%, đảm bảo sự tự nhiên và không spam. Thuật toán Google 2025 và AI Search có khả năng phát hiện việc nhồi nhét từ khóa và sẽ phạt nặng các trang vi phạm.
        </p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Readability score</h3>
        
        <p className="mb-4">
          Chỉ số Flesch Reading Ease đo lường khả năng đọc của văn bản, với thang điểm từ 0-100. Đoạn văn tối ưu cho SEO nên có chỉ số này ở mức 60-70, tương đương với trình độ đọc hiểu của học sinh trung học. Điều này đảm bảo nội dung dễ hiểu với đa số người đọc.
        </p>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, cấu trúc đoạn văn không chỉ ảnh hưởng đến trải nghiệm người dùng mà còn là yếu tố quan trọng trong việc đánh giá chất lượng nội dung. Đoạn văn cần phải dễ đọc, cung cấp thông tin hữu ích và có cấu trúc logic.</p>
        </div>
      </div>
    );
  } else if (section === 'elements') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Các Yếu Tố Cần Có Trong Nội Dung</h1>
        
        <p className="mb-6">
          Để tối ưu nội dung theo thuật toán Google 2025 và AI Search, bài viết cần bao gồm các yếu tố cấu trúc quan trọng sau đây:
        </p>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Đoạn Mở Đầu</h3>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Giới thiệu chủ đề và từ khóa chính trong 150 từ đầu tiên</li>
              <li>Nêu rõ giá trị/lợi ích mà bài viết mang lại</li>
              <li>Tạo hook thu hút người đọc tiếp tục</li>
              <li>Xác định vấn đề mà bài viết sẽ giải quyết</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Ví dụ:</strong> "Tối ưu hóa website là yếu tố quan trọng để tăng thứ hạng trên Google và thu hút nhiều khách hàng tiềm năng hơn. Tuy nhiên, với sự thay đổi liên tục của thuật toán, nhiều doanh nghiệp gặp khó khăn trong việc cập nhật chiến lược SEO. Trong bài viết này, chúng tôi sẽ chia sẻ 10 kỹ thuật tối ưu hóa website mới nhất năm 2025, giúp bạn vượt qua đối thủ và đạt thứ hạng cao trên kết quả tìm kiếm."
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Phần Thân Bài</h3>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mỗi đoạn tập trung vào một ý chính</li>
              <li>Sử dụng bullet points và numbered lists để tăng khả năng đọc</li>
              <li>Thêm ví dụ cụ thể, số liệu, dẫn chứng</li>
              <li>Sử dụng transition words (tuy nhiên, bên cạnh đó, ngoài ra...)</li>
              <li>Đảm bảo mỗi H2, H3 có ít nhất 300 từ nội dung</li>
              <li>Sử dụng các định dạng nhấn mạnh (in đậm, in nghiêng) cho từ khóa quan trọng</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Ví dụ:</strong> "Kỹ thuật tối ưu hóa on-page là nền tảng của mọi chiến lược SEO hiệu quả. <strong>Nghiên cứu mới nhất từ Semrush</strong> cho thấy các trang web có cấu trúc nội dung tối ưu có thể tăng lưu lượng tìm kiếm tự nhiên lên đến 43%. Dưới đây là những yếu tố on-page quan trọng nhất cần tối ưu:
                <br /><br />
                • Tiêu đề META chứa từ khóa chính và có độ dài 50-60 ký tự<br />
                • Meta description hấp dẫn với call-to-action rõ ràng<br />
                • Cấu trúc URL ngắn gọn, chứa từ khóa chính<br />
                • Cấu trúc heading logic (H1, H2, H3) với từ khóa liên quan
                <br /><br />
                <em>Tuy nhiên</em>, việc tối ưu quá mức có thể dẫn đến hình phạt từ Google. <em>Bên cạnh đó</em>, thuật toán AI Search 2025 đặc biệt chú trọng vào trải nghiệm người dùng và giá trị nội dung hơn là các yếu tố kỹ thuật đơn thuần."
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. FAQ (Câu Hỏi Thường Gặp)</h3>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sử dụng schema markup cho FAQ</li>
              <li>Tập trung vào các câu hỏi thực tế từ người dùng</li>
              <li>Trả lời ngắn gọn, đầy đủ (50-100 từ/câu trả lời)</li>
              <li>Bao gồm từ khóa dạng câu hỏi (what, how, why...)</li>
              <li>Đảm bảo câu hỏi phản ánh đúng ý định tìm kiếm của người dùng</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Ví dụ:</strong>
                <br /><br />
                <strong>Q: Làm thế nào để biết website của tôi cần tối ưu những gì?</strong><br />
                A: Bạn có thể sử dụng các công cụ phân tích SEO như Semrush, Ahrefs hoặc Google Search Console để xác định các vấn đề cần cải thiện. Những công cụ này sẽ cung cấp báo cáo chi tiết về tốc độ trang, cấu trúc nội dung, backlinks và các yếu tố kỹ thuật khác ảnh hưởng đến thứ hạng SEO của bạn.
                <br /><br />
                <strong>Q: Tối ưu hóa website mất bao lâu để thấy kết quả?</strong><br />
                A: Thời gian để thấy kết quả từ việc tối ưu hóa website thường từ 3-6 tháng, tùy thuộc vào mức độ cạnh tranh của từ khóa và ngành nghề. Các thay đổi kỹ thuật có thể thấy kết quả nhanh hơn (2-4 tuần), trong khi các chiến lược xây dựng nội dung và backlinks cần thời gian dài hơn để phát huy hiệu quả.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. Kết Luận</h3>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Tóm tắt các điểm chính của bài viết</li>
              <li>Nhắc lại giá trị/lợi ích</li>
              <li>Thêm call-to-action nhẹ nhàng</li>
              <li>Đề cập lại từ khóa chính một cách tự nhiên</li>
              <li>Gợi ý các bước tiếp theo hoặc tài nguyên bổ sung</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Ví dụ:</strong> "Tối ưu hóa website là một quá trình liên tục đòi hỏi sự kiên nhẫn và cập nhật thường xuyên. Trong bài viết này, chúng tôi đã chia sẻ 10 kỹ thuật tối ưu hóa website hiệu quả nhất năm 2025, từ việc cải thiện cấu trúc nội dung, tối ưu hóa hình ảnh đến việc tăng tốc độ tải trang và xây dựng backlinks chất lượng. Bằng cách áp dụng những kỹ thuật này, bạn sẽ cải thiện đáng kể thứ hạng SEO và thu hút nhiều khách hàng tiềm năng hơn.
                <br /><br />
                Hãy bắt đầu bằng việc đánh giá website của bạn với các công cụ phân tích SEO, xác định các vấn đề ưu tiên và lên kế hoạch cải thiện từng bước. Nếu bạn cần hỗ trợ thêm, hãy tham khảo hướng dẫn chi tiết về từng kỹ thuật trong thư viện tài nguyên SEO của chúng tôi."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, cấu trúc nội dung không chỉ ảnh hưởng đến trải nghiệm người dùng mà còn là yếu tố quan trọng trong việc đánh giá chất lượng trang web. Nội dung cần phải toàn diện, cung cấp giá trị thực sự cho người đọc và được tổ chức một cách logic.</p>
        </div>
      </div>
    );
  } else if (section === 'eeat') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Các Yếu Tố Tăng Cường E-E-A-T</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) là bộ tiêu chí quan trọng mà Google sử dụng để đánh giá chất lượng nội dung. Với thuật toán Google 2025 và AI Search, E-E-A-T đóng vai trò then chốt trong việc xác định thứ hạng của trang web, đặc biệt là đối với các trang thuộc lĩnh vực YMYL (Your Money Your Life).
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Hiểu về E-E-A-T</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">E - Experience (Kinh Nghiệm)</h3>
            <p className="text-gray-700">
              Yếu tố mới được thêm vào năm 2022, nhấn mạnh tầm quan trọng của kinh nghiệm thực tế với chủ đề. Nội dung viết từ góc độ người đã trải nghiệm trực tiếp được đánh giá cao hơn.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-green-700">E - Expertise (Chuyên Môn)</h3>
            <p className="text-gray-700">
              Thể hiện kiến thức chuyên sâu về lĩnh vực. Nội dung được viết bởi chuyên gia hoặc người có kiến thức chuyên môn sẽ được đánh giá cao hơn.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">A - Authoritativeness (Thẩm Quyền)</h3>
            <p className="text-gray-700">
              Thể hiện vị thế, uy tín và sự công nhận trong ngành. Trang web và tác giả có thẩm quyền cao khi được nhiều nguồn uy tín trích dẫn và liên kết đến.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-red-700">T - Trustworthiness (Độ Tin Cậy)</h3>
            <p className="text-gray-700">
              Thể hiện mức độ đáng tin cậy của thông tin. Nội dung chính xác, trung thực, minh bạch và được dẫn chứng từ nguồn đáng tin cậy sẽ được đánh giá cao.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-6">Cách Tăng Cường E-E-A-T Trong Nội Dung</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Thêm thông tin tác giả có chuyên môn về lĩnh vực</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tạo trang tiểu sử tác giả chi tiết với thông tin về bằng cấp, chứng chỉ, kinh nghiệm</li>
                  <li>Thêm ảnh đại diện chuyên nghiệp của tác giả</li>
                  <li>Liên kết đến các bài báo, nghiên cứu, hoặc dự án mà tác giả đã tham gia</li>
                  <li>Thêm liên kết đến hồ sơ LinkedIn hoặc trang web cá nhân của tác giả</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Dẫn nguồn từ các nghiên cứu, báo cáo uy tín</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trích dẫn và liên kết đến các nghiên cứu học thuật, báo cáo từ tổ chức uy tín</li>
                  <li>Sử dụng số liệu, thống kê từ nguồn đáng tin cậy và cập nhật</li>
                  <li>Thêm chú thích nguồn cho mọi dữ liệu và thông tin quan trọng</li>
                  <li>Tạo danh sách tài liệu tham khảo ở cuối bài viết</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Cập nhật nội dung thường xuyên</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Thêm ngày xuất bản và ngày cập nhật rõ ràng (ví dụ: "Cập nhật: Tháng X/2025")</li>
                  <li>Xem xét và cập nhật các bài viết quan trọng ít nhất 2 lần/năm</li>
                  <li>Thêm thông tin mới, xóa thông tin lỗi thời</li>
                  <li>Ghi chú về những thay đổi quan trọng trong bài viết</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. Thêm ý kiến chuyên gia trong ngành</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Phỏng vấn và trích dẫn ý kiến từ chuyên gia có uy tín trong ngành</li>
                  <li>Thêm thông tin về chuyên gia (chức danh, công ty, thành tựu)</li>
                  <li>Sử dụng trích dẫn trực tiếp và gián tiếp từ chuyên gia</li>
                  <li>Liên kết đến hồ sơ hoặc website của chuyên gia nếu có thể</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">5. Sử dụng dữ liệu thực tế, số liệu cụ thể</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng biểu đồ, đồ thị để minh họa dữ liệu</li>
                  <li>Cung cấp số liệu cụ thể thay vì nhận định chung chung</li>
                  <li>So sánh dữ liệu từ nhiều nguồn khác nhau</li>
                  <li>Giải thích ý nghĩa của số liệu trong ngữ cảnh bài viết</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">6. Trích dẫn nguồn thông tin đáng tin cậy</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng định dạng trích dẫn chuẩn (APA, MLA, Chicago)</li>
                  <li>Liên kết đến nguồn gốc của thông tin</li>
                  <li>Ưu tiên nguồn học thuật, chính phủ, tổ chức phi lợi nhuận uy tín</li>
                  <li>Tránh trích dẫn từ các nguồn không rõ ràng hoặc thiếu uy tín</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">7. Thể hiện kinh nghiệm thực tế với chủ đề</h3>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded mr-3 mt-1">Cách làm</div>
              <div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Chia sẻ câu chuyện và trải nghiệm cá nhân liên quan đến chủ đề</li>
                  <li>Thêm hình ảnh, video thực tế minh họa cho kinh nghiệm</li>
                  <li>Cung cấp các mẹo, thủ thuật dựa trên kinh nghiệm thực tế</li>
                  <li>Thảo luận về những thách thức và cách vượt qua từ góc độ người đã trải nghiệm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, E-E-A-T đóng vai trò quan trọng hơn bao giờ hết, đặc biệt là yếu tố Experience (Kinh nghiệm). Nội dung thể hiện kinh nghiệm thực tế, được viết bởi người có chuyên môn và có độ tin cậy cao sẽ được xếp hạng cao hơn trong kết quả tìm kiếm.</p>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cấu Trúc Nội Dung Chuẩn SEO</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Cấu trúc nội dung là yếu tố quan trọng trong việc tối ưu hóa bài viết cho SEO và trải nghiệm người dùng. Trang này cung cấp hướng dẫn đầy đủ về cách tạo cấu trúc nội dung chuẩn SEO theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cấu Trúc Đoạn Văn</h3>
            <p className="text-gray-600 mb-4">Hướng dẫn tối ưu độ dài đoạn văn, câu và tỷ lệ từ khóa</p>
            <div className="mt-auto">
              <a href="/noi-dung/doan-van" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Yếu Tố Cần Có</h3>
            <p className="text-gray-600 mb-4">Các yếu tố cần có trong đoạn mở đầu, thân bài, FAQ và kết luận</p>
            <div className="mt-auto">
              <a href="/noi-dung/yeu-to" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">E-E-A-T</h3>
            <p className="text-gray-600 mb-4">Các yếu tố tăng cường Experience, Expertise, Authoritativeness, Trustworthiness</p>
            <div className="mt-auto">
              <a href="/noi-dung/e-e-a-t" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ cấu trúc đoạn văn chuẩn SEO:</h3>
          <div className="bg-white p-4 rounded border border-gray-200">
            <p>
              Cấu trúc nội dung tối ưu giúp tăng khả năng đọc và hiểu của người dùng. Mỗi đoạn nên tập trung vào một ý chính và có độ dài vừa phải, khoảng 3-5 câu. Điều này giúp người đọc dễ dàng nắm bắt thông tin và không cảm thấy quá tải. Thuật toán Google 2025 cũng đánh giá cao các đoạn văn có cấu trúc rõ ràng và dễ đọc.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, cấu trúc nội dung không chỉ ảnh hưởng đến trải nghiệm người dùng mà còn là yếu tố quan trọng trong việc đánh giá chất lượng trang web. Nội dung cần phải toàn diện, cung cấp giá trị thực sự cho người đọc và được tổ chức một cách logic.</p>
        </div>
      </div>
    );
  }
};

export default ContentStructurePage;
