import React from 'react'
import downloadCV from '../../pdf/CV_Sergio_Mendieta-FullStack_2022.pdf'
export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark position-relative">
            <div className="container">
                <ul className='social-list list-inline mb-0'>
                    <li className='list-inline-item'>
                        <a
                            href="https://www.linkedin.com/in/mendietasergio/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className='icon-social'
                        >
                            <i className="fab fa-linkedin" height='50px'></i>
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a
                            href="https://github.com/MendietaSergio"
                            rel="noreferrer"
                            target="_blank"
                            className='icon-social'
                        >
                            <i className="fab fa-github-alt" height='50px'></i>
                        </a>
                    </li>
                </ul>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div id="navbarCollapse" className="collapse navbar-collapse text-uppercase">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a href="#presentation" title='Sobre mi' className="nav-link active">
                                Sobre mi
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#proyects" title='Contacto' className="nav-link active">
                                Proyectos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href={downloadCV}
                                download="CV-Mendieta-Sergio.pdf" title='Descargar CV' className="nav-link active">
                                Descargar CV
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" title='Contacto' className="nav-link active">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
