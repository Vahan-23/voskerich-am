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
            <div className="goldSilver">
                <div className="goldSilverProp">
                    <div className="gold">
                        <h2 className='goldText'> <h1>Ոսկի</h1> Նուրբ ոսկյա շղթաներից մինչև սլաքիթ կտորներ, մենք բոլորի համար ինչ-որ բան ունենք: Մեր ընտրանին ներառում է 14K, 18K և 24K ոսկի տարբեր գույներով, ինչպիսիք են դեղին, սպիտակ և վարդագույն ոսկի: Մենք նաև առաջարկում ենք մի շարք շշմեցնող թանկարժեք քարեր և ադամանդներ՝ ձեր տեսքին փայլ հաղորդելու համար:</h2>
                    <a  href='/golds'><img className='categoriesImage' src={gold} alt="gold" /><p className='more'> Տեսնել ավելին</p></a>
                    </div>
                    <div  className="snakeMargin"> </div>
                    <div className="silver">
                        <h2 className='goldText'> <h1>Արծաթ</h1>Պարզ արծաթյա շղթաներից մինչև զարդարված հայտարարություններ, մենք ունենք ամեն ճաշակի և առիթի համար հարմար բան: Մեր հավաքածուն ներառում է վզնոցներ, ապարանջաններ, ականջօղեր, մատանիներ և այլն, որոնք պատրաստված են բարձրորակ 925 հարգի արծաթից:</h2>
                    <a href=""><img className='categoriesImage' src={silver} alt="silver" /><p className='more'> Տեսնել ավելին</p></a>
                    </div>
                    <div  className="snakeMargin"> </div>
                    <div className="bijuterie">
                        <h2 className='goldText'><h1>Բիժուտերիա</h1>Շքեղ վզնոցներից մինչև էլեգանտ ապարանջաններ, մենք ունենք բիժուտերիական զարդերի լայն տեսականի, որը կատարյալ է յուրաքանչյուր ոճի և բյուջեի համար: Մեր ընտրանին ներառում է մի շարք նյութեր, ինչպիսիք են rhinestones, մարգարիտները, բյուրեղները և այլն, որոնք նախատեսված են ձեր տեսքին փայլ հաղորդելու համար:</h2>
                    <a href=""><img className='categoriesImage' src={accesor} alt="accesor" /> <p className='more'> Տեսնել ավելին</p></a>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
