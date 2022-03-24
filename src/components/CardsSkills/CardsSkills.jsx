import React from 'react'
import './CardsSkills.css'
export const CardsSkills = () => {
    return (
        <div className='row row-skills'>
            <div className="col-12 col-md-3 col-lg container-skills pb-2">
                <div className="row icon-skills justify-content-center d-flex ">
                    <i className="fas fa-laptop-code my-2"></i>
                </div>
                <h4 className="text-center">Frontend</h4>
                <div className='d-flex justify-content-center'>

                    <ul className="list-group">
                        <li className="list-group-item"><i className="fas fa-check"></i> HTML/CSS- Bootstrap</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Javascript</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> JQuery</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> React js</li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg container-skills pb-2">
                <div className="row icon-skills justify-content-center d-flex ">
                    <i className="fas fa-database my-2"></i>
                </div>
                <h4 className="text-center">Backend</h4>
                <div className='d-flex justify-content-center'>

                    <ul className="list-group">
                        <li className="list-group-item"><i className="fas fa-check"></i> MySQL</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> NodeJs</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Sequelize</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg container-skills pb-2">
                <div className="row icon-skills justify-content-center d-flex ">
                    <i className="fas fa-tools my-2"></i>
                </div>
                <h4 className="text-center">Herramientas</h4>
                <div className='d-flex justify-content-center'>

                    <ul className="list-group">
                        <li className="list-group-item"><i className="fas fa-check"></i> Visual Studio Code</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Git/Github</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Postman</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Trello</li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg container-skills pb-2">
                <div className="row icon-skills justify-content-center d-flex ">
                <i className="fas fa-server my-2"></i>
                </div>
                <h4 className="text-center">Servidores</h4>
                <div className='d-flex justify-content-center'>

                    <ul className="list-group">
                        <li className="list-group-item"><i className="fas fa-check"></i> Heroku</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Firestore</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Vercel</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Atlas</li>
                        <li className="list-group-item"><i className="fas fa-check"></i> Netlify</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
