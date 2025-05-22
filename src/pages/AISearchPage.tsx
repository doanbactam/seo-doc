import React from 'react';

interface AISearchPageProps {
  section?: string;
}

const AISearchPage: React.FC<AISearchPageProps> = ({ section }) => {
  if (section === 'optimization') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tối Ưu Hóa Cho AI Search</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            AI Search là thế hệ công cụ tìm kiếm mới của Google, sử dụng trí tuệ nhân tạo để hiểu ngữ cảnh và ngữ nghĩa của nội dung sâu hơn. Tối ưu hóa cho AI Search đòi hỏi các chiến lược khác biệt so với SEO truyền thống.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Các Yếu Tố Tối Ưu Cho AI Search</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Nội Dung Toàn Diện và Chuyên Sâu</h3>
            
            <p className="mb-4">AI Search đánh giá cao nội dung toàn diện, trả lời đầy đủ các câu hỏi liên quan đến chủ đề.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bao quát toàn diện chủ đề, không bỏ sót khía cạnh quan trọng</li>
                  <li>Đi sâu vào chi tiết, cung cấp thông tin chuyên sâu</li>
                  <li>Trả lời các câu hỏi phụ liên quan đến chủ đề chính</li>
                  <li>Sử dụng các tiêu đề phụ để phân chia nội dung một cách logic</li>
                  <li>Cung cấp ví dụ cụ thể, nghiên cứu tình huống, dữ liệu thực tế</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Thay vì:</strong> "Protein là chất dinh dưỡng quan trọng cho cơ thể."
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Hãy viết:</strong> "Protein là chất dinh dưỡng thiết yếu đóng vai trò quan trọng trong việc xây dựng và phục hồi mô cơ, sản xuất enzyme và hormone, và hỗ trợ hệ miễn dịch. Người trưởng thành trung bình cần khoảng 0.8g protein/kg trọng lượng cơ thể mỗi ngày, nhưng nhu cầu có thể tăng lên đối với vận động viên (1.2-2.0g/kg) hoặc người đang phục hồi sau chấn thương (1.2-1.5g/kg)."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Cấu Trúc Nội Dung Dạng Câu Hỏi-Trả Lời</h3>
            
            <p className="mb-4">AI Search thường trích xuất thông tin dưới dạng câu hỏi-trả lời để hiển thị trong kết quả tìm kiếm.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng tiêu đề H2, H3 dưới dạng câu hỏi</li>
                  <li>Trả lời câu hỏi trực tiếp trong đoạn văn đầu tiên</li>
                  <li>Sử dụng schema markup FAQ</li>
                  <li>Bao gồm các câu hỏi thường gặp (FAQ) ở cuối bài viết</li>
                  <li>Sử dụng từ khóa dạng câu hỏi (what, how, why, when...)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Thay vì:</strong> "Lợi ích của vitamin C"
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Hãy viết:</strong> "Vitamin C có những lợi ích gì cho sức khỏe?"
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    "Vitamin C có nhiều lợi ích quan trọng cho sức khỏe, bao gồm tăng cường hệ miễn dịch, hỗ trợ sản xuất collagen, cải thiện hấp thu sắt, và bảo vệ tế bào khỏi tổn thương oxy hóa. Nghiên cứu gần đây cũng cho thấy vitamin C có thể giúp giảm thời gian và mức độ nghiêm trọng của cảm lạnh thông thường."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Ngôn Ngữ Tự Nhiên và Ngữ Cảnh</h3>
            
            <p className="mb-4">AI Search hiểu ngôn ngữ tự nhiên và ngữ cảnh tốt hơn các thuật toán trước đây.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Viết như đang nói chuyện với người thật, tự nhiên</li>
                  <li>Sử dụng từ đồng nghĩa, từ liên quan thay vì lặp lại từ khóa</li>
                  <li>Tập trung vào chủ đề và ngữ cảnh, không chỉ từ khóa đơn lẻ</li>
                  <li>Sử dụng các từ nối (transition words) để tạo sự liên kết</li>
                  <li>Đảm bảo nội dung mạch lạc, có cấu trúc logic</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Thay vì:</strong> "Giảm cân nhanh với chế độ ăn keto. Chế độ ăn keto giúp giảm cân. Chế độ ăn keto là phương pháp giảm cân hiệu quả."
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Hãy viết:</strong> "Chế độ ăn ketogenic (keto) có thể hỗ trợ giảm cân hiệu quả thông qua quá trình ketosis, khi cơ thể đốt cháy chất béo thay vì carbohydrate để tạo năng lượng. Phương pháp dinh dưỡng này, với hàm lượng chất béo cao và carb thấp, không chỉ giúp giảm cân mà còn có thể cải thiện các chỉ số sức khỏe khác như mức đường huyết và cholesterol."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. E-E-A-T và Độ Tin Cậy</h3>
            
            <p className="mb-4">AI Search đặc biệt chú trọng vào E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Thể hiện kinh nghiệm thực tế với chủ đề (Experience)</li>
                  <li>Chứng minh chuyên môn thông qua thông tin tác giả, bằng cấp (Expertise)</li>
                  <li>Xây dựng thẩm quyền qua backlinks từ nguồn uy tín (Authoritativeness)</li>
                  <li>Tăng độ tin cậy bằng dẫn chứng, trích dẫn nguồn (Trustworthiness)</li>
                  <li>Cập nhật nội dung thường xuyên với thông tin mới nhất</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Thay vì:</strong> "Vitamin D giúp tăng cường xương."
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Hãy viết:</strong> "Theo nghiên cứu được công bố trên Tạp chí Y học New England năm 2023, vitamin D đóng vai trò quan trọng trong việc hấp thu canxi và tăng cường sức khỏe xương. TS. Nguyễn Văn A, chuyên gia dinh dưỡng tại Bệnh viện XYZ, giải thích: 'Liều lượng vitamin D khuyến nghị hàng ngày là 600-800 IU đối với người trưởng thành, nhưng có thể cao hơn ở người cao tuổi hoặc người có nguy cơ thiếu hụt.'"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">5. Tối Ưu Hóa Cho Ý Định Tìm Kiếm</h3>
            
            <p className="mb-4">AI Search có khả năng hiểu ý định tìm kiếm (search intent) tốt hơn, phân biệt giữa thông tin, giao dịch, điều hướng.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Xác định rõ ý định tìm kiếm chính của từ khóa mục tiêu</li>
                  <li>Tạo nội dung phù hợp với ý định tìm kiếm cụ thể</li>
                  <li>Đáp ứng nhiều ý định tìm kiếm phụ trong cùng một bài viết</li>
                  <li>Sử dụng các tiêu đề phù hợp với ý định tìm kiếm</li>
                  <li>Cung cấp thông tin hữu ích ngay lập tức, không trì hoãn</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ theo ý định tìm kiếm</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-sm font-medium">Ý định thông tin:</p>
                    <p className="text-sm text-gray-700">"Vitamin C là gì và có những lợi ích gì cho sức khỏe? Bài viết này sẽ giải thích chi tiết về cấu trúc hóa học, cơ chế hoạt động và 10 lợi ích quan trọng của vitamin C được khoa học chứng minh."</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Ý định giao dịch:</p>
                    <p className="text-sm text-gray-700">"Top 10 sản phẩm vitamin C tốt nhất năm 2025 - So sánh chi tiết về thành phần, hiệu quả, giá cả và đánh giá từ chuyên gia. Bao gồm hướng dẫn chọn mua và link đến các nhà cung cấp uy tín."</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Ý định điều hướng:</p>
                    <p className="text-sm text-gray-700">"Danh sách đầy đủ các phòng khám dinh dưỡng uy tín tại Hà Nội, bao gồm địa chỉ, số điện thoại, giờ làm việc và đánh giá từ bệnh nhân. Bản đồ tương tác giúp bạn dễ dàng tìm phòng khám gần nhất."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Thuật toán AI Search của Google 2025 không chỉ tìm kiếm từ khóa mà còn "hiểu" nội dung và ngữ cảnh. Tối ưu hóa cho AI Search đòi hỏi tập trung vào việc cung cấp nội dung chất lượng cao, toàn diện và đáng tin cậy thay vì các kỹ thuật SEO kỹ thuật đơn thuần.</p>
        </div>
      </div>
    );
  } else if (section === 'sge') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Tối Ưu Hóa Cho SGE (Search Generative Experience)</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            SGE (Search Generative Experience) là tính năng AI mới của Google, tạo ra các tóm tắt được sinh bởi AI ngay trên trang kết quả tìm kiếm. Tối ưu hóa cho SGE đòi hỏi các chiến lược đặc biệt để nội dung của bạn được trích xuất và hiển thị trong các tóm tắt này.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Hiểu Về SGE</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">SGE Là Gì?</h3>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                SGE (Search Generative Experience) là tính năng AI của Google, tạo ra các tóm tắt được sinh bởi AI ngay trên trang kết quả tìm kiếm, dựa trên thông tin từ nhiều trang web khác nhau.
              </p>
              
              <p className="mb-4">
                Khi người dùng thực hiện tìm kiếm, SGE có thể hiển thị một đoạn tóm tắt AI ở đầu trang kết quả, cung cấp câu trả lời trực tiếp cho truy vấn mà không cần nhấp vào bất kỳ trang web nào.
              </p>
              
              <p>
                SGE khác với featured snippets truyền thống ở chỗ nó không chỉ trích xuất nội dung từ một trang web duy nhất mà tổng hợp thông tin từ nhiều nguồn khác nhau để tạo ra câu trả lời toàn diện hơn.
              </p>
            </div>
            
            <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-2">Đặc điểm chính của SGE:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tóm tắt AI được tạo ra từ nhiều nguồn</li>
                <li>Trả lời trực tiếp trên trang kết quả tìm kiếm</li>
                <li>Bao gồm các liên kết đến nguồn thông tin</li>
                <li>Có thể mở rộng để hiển thị thêm thông tin</li>
                <li>Hỗ trợ tương tác theo hội thoại</li>
                <li>Tích hợp hình ảnh và video liên quan</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Chiến Lược Tối Ưu Cho SGE</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. Cấu Trúc Nội Dung Dễ Trích Xuất</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng đoạn văn ngắn, súc tích (2-3 câu)</li>
                  <li>Tạo các đoạn tóm tắt rõ ràng ở đầu mỗi phần</li>
                  <li>Sử dụng cấu trúc danh sách (bullet points, numbered lists)</li>
                  <li>Tạo các định nghĩa rõ ràng cho các khái niệm quan trọng</li>
                  <li>Sử dụng bảng để trình bày dữ liệu so sánh</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Định nghĩa rõ ràng:</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Trí tuệ nhân tạo (AI) là khả năng của máy tính hoặc robot được điều khiển bởi máy tính để thực hiện các nhiệm vụ thường đòi hỏi trí thông minh của con người. AI bao gồm các công nghệ như machine learning, deep learning, xử lý ngôn ngữ tự nhiên và thị giác máy tính."
                  </p>
                  
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Tóm tắt súc tích:</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Vitamin D có 5 lợi ích chính cho sức khỏe: tăng cường xương, hỗ trợ hệ miễn dịch, cải thiện sức khỏe tim mạch, giảm nguy cơ trầm cảm và hỗ trợ kiểm soát cân nặng. Thiếu vitamin D có thể dẫn đến loãng xương, suy giảm miễn dịch và các vấn đề sức khỏe khác."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Tối Ưu Hóa Cho Truy Vấn Dạng Câu Hỏi</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nghiên cứu các câu hỏi thường gặp trong ngành của bạn</li>
                  <li>Tạo phần FAQ toàn diện với schema markup</li>
                  <li>Trả lời trực tiếp câu hỏi trong 1-2 câu đầu tiên</li>
                  <li>Bao gồm các câu hỏi dạng "what", "how", "why", "when"</li>
                  <li>Sử dụng tiêu đề H2, H3 dưới dạng câu hỏi</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Tiêu đề H2:</strong> "Vitamin D là gì và có những lợi ích gì?"
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Vitamin D là một vitamin tan trong chất béo có vai trò thiết yếu trong việc hấp thu canxi và duy trì sức khỏe xương. Nó có 5 lợi ích chính: tăng cường xương, hỗ trợ hệ miễn dịch, cải thiện sức khỏe tim mạch, giảm nguy cơ trầm cảm và hỗ trợ kiểm soát cân nặng."
                  </p>
                  
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Tiêu đề H2:</strong> "Làm thế nào để tăng vitamin D tự nhiên?"
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Để tăng vitamin D tự nhiên, bạn có thể thực hiện 4 cách: tiếp xúc với ánh nắng mặt trời 10-30 phút mỗi ngày, bổ sung thực phẩm giàu vitamin D như cá béo và lòng đỏ trứng, uống sữa và nước cam được bổ sung vitamin D, và sử dụng nấm được chiếu tia UV."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Tăng Cường Độ Tin Cậy và Chuyên Môn</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trích dẫn nguồn uy tín, nghiên cứu khoa học</li>
                  <li>Thêm thông tin tác giả có chuyên môn</li>
                  <li>Cập nhật nội dung thường xuyên với thông tin mới nhất</li>
                  <li>Sử dụng dữ liệu, số liệu thống kê cụ thể</li>
                  <li>Thêm ý kiến chuyên gia trong ngành</li>
                  <li>Sử dụng schema markup Author và Article</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    "Theo nghiên cứu được công bố trên Tạp chí Y học New England (2023), vitamin D đóng vai trò quan trọng trong việc hấp thu canxi và tăng cường sức khỏe xương. Một phân tích tổng hợp từ 11 nghiên cứu với hơn 30,000 người tham gia cho thấy bổ sung vitamin D giảm 15% nguy cơ gãy xương ở người cao tuổi."
                  </p>
                  <p className="text-sm text-gray-700 mt-3">
                    "TS. Nguyễn Văn A, Trưởng khoa Dinh dưỡng tại Bệnh viện XYZ và là tác giả của 'Hướng dẫn Dinh dưỡng Lâm sàng 2025', giải thích: 'Liều lượng vitamin D khuyến nghị hàng ngày là 600-800 IU đối với người trưởng thành, nhưng có thể cao hơn ở người cao tuổi hoặc người có nguy cơ thiếu hụt. Nghiên cứu gần đây cho thấy duy trì nồng độ vitamin D trong máu ở mức 30-50 ng/mL là tối ưu cho sức khỏe tổng thể.'"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. Tối Ưu Hóa Hình Ảnh và Đa Phương Tiện</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sử dụng hình ảnh chất lượng cao, liên quan trực tiếp đến nội dung</li>
                  <li>Tối ưu alt text với mô tả chi tiết, có từ khóa</li>
                  <li>Thêm chú thích (caption) cho hình ảnh</li>
                  <li>Sử dụng infographics tóm tắt thông tin quan trọng</li>
                  <li>Thêm video ngắn minh họa các khái niệm phức tạp</li>
                  <li>Sử dụng schema markup cho hình ảnh và video</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Alt text tối ưu:</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Biểu đồ so sánh hàm lượng vitamin D trong các loại thực phẩm phổ biến, với cá hồi dẫn đầu (447 IU/100g), tiếp theo là cá ngừ (154 IU/100g) và lòng đỏ trứng (118 IU/100g)"
                  </p>
                  
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Chú thích hình ảnh:</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Hình 1: So sánh hàm lượng vitamin D trong các loại thực phẩm phổ biến (IU/100g). Nguồn: Cơ sở dữ liệu Dinh dưỡng Quốc gia, 2025."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">5. Tối Ưu Hóa Cho Trải Nghiệm Hội Thoại</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-base font-medium mb-2">Chiến lược tối ưu</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Dự đoán và trả lời các câu hỏi tiếp theo</li>
                  <li>Tạo nội dung theo chuỗi logic, từ cơ bản đến nâng cao</li>
                  <li>Sử dụng ngôn ngữ đối thoại, tự nhiên</li>
                  <li>Bao gồm các câu hỏi liên quan ở cuối mỗi phần</li>
                  <li>Tạo liên kết giữa các chủ đề liên quan</li>
                  <li>Sử dụng các từ chuyển tiếp (transition words)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Ví dụ thực tế</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Dự đoán câu hỏi tiếp theo:</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Vitamin D có hai dạng chính là D2 (ergocalciferol) và D3 (cholecalciferol). Dạng D3 thường được khuyến nghị sử dụng vì có hiệu quả hơn trong việc tăng nồng độ vitamin D trong máu. Tuy nhiên, bạn có thể đang thắc mắc: 'Liều lượng vitamin D3 phù hợp là bao nhiêu?' Đối với hầu hết người trưởng thành, liều khuyến nghị là 1000-2000 IU mỗi ngày, nhưng điều này có thể thay đổi tùy thuộc vào nhiều yếu tố như tuổi tác, cân nặng và tình trạng sức khỏe."
                  </p>
                  
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Liên kết giữa các chủ đề:</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Vitamin D và canxi có mối quan hệ mật thiết trong việc duy trì sức khỏe xương. Trong khi vitamin D giúp cơ thể hấp thu canxi, canxi lại là khoáng chất thiết yếu để xây dựng và duy trì cấu trúc xương. Thiếu một trong hai chất dinh dưỡng này có thể ảnh hưởng đến hiệu quả của chất còn lại."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>SGE của Google 2025 đang thay đổi cách người dùng tương tác với kết quả tìm kiếm. Để nội dung của bạn được trích xuất và hiển thị trong các tóm tắt AI, cần tập trung vào việc cung cấp thông tin chính xác, toàn diện và dễ trích xuất. Đồng thời, cần xây dựng uy tín và chuyên môn trong lĩnh vực của bạn thông qua nội dung chất lượng cao và được dẫn chứng kỹ lưỡng.</p>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">AI Search & SGE</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Thuật toán AI Search và SGE (Search Generative Experience) của Google đang thay đổi cách nội dung được tìm kiếm, đánh giá và hiển thị. Trang này cung cấp hướng dẫn đầy đủ về cách tối ưu hóa nội dung cho AI Search và SGE theo thuật toán Google 2025.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Tối Ưu Hóa Cho AI Search</h3>
            <p className="text-gray-600 mb-4">Các chiến lược tối ưu nội dung cho thuật toán AI Search của Google 2025</p>
            <div className="mt-auto">
              <a href="/ai-search/toi-uu" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Tối Ưu Hóa Cho SGE</h3>
            <p className="text-gray-600 mb-4">Hướng dẫn tối ưu nội dung cho SGE (Search Generative Experience)</p>
            <div className="mt-auto">
              <a href="/ai-search/sge" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Sự khác biệt giữa AI Search và SGE:</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Đặc điểm</th>
                  <th className="py-2 px-4 border-b text-left">AI Search</th>
                  <th className="py-2 px-4 border-b text-left">SGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Định nghĩa</td>
                  <td className="py-2 px-4 border-b">Thuật toán tìm kiếm sử dụng AI để hiểu ngữ cảnh và ngữ nghĩa của nội dung</td>
                  <td className="py-2 px-4 border-b">Tính năng tạo tóm tắt AI từ nhiều nguồn ngay trên trang kết quả tìm kiếm</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Cách hoạt động</td>
                  <td className="py-2 px-4 border-b">Phân tích và đánh giá nội dung dựa trên nhiều yếu tố, không chỉ từ khóa</td>
                  <td className="py-2 px-4 border-b">Tổng hợp thông tin từ nhiều trang web để tạo câu trả lời toàn diện</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Hiển thị kết quả</td>
                  <td className="py-2 px-4 border-b">Danh sách các trang web liên quan nhất đến truy vấn</td>
                  <td className="py-2 px-4 border-b">Tóm tắt AI ở đầu trang kết quả, kèm theo các liên kết đến nguồn</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Yếu tố quan trọng</td>
                  <td className="py-2 px-4 border-b">E-E-A-T, nội dung toàn diện, ngôn ngữ tự nhiên</td>
                  <td className="py-2 px-4 border-b">Nội dung dễ trích xuất, cấu trúc câu hỏi-trả lời, độ tin cậy cao</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Thuật toán AI Search và SGE của Google 2025 đang thay đổi cách người dùng tìm kiếm và tiêu thụ thông tin. Để thành công trong môi trường tìm kiếm mới này, cần tập trung vào việc cung cấp nội dung chất lượng cao, toàn diện, đáng tin cậy và dễ trích xuất thay vì các kỹ thuật SEO kỹ thuật đơn thuần.</p>
        </div>
      </div>
    );
  }
};

export default AISearchPage;
