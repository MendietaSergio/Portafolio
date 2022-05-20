import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL } from '../../Constants/apiUrl'
import { Skeleton } from '../Skeleton/Skeleton'
import { CardsProyects } from './CardsProyects'


export const ContainerProyects = () => {
    const [proyects, setProyects] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProyects = async () => {
            await axios.get(URL.main + 'api/proyects')
                .then((res) => {
                    setProyects(res.data.listProyects)
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    setTimeout(() =>{
                        setLoading(false)
                    }, 2000)
                })
        }
        getProyects()
    }, [])

    return (
        <div className='row row-proyects-cards'>
            {loading ? (
                <>
                    <Skeleton />
                </>
            ) : (
                proyects.map((proyect) => (
                    <div key={proyect._id} className="col-12 col-md-4 col-lg-3 container-proyects">
                        <CardsProyects  proyect={proyect} />
                    </div>
                ))
            )}
        </div>
    )
}

