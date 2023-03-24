import React from 'react'
import { viewExamples } from '../../utils/Answers'
import './HelpsMessage.css'

export const HelpsMessages = ({ setQuestion, setViewMessage, viewMessage }) => {
    const handleState = (value) => {
        setQuestion(value.target.textContent)
        setViewMessage(false)
    }
    return (
        <div className={`container-helps-message ${viewMessage && 'viewMessage'}`}
            onMouseOut={() => setViewMessage(false)}
            onMouseOver={() => setViewMessage(true)}>
            <ul>
                {viewExamples.map((item) => (
                    <li key={item.id} onClick={(e) => handleState(e)}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}
