import React, { useState, useEffect } from 'react'
import imgTop from '../../img/BackTop.png'
import './BackToTop.css'
export const BackToTop = () => {
    const [showTop, setShowTop] = useState(false)
    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 650) {
                    console.log("scrollY =>>> ", scrollY);
                    setShowTop(true)
                }else{
                    setShowTop(false)
                }
            })
        }
        watchScroll()

    }, [window.pageYOffset])
    const topFunction = () => {
        console.log("topfunction");

        window.scroll(0, 0)
    }
    return (
        <>
            {
                showTop ?
                    (
                        <div className='btnTop' >
                            <img className='backtotop' src={imgTop} alt="backtotop" onClick={() => topFunction()} />
                        </div >
                    ) : null}
        </>

    )
}
