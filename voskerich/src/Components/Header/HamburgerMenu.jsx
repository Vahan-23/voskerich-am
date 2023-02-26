import React, { useState, useEffect } from 'react';
import "./HamburgerMenuStyle.css"

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
      <div className="nav">

        {isLargeScreen ? (
          
          <div></div>
        ) :  (
          
          <>
            <p class="logoBurger">VOSKERICH</p>
            <div className="menu-icon" onClick={toggleMenu}>
              &#9776;
            </div>
            <ul className={`menu${isMenuOpen ? 'show-menu' : ''}`}>
              <li><a href="#">Ոսկերչական Զարդեր</a></li>
              <li><a href="#">Արծաթե Զարդեր</a></li>
              <li><a href="#">Ժամացույցներ</a></li>
              <li><a href="#">Աքսեսուարներ</a></li>
              <li><a href="#">Ոսկերչական աշխարհ</a></li>
            </ul> 
          </>
        )}
    </div>
  );
}

export default HamburgerMenu;
