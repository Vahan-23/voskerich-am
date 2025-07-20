import React from 'react'
import { useState, useEffect } from 'react';
import GoldsMenu from '../Components/GoldsMenu/GoldsMenu';
import AfterHeader from '../Components/Header/AfterHeader';
import HeaderScroll from '../Components/Header/HeaderScroll'
import { getGemsByCategory } from '../Utils/DataUtils';
import ProductCard from '../Components/Products/ProductCard';
import LoadingSpinner from '../Components/UI/LoadingSpinner';
import './Styles/goldsRouterStyle.css'
import backGold from '../Images/goldBack.jpg';
import Footer from '../Components/Footer/Footer.jsx'

export default function GoldsRouter() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    document.body.className = 'goldsBody';

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const goldProducts = await getGemsByCategory('gold');
                setProducts(goldProducts);
            } catch (err) {
                setError('Չհաջողվեց բեռնել ապրանքները');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (<>
        <HeaderScroll />
        <div className="goldsContainer">
            <img className='backgroundGold' src={backGold} alt="background" />
                <h1 className='categoryTitle'>Քանի դեռ մարդ կարողանում է<br/> տեսնել գեղեցկությունը, <br></br> նա չի ծերանում։</h1>
        </div>
        
        <section className='goldSection'>
            <div className="products-header">
                <h2>Ոսկյա Զարդեր</h2>
                <p>Բարձրորակ ոսկյա զարդերի հավաքածու</p>
            </div>
            
            {loading ? (
                <LoadingSpinner size="large" />
            ) : error ? (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            ) : (
                <div className="goldsList">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                        />
                    ))}
                </div>
            )}
        </section>

        <Footer />
    </>
    );
}
