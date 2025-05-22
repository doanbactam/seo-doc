import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import TitleTagPage from './pages/TitleTagPage';
import MetaDescriptionPage from './pages/MetaDescriptionPage';
import HeadingStructurePage from './pages/HeadingStructurePage';
import ContentStructurePage from './pages/ContentStructurePage';
import ImageOptimizationPage from './pages/ImageOptimizationPage';
import AISearchPage from './pages/AISearchPage';
import LinkOptimizationPage from './pages/LinkOptimizationPage';
import SocialMetaPage from './pages/SocialMetaPage';
import SchemaMarkupPage from './pages/SchemaMarkupPage';

// Import layout components
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Title Tag Routes */}
          <Route path="/title-tag" element={<TitleTagPage />} />
          <Route path="/title-tag/structure" element={<TitleTagPage section="structure" />} />
          <Route path="/title-tag/examples" element={<TitleTagPage section="examples" />} />
          
          {/* Meta Description Routes */}
          <Route path="/meta-description" element={<MetaDescriptionPage />} />
          <Route path="/meta-description/structure" element={<MetaDescriptionPage section="structure" />} />
          <Route path="/meta-description/examples" element={<MetaDescriptionPage section="examples" />} />
          
          {/* Heading Structure Routes */}
          <Route path="/heading-structure" element={<HeadingStructurePage />} />
          <Route path="/heading-structure/h1" element={<HeadingStructurePage section="h1" />} />
          <Route path="/heading-structure/h2-h3" element={<HeadingStructurePage section="h2-h3" />} />
          
          {/* Content Structure Routes */}
          <Route path="/content-structure" element={<ContentStructurePage />} />
          <Route path="/content-structure/paragraphs" element={<ContentStructurePage section="paragraphs" />} />
          <Route path="/content-structure/readability" element={<ContentStructurePage section="readability" />} />
          
          {/* Image Optimization Routes */}
          <Route path="/image-optimization" element={<ImageOptimizationPage />} />
          <Route path="/image-optimization/alt-text" element={<ImageOptimizationPage section="alt-text" />} />
          <Route path="/image-optimization/file-size" element={<ImageOptimizationPage section="file-size" />} />
          
          {/* AI Search Routes */}
          <Route path="/ai-search" element={<AISearchPage />} />
          <Route path="/ai-search/optimization" element={<AISearchPage section="optimization" />} />
          <Route path="/ai-search/sge" element={<AISearchPage section="sge" />} />
          
          {/* Link Optimization Routes */}
          <Route path="/link-optimization" element={<LinkOptimizationPage />} />
          <Route path="/link-optimization/internal" element={<LinkOptimizationPage section="internal" />} />
          <Route path="/link-optimization/external" element={<LinkOptimizationPage section="external" />} />
          
          {/* Social Meta Routes */}
          <Route path="/social-meta" element={<SocialMetaPage />} />
          <Route path="/social-meta/structure" element={<SocialMetaPage section="structure" />} />
          <Route path="/social-meta/rules" element={<SocialMetaPage section="rules" />} />
          
          {/* Schema Markup Routes */}
          <Route path="/schema-markup" element={<SchemaMarkupPage />} />
          <Route path="/schema-markup/basics" element={<SchemaMarkupPage section="basics" />} />
          <Route path="/schema-markup/advanced" element={<SchemaMarkupPage section="advanced" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
