import React from 'react'
import './FormContact.css'
import imgPerfil from '../../img/Foto-Perfil.jpg'
import { validations } from '../../utils/Validations/Validations'
import axios from 'axios'
import { URL } from '../../Constants/apiUrl'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
export const FormContact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const submit = async (data) => {
        const { nombre, email, asunto, comentario } = data;
        await axios.post(URL.main + 'api/form', {
            nombre,
            email,
            asunto,
            comentario
        })
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Formulario enviado!',
                    showConfirmButton: false,
                    timer: 3000
                })
            })

        reset()
    }
    return (
        <div className='row'>
            <div className="col-12 container-form d-flex">
                <img className='foto-perfil-form' src={imgPerfil} alt="Foto perfil" />
            </div>
            <div className='col-12 container-input'>
                <form className='' onSubmit={handleSubmit(submit)}>
                    <input type="text" className={errors.nombre ? ("form-control is-invalid") : ("form-control ")} placeholder='Nombre completo' {...register('nombre', validations.nombre)} />
                    {errors.nombre ? <small className='text-danger'>{errors.nombre.message}</small> : null}

                    <input type="email" className={errors.email ? ("form-control is-invalid") : ("form-control")} placeholder='Example@gmail.com' {...register('email', validations.email)} />
                    {errors.email ? <small className='text-danger'>{errors.email.message}</small> : null}

                    <input type="text" className={errors.asunto ? ("form-control is-invalid") : ("form-control")} placeholder='Asunto' {...register('asunto', validations.asunto)} />
                    {errors.asunto ? <small className='text-danger'>{errors.asunto.message}</small> : null}

                    <textarea className={errors.asunto ? ("form-control is-invalid") : ("form-control")} name="comments" maxLength="500" minLength="20" placeholder='Deje su comentario...' {...register('comentario', validations.comentario)}></textarea>
                    {errors.comentario ? <small className='text-danger'>{errors.comentario.message}</small> : null}

                    <button className='btn btn-success' type="submit" id='button'>Enviar</button>
                </form>
            </div>
        </div>
    )
}
