import React, { useEffect, useState } from 'react';
import arrowup from "../../assets/images/arrow-up.svg";
import "../../styles/ScrollTop.scss";

const ScrollTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div >
            {showScrollTop && 
            <div className='scroll-top' onClick={scrollTop}>
            <img src={arrowup} alt="" /></div>}
        </div>
    );
};

export default ScrollTop;

