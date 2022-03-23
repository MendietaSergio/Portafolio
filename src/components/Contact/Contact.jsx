import React from 'react'
import { FormContact } from '../FormContact/FormContact'
import './Contact.css'
export const Contact = () => {
  return (
    <>
        <div className='row'>
            <div className='container-contact d-flex'>
                <h1>Contacto</h1>
            </div>
        </div>
        <FormContact/>
    </>
  )
}
