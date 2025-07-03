import Gallery from '../Gallery';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

const GalleryPage = () => {
  const location = useLocation();
  
  return (
    <div className="font-sans bg-white">
      <Header />
      <Gallery />
      <Footer currentPath={location.pathname} />
    </div>
  );
};

export default GalleryPage;