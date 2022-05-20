import React from 'react'

export const Skeleton = () => {
    const cant = []

    for (let index = 0; index < 6; index++) {
        cant.push(index)
    }
    return (
        <>

            {cant.map((card, index) => (
                <div key={index} className="col-12 col-md-4 col-lg-3 skeleton-proyect">
                    <div className="card loading" >
                        <div className='image' ></div>
                    </div>
                </div>
            ))}
        </>
    )
}
