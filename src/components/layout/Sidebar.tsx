import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Initialize expanded sections based on current path
  useEffect(() => {
    const path = location.pathname;
    const newExpandedSections: Record<string, boolean> = {};
    
    if (path.startsWith('/title-tag')) newExpandedSections['title-tag'] = true;
    if (path.startsWith('/meta-description')) newExpandedSections['meta-description'] = true;
    if (path.startsWith('/heading-structure')) newExpandedSections['heading-structure'] = true;
    if (path.startsWith('/content-structure')) newExpandedSections['content-structure'] = true;
    if (path.startsWith('/image-optimization')) newExpandedSections['image-optimization'] = true;
    if (path.startsWith('/ai-search')) newExpandedSections['ai-search'] = true;
    if (path.startsWith('/link-optimization')) newExpandedSections['link-optimization'] = true;
    if (path.startsWith('/social-meta')) newExpandedSections['social-meta'] = true;
    if (path.startsWith('/schema-markup')) newExpandedSections['schema-markup'] = true;
    
    setExpandedSections(newExpandedSections);
  }, [location.pathname]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">SEO Guide</span>
          </Link>
          <button 
            className="p-1 text-gray-500 rounded-md hover:bg-gray-100 lg:hidden"
            onClick={toggleSidebar}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="h-full overflow-y-auto py-4 px-3">
          <nav className="space-y-1">
            <Link 
              to="/" 
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive('/') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Trang chủ
            </Link>

            {/* Title Tag Section */}
            <div>
              <button 
                onClick={() => toggleSection('title-tag')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/title-tag') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Tiêu đề META</span>
                {expandedSections['title-tag'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['title-tag'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/title-tag" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/title-tag') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/title-tag/structure" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/title-tag/structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Cấu trúc tiêu đề
                  </Link>
                  <Link 
                    to="/title-tag/examples" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/title-tag/examples') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Ví dụ tiêu đề
                  </Link>
                </div>
              )}
            </div>

            {/* Meta Description Section */}
            <div>
              <button 
                onClick={() => toggleSection('meta-description')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/meta-description') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Meta Description</span>
                {expandedSections['meta-description'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['meta-description'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/meta-description" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/meta-description') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/meta-description/structure" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/meta-description/structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Cấu trúc mô tả
                  </Link>
                  <Link 
                    to="/meta-description/examples" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/meta-description/examples') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Ví dụ mô tả
                  </Link>
                </div>
              )}
            </div>

            {/* Heading Structure Section */}
            <div>
              <button 
                onClick={() => toggleSection('heading-structure')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/heading-structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Cấu trúc Heading</span>
                {expandedSections['heading-structure'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['heading-structure'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/heading-structure" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/heading-structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/heading-structure/h1" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/heading-structure/h1') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tiêu đề H1
                  </Link>
                  <Link 
                    to="/heading-structure/h2-h3" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/heading-structure/h2-h3') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tiêu đề H2-H3
                  </Link>
                </div>
              )}
            </div>

            {/* Content Structure Section */}
            <div>
              <button 
                onClick={() => toggleSection('content-structure')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/content-structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Cấu trúc nội dung</span>
                {expandedSections['content-structure'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['content-structure'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/content-structure" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/content-structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/content-structure/paragraphs" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/content-structure/paragraphs') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Cấu trúc đoạn văn
                  </Link>
                  <Link 
                    to="/content-structure/readability" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/content-structure/readability') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tính dễ đọc
                  </Link>
                </div>
              )}
            </div>

            {/* Image Optimization Section */}
            <div>
              <button 
                onClick={() => toggleSection('image-optimization')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/image-optimization') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Tối ưu hình ảnh</span>
                {expandedSections['image-optimization'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['image-optimization'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/image-optimization" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/image-optimization') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/image-optimization/alt-text" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/image-optimization/alt-text') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Alt Text
                  </Link>
                  <Link 
                    to="/image-optimization/file-size" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/image-optimization/file-size') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Kích thước file
                  </Link>
                </div>
              )}
            </div>

            {/* AI Search Section */}
            <div>
              <button 
                onClick={() => toggleSection('ai-search')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/ai-search') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>AI Search & SGE</span>
                {expandedSections['ai-search'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['ai-search'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/ai-search" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/ai-search') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/ai-search/optimization" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/ai-search/optimization') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tối ưu AI Search
                  </Link>
                  <Link 
                    to="/ai-search/sge" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/ai-search/sge') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tối ưu SGE
                  </Link>
                </div>
              )}
            </div>

            {/* Link Optimization Section */}
            <div>
              <button 
                onClick={() => toggleSection('link-optimization')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/link-optimization') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Tối ưu liên kết</span>
                {expandedSections['link-optimization'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['link-optimization'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/link-optimization" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/link-optimization') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/link-optimization/internal" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/link-optimization/internal') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Liên kết nội bộ
                  </Link>
                  <Link 
                    to="/link-optimization/external" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/link-optimization/external') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Liên kết ngoài
                  </Link>
                </div>
              )}
            </div>

            {/* Social Meta Section */}
            <div>
              <button 
                onClick={() => toggleSection('social-meta')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/social-meta') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Social Meta Tags</span>
                {expandedSections['social-meta'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['social-meta'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/social-meta" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/social-meta') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/social-meta/structure" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/social-meta/structure') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Cấu trúc
                  </Link>
                  <Link 
                    to="/social-meta/rules" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/social-meta/rules') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Quy tắc tối ưu
                  </Link>
                </div>
              )}
            </div>

            {/* Schema Markup Section */}
            <div>
              <button 
                onClick={() => toggleSection('schema-markup')}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${location.pathname.startsWith('/schema-markup') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Schema Markup</span>
                {expandedSections['schema-markup'] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
              {expandedSections['schema-markup'] && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link 
                    to="/schema-markup" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/schema-markup') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Tổng quan
                  </Link>
                  <Link 
                    to="/schema-markup/basics" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/schema-markup/basics') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Cơ bản
                  </Link>
                  <Link 
                    to="/schema-markup/advanced" 
                    className={`flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md ${isActive('/schema-markup/advanced') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    Nâng cao
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
