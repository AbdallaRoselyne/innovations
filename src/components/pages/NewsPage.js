import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const NewsPage = () => {
  const location = useLocation();
  
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <FontAwesomeIcon 
            icon={faNewspaper} 
            className="text-gray-300 text-5xl mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            News & Insights
          </h1>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-600 mb-2">
              Our news section is coming soon.
            </p>
            <p className="text-gray-500">
              Check back later for updates on our projects and innovations.
            </p>
          </div>
        </div>
      </main>

      <Footer currentPath={location.pathname} />
    </div>
  );
};

export default NewsPage;