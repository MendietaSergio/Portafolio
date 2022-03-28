import React from 'react'
import { FormContact } from '../FormContact/FormContact'

export const Contact = () => {
  return (
    <>
      <div className='row img-contact' id='contact'>
        <div className='container'>
          <div className='container-contact d-flex'>
            <h1>Contacto</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <FormContact />
      </div>
    </>
  )
}
