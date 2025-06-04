import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const components = [Home, About, Skills, Projects, Contact];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [touchStartY, setTouchStartY] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToIndex = useCallback((direction) => { // Wrap scrollToIndex in useCallback
    setActiveIndex((prev) => {
      let next = prev + direction;
      if (next < 0) return 0;
      if (next >= components.length) return components.length - 1;
      return next;
    });
  }, []); // Empty dependency array because it doesn't depend on any props or state from outside (it uses setActiveIndex, which is stable)

  const handleScroll = useCallback((e) => { // Wrap handleScroll in useCallback
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    scrollToIndex(direction);
  }, [scrollToIndex]); // handleScroll depends on scrollToIndex

  const handleTouchStart = useCallback((e) => { // Wrap handleTouchStart in useCallback
    setTouchStartY(e.touches[0].clientY);
  }, []); // No dependencies

  const handleTouchMove = useCallback((e) => { // Wrap handleTouchMove in useCallback
    if (touchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const diff = touchStartY - currentY;
    if (Math.abs(diff) > 50) {
      scrollToIndex(diff > 0 ? 1 : -1);
      setTouchStartY(null);
    }
  }, [touchStartY, scrollToIndex]); // handleTouchMove depends on touchStartY and scrollToIndex

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]); // Now include the memoized functions

  const ActiveComponent = components[activeIndex];

  return (
    <div className="app-container">
      <Sidebar setActiveIndex={setActiveIndex} theme={theme} setTheme={setTheme} />
      <div className="main-section">
        <div key={activeIndex} className="fade-section">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}

export default App;