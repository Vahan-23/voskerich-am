import React from 'react'
import "./headerStyle.css"
import { useEffect, useState } from 'react';
import Header from './Header';
import AfterHeader from './AfterHeader';
export default function HeaderScroll() {
    const [showHeader, setShowHeader] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setShowHeader(true);
                
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            {showHeader && <Header />}
            <AfterHeader />
        </>
    );
}
