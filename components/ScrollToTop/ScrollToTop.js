import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [location.pathname]); // Trigger effect only when the pathname changes

  return null; // ScrollToTop is a utility component, so it doesn't render anything
}

export default ScrollToTop;
