import React, { useState, useEffect } from 'react';
import gold from '../../Images/gold.jpeg'
import silver from '../../Images/silver.jpeg'
import accesor from '../../Images/accesor.jpeg'

export default function Category() {
    const [showElement, setshowElement] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setshowElement(true);
                
            } else {
                setshowElement(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
         <div >
            <section id='section-1' >
            <div  className="snakeMargin"> 
            </div>
            <div className="goldSilver">
            <p  className='categories' >Բաժիններ</p>
                <div className="goldSilverProp">
                    <a  href=''><img className='categoriesImage' src={gold} alt="gold" /> Ոսկի</a>
                    <a href=""><img className='categoriesImage' src={silver} alt="silver" /> Արծաթ</a>
                    <a href=""><img className='categoriesImage' src={accesor} alt="accesor" /> Բիժուտերիա</a>
                </div>
            </div>
            </section>
        </div>
    )
}
