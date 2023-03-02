import React from 'react'
import GoldsMenu from '../Components/GoldsMenu/GoldsMenu';
import AfterHeader from '../Components/Header/AfterHeader';
import HeaderScroll from '../Components/Header/HeaderScroll'
import { getGems } from '../Utils/DataUtils';
import './Styles/goldsRouterStyle.css'
import backGold from '../Images/goldBack.jpg';
import goldTest from '../Images/goldtest.png';
import Footer from '../Components/Footer/Footer.jsx'

const object = getGems;
console.log(object?.id)
export default function GoldsRouter({object}) {

    document.body.className = 'goldsBody';

    return (<>
        <HeaderScroll />
        <div className="goldsContainer">
            <img className='backgroundGold' src={backGold} alt="background" />
                <h1 className='categoryTitle'>Քանի դեռ մարդ կարողանում է<br/> տեսնել գեղեցկությունը, <br></br> նա չի ծերանում։</h1>
        </div>
        <section className='goldSection'>
            <div className="goldsList">
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image material material maetrial <br />Paragraph text gold image material material maetrial</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image material material maetrial <br />Paragraph text gold image material material maetrial</p>
                </div>
                </a>
                <a href='' className="goldListTable">
                <img className='goldImg' src={goldTest} alt="" />
                <div className="texts">
                <h1>Gold image</h1>
                <p>Paragraph text gold image</p>
                </div>
                </a>
            </div>
        </section>
<Footer />

    </>
    );


}
