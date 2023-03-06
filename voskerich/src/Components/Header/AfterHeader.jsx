import React, { useState, useEffect } from 'react';
import "./headerStyle.css"
import { PopUpMenuGold , PopUpMenuSilver } from '././Pop-up/PopUpMenu';
export default function AfterHeader() {
  const [showElement, setShowElement] = useState(true);
  const [showPopMenuGold, setShowPopMenuGold] = useState(false);
  const [showPopMenuSilver, setShowPopMenuSilver] = useState(false);

  const handleMouseOverGold = () => {
    setShowPopMenuGold(true);
  };
  const handleMouseOverSilver = () => {
    setShowPopMenuSilver(true);
  };

  const handleMouseOut = () => {
    setShowPopMenuGold(false);
    setShowPopMenuSilver(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 60) {
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
      {showElement && <div className="menu">
        <a href='/' className='logotypeScroll'>VOSKERICH</a>
        <div className="menuitem">
          <ul className='menuList'>
            <li onMouseOver={handleMouseOverGold} onMouseOut={handleMouseOut}> <a className='menuAfleax' href="/golds">Ոսկերչական Զարդեր</a>
              <div className="navigation"></div>
              <div>
                {showPopMenuGold && <PopUpMenuGold />}
              </div>
            </li>
            <li> <a className='menuAfleax' href="">Արծաթե Զարդեր</a><div className="navigation"></div> </li>
            <li> <a className='menuAfleax' href="">Ժամացույցներ</a><div className="navigation"></div> </li>
            <li> <a className='menuAfleax' href="">Աքսեսուարներ</a><div className="navigation"></div> </li>
            <li> <a className='menuAfleax' href="">Ոսկերչական աշխարհ</a><div className="navigation"></div> </li>
          </ul>

        </div>
      </div>}
    </div>
  );
}
