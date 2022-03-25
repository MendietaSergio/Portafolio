import React, { useState, useEffect } from 'react'

export const BackToTop = () => {
    const [showTop, setShowTop] = useState(false)
    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 650) {
                    setShowTop(true)
                } else {
                    setShowTop(false)
                }
            })
        }
        watchScroll()

    }, [window.pageYOffset])
    const topFunction = () => {
        window.scroll(0, 0)
    }
    return (
        <>
            {
                showTop ?
                    (
                        <div className='btnTop' >
                            <img className='backtotop' src="https://res.cloudinary.com/freelance01/image/upload/v1648137515/Proyects_Portfolio/BackToP_kat5zv.png" alt="backtotop" onClick={() => topFunction()} />
                        </div >
                    ) : null}
        </>

    )
}
