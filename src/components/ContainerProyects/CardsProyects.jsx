import React from 'react'
import './CardsProyects.css'
export const CardsProyects = ({ proyect }) => {
    return (
        <div className="d-flex justify-content-center">

            <div className="card" >
                <img className='card-img' src={proyect.titleImg} alt="titles" />
                <div className='card-info'>
                    <div className="card-title">{proyect.title}</div>

                    <a
                        href={proyect.githubUrl}
                        rel="noreferrer"
                        target="_blank"
                        className='icon-github'
                    >
                        <i className="fab fa-github-alt" height='50px'></i>
                    </a>
                    <a
                        href={proyect.deployUrl}
                        rel="noreferrer"
                        target="_blank"
                        className='icon-web'
                    >
                        <i className="fas fa-globe" height='50px'></i>

                    </a>
                </div>
            </div>
        </div>
    )
}