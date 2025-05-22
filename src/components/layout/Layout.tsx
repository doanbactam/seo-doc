import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { MenuIcon } from '@heroicons/react/outline';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Extract page title from current path
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Trang chủ';
    if (path.startsWith('/title-tag')) return 'Tiêu đề META';
    if (path.startsWith('/meta-description')) return 'Meta Description';
    if (path.startsWith('/heading-structure')) return 'Cấu trúc Heading';
    if (path.startsWith('/content-structure')) return 'Cấu trúc nội dung';
    if (path.startsWith('/image-optimization')) return 'Tối ưu hình ảnh';
    if (path.startsWith('/ai-search')) return 'AI Search & SGE';
    if (path.startsWith('/link-optimization')) return 'Tối ưu liên kết';
    if (path.startsWith('/social-meta')) return 'Social Meta Tags';
    if (path.startsWith('/schema-markup')) return 'Schema Markup';
    
    return 'SEO Guide';
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
