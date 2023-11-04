
import './styles/WordLoader.css'
import React from 'react'
import { AppContext } from '../App'

export default function WordLoader() {
    console.log('rendering WordLoader')

    const { setWord, setBeShowed } = React.useContext(AppContext)




    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const word = new FormData(form).get('word-lenght')
        setWord(word)
        setBeShowed(prevState => !prevState)

    }



    return (
        <div className='word-loader'>
            <form onSubmit={handleSubmit}>
                <input className="word-input" type="text" placeholder="Ingresa el largo de la palabra" name="word-lenght" />
                <button className="word-button" type="submit">Buscar Palabra</button>
            </form>
        </div >
    )
}