
import './styles/WordLoader.css'
import React from 'react'
import { AppContext } from '../App'

export default function WordLoader() {
    console.log('rendering WordLoader')

    const { setWord } = React.useContext(AppContext)




    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const word = new FormData(form).get('word-lenght')
        setWord(word)
        form.reset()

    }

    return (
        <div className='word-loader'>
            <form onSubmit={handleSubmit}>
                <input className="word-input" type="text" placeholder="Ingresa un numero" name="word-lenght" />
                <button className="word-button" type="submit">Buscar Palabra</button>
            </form>
        </div >
    )
}