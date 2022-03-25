import React from 'react'

import { CardsSkills } from '../CardsSkills/CardsSkills'

export const Skills = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-center my-4'>
                        Habilidades
                    </h2>
                </div>
                <div className="col-12">
                    <div className='text-center container-info-skills'>
                        <p className='info-skills'>
                            Soy graduado de <span className="span-DG">Digital House</span> , donde realicé
                            el curso
                            de Desarrollador Full Stack. En la misma, aprendí diferentes lenguajes y herramientas de
                            programación. A
                            continuación se muestra una descripcion general rápida de mis pincipales tecnicas y herramientas
                            que
                            utilizo.
                        </p>
                    </div>
                </div>
            </div>
            <CardsSkills />
        </div>
    )
}
