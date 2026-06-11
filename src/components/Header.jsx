import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* This component is mainly for parallax scroll effect */}
      {/* The actual header navigation is handled by Navigation component */}
    </header>
  );
};

export default Header;