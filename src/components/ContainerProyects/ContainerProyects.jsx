import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL } from '../../Constants/apiUrl'
import { CardsProyects } from './CardsProyects'


export const ContainerProyects = () => {
    const [proyects, setProyects] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProyects = async () => {
            await axios.get(URL.main + 'api/proyects')
                .then((res) => {
                    console.log("res => ", res.data.listProyects);
                    setProyects(res.data.listProyects)
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
        getProyects()
    }, [])

    return (
        <div className='row row-proyects-cards'>
            {loading ? (
                <>
                    <h1 className='text-center'>Cargando...<i className="fas fa-spinner fa-pulse" /></h1>
                </>
            ) : (
                proyects.map((proyect) => (
                    <div className="col-12 col-md-4 col-lg-3 container-proyects">
                        <CardsProyects key={proyect._id} proyect={proyect} />
                    </div>
                ))
            )}
        </div>
    )
}

