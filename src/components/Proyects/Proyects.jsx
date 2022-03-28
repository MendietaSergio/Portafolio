import React from 'react'
import { ContainerProyects } from '../ContainerProyects/ContainerProyects'

export const Proyects = () => {
    return (
        <>
            <div className='row row-proyects' id='proyects'>
                <div className="container">
                    <div className='img-proyects'>
                        <div className="col-12 d-flex container-title-proyects">
                            <h1>Proyectos</h1>
                        </div>
                        <div className="col-12">
                            <p className='container-info-proyects'>En esta sección están algunos de los proyectos que voy
                                realizando de forma autónoma. Algunos estan hechos de cursos que
                                realicé o clonando páginas para ir mejorando la practica,
                                implementando mejoras, ya sea visuales o funcionales.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>

            <ContainerProyects />
            </div>
        </>
    )
}
