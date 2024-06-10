// import React, {useEffect,useState} from 'react'
// import arrowup from "../../assets/images/arrow-up.svg"
// import "../../styles/ScrollTop.scss"

// const ScrollTop = () => {
//     const [showScrollTop,setShowScrollTop] = useState(false);

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if(window.scrollY > 300) {
//                 setShowScrollTop(true)
//             } else {
//                 setShowScrollTop(false)
//             }
//         })
//     },[]);

//     const scrollTop = () => {
//         window.scrollTo({
//             top:0,
//             behavior: 'smooth',
//         });
//     };
//   return (
//     <div className='scroll-top' onClick={scrollTop}>
//         {showScrollTop && (
//         <img src={arrowup} alt="" />)}
//     </div>
//   )
// }

// export default ScrollTop


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

