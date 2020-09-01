import { useEffect } from 'react';
import { scroller } from 'react-scroll';

function ScrollToToop() {
  useEffect(() => {
			scroller.scrollTo(0);
  });

  return (null);
}

export default ScrollToToop;