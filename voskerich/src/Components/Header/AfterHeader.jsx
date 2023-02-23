import React, { useState, useEffect } from 'react';
import "./headerStyle.css"

export default function AfterHeader() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 65) {
        setShowElement(false);
      } else {
        setShowElement(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showElement &&  <div className="menu">
                <a href='/' className='logotypeScroll'>VOSKERICH</a>
                <div className="menuitem">
                  <ul className='menuList'>
                    <li> <a href="">Ոսկերչական իրեր</a> </li>
                    <li> <a href="">Արծաթե իրեր</a> </li>
                    <li> <a href="">Ժամացույցներ</a> </li>
                    <li> <a href="">Աքսեսուարներ</a> </li>
                    <li> <a href="">Ոսկերչական աշխարհ</a> </li>
                  </ul>
                    
                </div>
            </div>}
    </div>
  );
}