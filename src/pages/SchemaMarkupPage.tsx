import React from 'react';

interface SchemaMarkupPageProps {
  section?: string;
}

const SchemaMarkupPage: React.FC<SchemaMarkupPageProps> = ({ section }) => {
  if (section === 'basics') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Cơ Bản Về Schema Markup</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Schema Markup là ngôn ngữ đánh dấu cấu trúc dữ liệu giúp các công cụ tìm kiếm hiểu rõ hơn về nội dung trang web. Việc triển khai Schema Markup đúng cách giúp trang web của bạn nổi bật trong kết quả tìm kiếm với rich snippets, đồng thời cải thiện khả năng hiểu nội dung của AI Search và SGE.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Schema Markup Là Gì?</h2>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-2/3">
            <p className="mb-4">
              Schema Markup (hay Structured Data) là mã đánh dấu được thêm vào trang web để giúp các công cụ tìm kiếm hiểu rõ hơn về nội dung. Schema Markup sử dụng từ vựng tiêu chuẩn từ Schema.org - một dự án hợp tác giữa Google, Bing, Yahoo và Yandex.
            </p>
            
            <p className="mb-4">
              Khi được triển khai đúng cách, Schema Markup giúp trang web của bạn hiển thị rich snippets (đoạn trích phong phú) trong kết quả tìm kiếm, như đánh giá sao, giá cả, thời gian nấu ăn, thông tin sự kiện, và nhiều thông tin hữu ích khác.
            </p>
            
            <p>
              Theo thuật toán Google 2025 và AI Search, Schema Markup còn quan trọng hơn vì nó giúp AI hiểu chính xác ngữ cảnh và mối quan hệ giữa các thực thể trong nội dung, từ đó cải thiện khả năng xuất hiện trong SGE (Search Generative Experience).
            </p>
          </div>
          
          <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Lợi ích của Schema Markup:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hiển thị rich snippets trong kết quả tìm kiếm</li>
              <li>Tăng tỷ lệ click (CTR) lên đến 30%</li>
              <li>Cải thiện khả năng hiểu nội dung của AI Search</li>
              <li>Tăng cơ hội xuất hiện trong SGE</li>
              <li>Hỗ trợ tối ưu cho tìm kiếm bằng giọng nói</li>
              <li>Cải thiện khả năng hiển thị trong Google Knowledge Graph</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Các Định Dạng Schema Markup</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. JSON-LD (Khuyến nghị)</h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="mb-4">
                  JSON-LD (JavaScript Object Notation for Linked Data) là định dạng được Google khuyến nghị sử dụng. Đây là mã JavaScript được đặt trong thẻ &lt;script&gt; trong phần &lt;head&gt; hoặc &lt;body&gt; của trang.
                </p>
                
                <p>
                  Ưu điểm lớn nhất của JSON-LD là nó tách biệt với HTML, giúp dễ dàng triển khai và bảo trì, đồng thời không ảnh hưởng đến giao diện người dùng.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Ví dụ JSON-LD:</h4>
                  <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                    <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hướng dẫn SEO toàn diện 2025",
  "author": {
    "@type": "Person",
    "name": "Nguyễn Văn A"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SEO Guide",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.jpg"
    }
  },
  "datePublished": "2025-01-15T08:00:00+07:00",
  "dateModified": "2025-01-20T10:30:00+07:00",
  "description": "Hướng dẫn SEO toàn diện theo thuật toán Google 2025 và AI Search.",
  "image": "https://example.com/seo-guide-2025.jpg"
}
</script>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. Microdata</h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="mb-4">
                  Microdata là định dạng được nhúng trực tiếp vào HTML của trang web, sử dụng các thuộc tính như itemscope, itemtype và itemprop.
                </p>
                
                <p>
                  Mặc dù Microdata khó triển khai và bảo trì hơn JSON-LD, nhưng nó vẫn được hỗ trợ tốt và có thể là lựa chọn trong một số trường hợp đặc biệt.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Ví dụ Microdata:</h4>
                  <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                    <code>{`<div itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Hướng dẫn SEO toàn diện 2025</h1>
  <div itemprop="author" itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">Nguyễn Văn A</span>
  </div>
  <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">SEO Guide</span>
    <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
      <img itemprop="url" src="https://example.com/logo.jpg" />
    </div>
  </div>
  <meta itemprop="datePublished" content="2025-01-15T08:00:00+07:00" />
  <meta itemprop="dateModified" content="2025-01-20T10:30:00+07:00" />
  <meta itemprop="description" content="Hướng dẫn SEO toàn diện theo thuật toán Google 2025 và AI Search." />
  <img itemprop="image" src="https://example.com/seo-guide-2025.jpg" />
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. RDFa</h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="mb-4">
                  RDFa (Resource Description Framework in Attributes) là một định dạng khác được nhúng vào HTML, sử dụng các thuộc tính như vocab, typeof và property.
                </p>
                
                <p>
                  RDFa ít phổ biến hơn JSON-LD và Microdata, nhưng vẫn được hỗ trợ bởi các công cụ tìm kiếm chính.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium mb-2">Ví dụ RDFa:</h4>
                  <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                    <code>{`<div vocab="https://schema.org/" typeof="Article">
  <h1 property="headline">Hướng dẫn SEO toàn diện 2025</h1>
  <div property="author" typeof="Person">
    <span property="name">Nguyễn Văn A</span>
  </div>
  <div property="publisher" typeof="Organization">
    <span property="name">SEO Guide</span>
    <div property="logo" typeof="ImageObject">
      <img property="url" src="https://example.com/logo.jpg" />
    </div>
  </div>
  <meta property="datePublished" content="2025-01-15T08:00:00+07:00" />
  <meta property="dateModified" content="2025-01-20T10:30:00+07:00" />
  <meta property="description" content="Hướng dẫn SEO toàn diện theo thuật toán Google 2025 và AI Search." />
  <img property="image" src="https://example.com/seo-guide-2025.jpg" />
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Các Loại Schema Phổ Biến</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Loại Schema</th>
                <th className="py-2 px-4 border-b text-left">Mô tả</th>
                <th className="py-2 px-4 border-b text-left">Rich Snippet</th>
                <th className="py-2 px-4 border-b text-left">Phù hợp cho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Article</td>
                <td className="py-2 px-4 border-b">Đánh dấu bài viết, tin tức, blog post</td>
                <td className="py-2 px-4 border-b">Headline, tác giả, ngày đăng, hình ảnh</td>
                <td className="py-2 px-4 border-b">Blog, trang tin tức, bài báo</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Product</td>
                <td className="py-2 px-4 border-b">Đánh dấu thông tin sản phẩm</td>
                <td className="py-2 px-4 border-b">Giá, tình trạng, đánh giá</td>
                <td className="py-2 px-4 border-b">E-commerce, trang sản phẩm</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">LocalBusiness</td>
                <td className="py-2 px-4 border-b">Đánh dấu thông tin doanh nghiệp địa phương</td>
                <td className="py-2 px-4 border-b">Địa chỉ, giờ mở cửa, đánh giá</td>
                <td className="py-2 px-4 border-b">Nhà hàng, cửa hàng, dịch vụ địa phương</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Recipe</td>
                <td className="py-2 px-4 border-b">Đánh dấu công thức nấu ăn</td>
                <td className="py-2 px-4 border-b">Thời gian nấu, calo, đánh giá</td>
                <td className="py-2 px-4 border-b">Blog ẩm thực, trang công thức</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Event</td>
                <td className="py-2 px-4 border-b">Đánh dấu thông tin sự kiện</td>
                <td className="py-2 px-4 border-b">Ngày, giờ, địa điểm, giá vé</td>
                <td className="py-2 px-4 border-b">Trang sự kiện, hòa nhạc, hội thảo</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">FAQ</td>
                <td className="py-2 px-4 border-b">Đánh dấu câu hỏi thường gặp</td>
                <td className="py-2 px-4 border-b">Danh sách câu hỏi-trả lời</td>
                <td className="py-2 px-4 border-b">Trang FAQ, hướng dẫn, giải đáp</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">HowTo</td>
                <td className="py-2 px-4 border-b">Đánh dấu hướng dẫn từng bước</td>
                <td className="py-2 px-4 border-b">Các bước, thời gian, công cụ</td>
                <td className="py-2 px-4 border-b">Hướng dẫn DIY, tutorial</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">VideoObject</td>
                <td className="py-2 px-4 border-b">Đánh dấu nội dung video</td>
                <td className="py-2 px-4 border-b">Thumbnail, thời lượng, ngày đăng</td>
                <td className="py-2 px-4 border-b">Trang video, YouTube, Vimeo</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, Schema Markup không chỉ giúp hiển thị rich snippets mà còn là yếu tố quan trọng giúp AI hiểu chính xác nội dung trang web. Việc triển khai Schema Markup đúng cách sẽ tăng cơ hội xuất hiện trong SGE (Search Generative Experience) và cải thiện khả năng hiển thị trong kết quả tìm kiếm.</p>
        </div>
      </div>
    );
  } else if (section === 'advanced') {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Schema Markup Nâng Cao</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Schema Markup nâng cao giúp trang web của bạn cung cấp thông tin cấu trúc chi tiết hơn cho các công cụ tìm kiếm, tăng cường khả năng hiển thị rich snippets và cải thiện hiệu quả trong AI Search và SGE.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Schema Markup Lồng Nhau</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Cấu Trúc Schema Lồng Nhau</h3>
          
          <p className="mb-4">
            Schema Markup lồng nhau (nested schema) cho phép bạn tạo mối quan hệ phức tạp giữa các thực thể, giúp AI Search hiểu sâu hơn về ngữ cảnh và mối liên hệ trong nội dung.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-base font-medium mb-2">Ví dụ Schema lồng nhau cho bài viết:</h4>
            <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
              <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hướng dẫn SEO toàn diện 2025",
  "author": {
    "@type": "Person",
    "name": "Nguyễn Văn A",
    "url": "https://example.com/author/nguyen-van-a",
    "image": "https://example.com/author/nguyen-van-a.jpg",
    "jobTitle": "SEO Specialist",
    "sameAs": [
      "https://twitter.com/nguyenvana",
      "https://linkedin.com/in/nguyenvana"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "SEO Guide",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.jpg",
      "width": "600",
      "height": "60"
    }
  },
  "datePublished": "2025-01-15T08:00:00+07:00",
  "dateModified": "2025-01-20T10:30:00+07:00",
  "description": "Hướng dẫn SEO toàn diện theo thuật toán Google 2025 và AI Search.",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/seo-guide-2025.jpg",
    "width": "1200",
    "height": "630",
    "caption": "Hướng dẫn SEO 2025"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/seo-guide-2025"
  },
  "keywords": "SEO, Google 2025, AI Search, SGE, tối ưu hóa tìm kiếm"
}
</script>`}</code>
            </pre>
          </div>
          
          <p>
            Trong ví dụ trên, schema Article chứa các schema lồng nhau như Person (author), Organization (publisher), ImageObject (logo và image), và WebPage (mainEntityOfPage).
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Schema Markup Cho Các Trường Hợp Đặc Biệt</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">1. FAQ Schema</h3>
            
            <p className="mb-4">
              FAQ Schema giúp trang web của bạn hiển thị dưới dạng câu hỏi-trả lời trong kết quả tìm kiếm, tăng không gian hiển thị và cải thiện CTR.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Ví dụ FAQ Schema:</h4>
              <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "SEO là gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) là quá trình tối ưu hóa trang web để cải thiện thứ hạng trong kết quả tìm kiếm tự nhiên, tăng lượng truy cập và chuyển đổi."
      }
    },
    {
      "@type": "Question",
      "name": "AI Search là gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Search là thuật toán tìm kiếm sử dụng trí tuệ nhân tạo để hiểu ngữ cảnh và ngữ nghĩa của nội dung, cung cấp kết quả tìm kiếm chính xác và phù hợp hơn với ý định tìm kiếm của người dùng."
      }
    },
    {
      "@type": "Question",
      "name": "SGE là gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SGE (Search Generative Experience) là tính năng AI của Google, tạo ra các tóm tắt được sinh bởi AI ngay trên trang kết quả tìm kiếm, dựa trên thông tin từ nhiều trang web khác nhau."
      }
    }
  ]
}
</script>`}</code>
              </pre>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Quy tắc sử dụng FAQ Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Chỉ sử dụng cho trang có định dạng câu hỏi-trả lời thực sự</li>
                  <li>Mỗi câu hỏi phải có một câu trả lời đầy đủ</li>
                  <li>Nội dung phải khớp với nội dung hiển thị trên trang</li>
                  <li>Tránh sử dụng FAQ Schema cho nội dung quảng cáo</li>
                  <li>Giới hạn 10 câu hỏi để tối ưu hiển thị</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Lợi ích của FAQ Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Chiếm nhiều không gian hơn trong SERP</li>
                  <li>Tăng tỷ lệ click (CTR) lên đến 30%</li>
                  <li>Tăng cơ hội xuất hiện trong featured snippets</li>
                  <li>Tối ưu cho tìm kiếm bằng giọng nói</li>
                  <li>Cải thiện khả năng xuất hiện trong SGE</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">2. HowTo Schema</h3>
            
            <p className="mb-4">
              HowTo Schema giúp đánh dấu nội dung hướng dẫn từng bước, giúp Google hiển thị hướng dẫn chi tiết ngay trong kết quả tìm kiếm.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Ví dụ HowTo Schema:</h4>
              <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cách tối ưu hóa hình ảnh cho SEO",
  "description": "Hướng dẫn từng bước để tối ưu hóa hình ảnh cho SEO, cải thiện tốc độ tải trang và thứ hạng tìm kiếm.",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "VND",
    "value": "0"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Công cụ nén hình ảnh"
    },
    {
      "@type": "HowToTool",
      "name": "Trình chỉnh sửa hình ảnh"
    }
  ],
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Hình ảnh chất lượng cao"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://example.com/optimize-images#step1",
      "name": "Chọn định dạng hình ảnh phù hợp",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Sử dụng JPEG cho hình ảnh có nhiều màu sắc, PNG cho hình ảnh cần độ trong suốt, và WebP cho hiệu suất tối ưu."
      },
      "image": "https://example.com/images/step1.jpg"
    },
    {
      "@type": "HowToStep",
      "url": "https://example.com/optimize-images#step2",
      "name": "Nén hình ảnh",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Sử dụng công cụ nén hình ảnh để giảm kích thước file mà không làm giảm chất lượng hiển thị."
      },
      "image": "https://example.com/images/step2.jpg"
    },
    {
      "@type": "HowToStep",
      "url": "https://example.com/optimize-images#step3",
      "name": "Đặt tên file hình ảnh có từ khóa",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Đặt tên file hình ảnh mô tả nội dung và bao gồm từ khóa chính, sử dụng dấu gạch ngang giữa các từ."
      },
      "image": "https://example.com/images/step3.jpg"
    },
    {
      "@type": "HowToStep",
      "url": "https://example.com/optimize-images#step4",
      "name": "Tối ưu alt text",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Thêm alt text mô tả chính xác nội dung hình ảnh, bao gồm từ khóa một cách tự nhiên."
      },
      "image": "https://example.com/images/step4.jpg"
    }
  ]
}
</script>`}</code>
              </pre>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Quy tắc sử dụng HowTo Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Chỉ sử dụng cho nội dung hướng dẫn từng bước thực sự</li>
                  <li>Mỗi bước phải có mô tả rõ ràng</li>
                  <li>Thêm hình ảnh minh họa cho mỗi bước nếu có thể</li>
                  <li>Bao gồm thời gian, công cụ, và vật liệu nếu phù hợp</li>
                  <li>Đảm bảo các bước logic và dễ theo dõi</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Lợi ích của HowTo Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hiển thị hướng dẫn từng bước trong kết quả tìm kiếm</li>
                  <li>Tăng khả năng xuất hiện trong featured snippets</li>
                  <li>Tối ưu cho tìm kiếm bằng giọng nói và trợ lý ảo</li>
                  <li>Cải thiện trải nghiệm người dùng trên thiết bị di động</li>
                  <li>Tăng cơ hội xuất hiện trong SGE</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">3. Product Schema</h3>
            
            <p className="mb-4">
              Product Schema giúp đánh dấu thông tin sản phẩm, hiển thị giá, tình trạng còn hàng, đánh giá và nhiều thông tin khác trong kết quả tìm kiếm.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Ví dụ Product Schema:</h4>
              <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Áo Sơ Mi Nam Slim Fit",
  "image": [
    "https://example.com/photos/1x1/ao-so-mi.jpg",
    "https://example.com/photos/4x3/ao-so-mi.jpg",
    "https://example.com/photos/16x9/ao-so-mi.jpg"
  ],
  "description": "Áo sơ mi nam slim fit chất liệu cotton cao cấp, thiết kế hiện đại, phù hợp cho công sở và dạo phố.",
  "sku": "SM001",
  "mpn": "925872",
  "brand": {
    "@type": "Brand",
    "name": "Fashion Brand"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Nguyễn Văn B"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "89"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/ao-so-mi-nam",
    "priceCurrency": "VND",
    "price": "450000",
    "priceValidUntil": "2025-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Fashion Store"
    }
  }
}
</script>`}</code>
              </pre>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Quy tắc sử dụng Product Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cung cấp thông tin sản phẩm chính xác và đầy đủ</li>
                  <li>Bao gồm giá, tình trạng còn hàng, và thông tin giao hàng</li>
                  <li>Thêm đánh giá và xếp hạng nếu có</li>
                  <li>Sử dụng nhiều hình ảnh với các tỷ lệ khác nhau</li>
                  <li>Cập nhật thông tin khi có thay đổi về giá hoặc tình trạng</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Lợi ích của Product Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hiển thị giá, đánh giá sao trong kết quả tìm kiếm</li>
                  <li>Tăng tỷ lệ click (CTR) lên đến 35%</li>
                  <li>Cải thiện khả năng xuất hiện trong Google Shopping</li>
                  <li>Tăng tỷ lệ chuyển đổi</li>
                  <li>Cung cấp thông tin sản phẩm rõ ràng cho người dùng</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">4. VideoObject Schema</h3>
            
            <p className="mb-4">
              VideoObject Schema giúp đánh dấu nội dung video, tăng khả năng hiển thị video trong kết quả tìm kiếm và Google Video.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="text-base font-medium mb-2">Ví dụ VideoObject Schema:</h4>
              <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
                <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Hướng dẫn SEO cơ bản 2025",
  "description": "Video hướng dẫn các kỹ thuật SEO cơ bản theo thuật toán Google 2025 và AI Search.",
  "thumbnailUrl": "https://example.com/thumbnail.jpg",
  "uploadDate": "2025-01-15T08:00:00+07:00",
  "duration": "PT15M30S",
  "contentUrl": "https://example.com/videos/seo-basic-2025.mp4",
  "embedUrl": "https://example.com/embed/seo-basic-2025",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": { "@type": "WatchAction" },
    "userInteractionCount": 5647
  },
  "regionsAllowed": "VN",
  "author": {
    "@type": "Person",
    "name": "Nguyễn Văn A"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SEO Guide",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.jpg",
      "width": "600",
      "height": "60"
    }
  }
}
</script>`}</code>
              </pre>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Quy tắc sử dụng VideoObject Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cung cấp thông tin video đầy đủ và chính xác</li>
                  <li>Sử dụng thumbnail chất lượng cao</li>
                  <li>Bao gồm thời lượng video theo định dạng ISO 8601</li>
                  <li>Thêm thông tin tác giả và nhà xuất bản</li>
                  <li>Cập nhật số lượt xem nếu có thể</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h4 className="text-base font-medium mb-2">Lợi ích của VideoObject Schema:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hiển thị video rich snippet trong kết quả tìm kiếm</li>
                  <li>Tăng khả năng xuất hiện trong Google Video</li>
                  <li>Cải thiện CTR cho nội dung video</li>
                  <li>Cung cấp thông tin video rõ ràng cho người dùng</li>
                  <li>Tăng khả năng xuất hiện trong carousel video</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Kiểm Tra và Xác Thực Schema Markup</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Công Cụ Kiểm Tra Schema</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base font-medium mb-2">Công cụ chính thức:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Google Rich Results Test:</strong> Kiểm tra khả năng hiển thị rich results</li>
                <li><strong>Schema Markup Validator:</strong> Xác thực cú pháp schema</li>
                <li><strong>Google Search Console:</strong> Theo dõi hiệu suất rich results</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-2">Công cụ bổ sung:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Schema App Structured Data Validator:</strong> Kiểm tra và trực quan hóa schema</li>
                <li><strong>Merkle Schema Markup Generator:</strong> Tạo schema markup tự động</li>
                <li><strong>Semrush Site Audit:</strong> Kiểm tra schema trong quá trình audit</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, Schema Markup nâng cao không chỉ giúp hiển thị rich snippets mà còn là yếu tố quan trọng giúp AI hiểu sâu hơn về mối quan hệ giữa các thực thể trong nội dung. Việc triển khai Schema Markup đúng cách và đầy đủ sẽ tăng cơ hội xuất hiện trong SGE (Search Generative Experience) và cải thiện khả năng hiển thị trong kết quả tìm kiếm.</p>
        </div>
      </div>
    );
  } else {
    // Default: show overview of all sections
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">Schema Markup</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Schema Markup là ngôn ngữ đánh dấu cấu trúc dữ liệu giúp các công cụ tìm kiếm hiểu rõ hơn về nội dung trang web. Trang này cung cấp hướng dẫn đầy đủ về cách triển khai Schema Markup theo thuật toán Google 2025 và AI Search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cơ Bản Về Schema Markup</h3>
            <p className="text-gray-600 mb-4">Giới thiệu về Schema Markup, các định dạng và loại schema phổ biến</p>
            <div className="mt-auto">
              <a href="/schema/co-ban" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Schema Markup Nâng Cao</h3>
            <p className="text-gray-600 mb-4">Hướng dẫn triển khai schema lồng nhau và các loại schema đặc biệt</p>
            <div className="mt-auto">
              <a href="/schema/nang-cao" className="text-blue-600 hover:underline">Xem chi tiết →</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Ví dụ Schema Markup cơ bản:</h3>
          <pre className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
            <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hướng dẫn SEO toàn diện 2025",
  "author": {
    "@type": "Person",
    "name": "Nguyễn Văn A"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SEO Guide",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.jpg"
    }
  },
  "datePublished": "2025-01-15T08:00:00+07:00",
  "dateModified": "2025-01-20T10:30:00+07:00",
  "description": "Hướng dẫn SEO toàn diện theo thuật toán Google 2025 và AI Search.",
  "image": "https://example.com/seo-guide-2025.jpg"
}
</script>`}</code>
          </pre>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Lưu ý quan trọng:</h3>
          <p>Theo thuật toán Google 2025 và AI Search, Schema Markup không chỉ giúp hiển thị rich snippets mà còn là yếu tố quan trọng giúp AI hiểu chính xác nội dung trang web. Việc triển khai Schema Markup đúng cách sẽ tăng cơ hội xuất hiện trong SGE (Search Generative Experience) và cải thiện khả năng hiển thị trong kết quả tìm kiếm.</p>
        </div>
      </div>
    );
  }
};

export default SchemaMarkupPage;
