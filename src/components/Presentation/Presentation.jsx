import React from 'react'
import imgPerfil from '../../img/Foto-Perfil.jpg'
import './presentation.css'
export const Presentation = () => {
  return (
    <div className='img-header' >
      <div className='row row-presentation'>
        <div className='col-12 col-md-6'>
          <div className='img-foto'>
            <img className='foto-perfil' src={imgPerfil} alt="Foto perfil" />
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='container-info'>
            <span>Hola, mi nombre es</span>
            <h1>Mendieta Sergio</h1>
            <p className='text-justify'>
              Soy desarrollador full stack especializado en frontend y backend para aplicaciones web complejas y escalables. Actualmente estoy en busca de mi primer empleo IT. En mi
              página de <a href="https://github.com/MendietaSergio" rel="noreferrer" target="_blank">Github</a> subo
              proyectos que voy aprendiendo en internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
