import React, { useState, useEffect, useRef } from 'react'
import { answers, examples } from '../../utils/Answers'
import { URL } from "../../Constants/apiUrl";
import './Chat.css'
const { VITE_APP_APIKEY } = import.meta.env

export const Chat = ({ toggle, setToggle }) => {
    const [messages, setMessages] = useState([
        {
            id: "1",
            type: "bot",
            text: `Hola, soy un bot 🤖 preparado para contestar algunas preguntas sobre Sergio 👩🏻‍💻. Haceme tu pregunta.`
        }
    ])
    const [question, setQuestion] = useState("")
    const [loading, setLoading] = useState(false)
    const container = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loading) return;
        if (question === '') return
        setLoading(true)
        setQuestion("")
        setMessages((messages) => messages.concat({
            id: String(Date.now()), type: "user", text: question
        }))
        const { classifications } = await fetch(URL.chat, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${VITE_APP_APIKEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "large",
                inputs: [question],
                examples: examples
            })
        }).then((res) => res.json())
        setMessages((messages) => messages.concat({
            id: String(Date.now()),
            type: "bot",
            text: answers[classifications[0].prediction] || answers["Dudas"],
        }))
        setLoading(false)
    }
    useEffect(() => {
        container.current?.scrollTo(0, container.current.scrollHeight)
    }, [messages, toggle])
    return (
        <main className={`main-chatbot ${toggle ? 'main-chatbotTrue' : 'main-chatbotFalse'}`}>
            {toggle ? (
                <div className="container-info-chat border border-gray-400">
                    <button className='chatClosed' onClick={() => setToggle(false)}>×</button>
                    <div ref={container} className="container-text">
                        {messages.map((message) => (
                            <div
                                className={`container-message text-white ${message.type === "bot" ? "messageBot" : "messageUser"}`}
                                key={message.id}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form className="formQuestion" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Quien sos?"
                            className="inputQuestion px-4 py-2 rounded rounded-r-none border"
                            name="question"
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                        />
                        <button
                            disabled={loading}
                            className={`px-4 py-2 btn btn-primary rounded-lg rounded-l-none ${loading ? 'bg-blue-300' : 'bg-blue-500'}`}
                            type="submit">↩</button>
                    </form>
                </div>
            ) : (
                <img onClick={() => setToggle(true)} className='container-imgChat' src='https://www.pngmart.com/files/16/Speech-Chat-Icon-PNG-Transparent-Image.png' title='' />
            )}
        </main>
    )
}
