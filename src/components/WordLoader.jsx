
import './styles/WordLoader.css'
import React from 'react'
import { AppContext } from '../App'

export default function WordLoader() {

    const { setWord, setLetters } = React.useContext(AppContext)

    function createInputs() {
        const word = document.querySelector('.word-input').value
        const wordLength = word.length
        const letters = []
        for (let i = 0; i < wordLength; i++) {
            letters.push(
                <input key={i} placeholder='X' className="letter-input" />
            )
        }
        setLetters(letters)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const word = formData.get('word')
        setWord(word)
        form.reset()
    }

    return (
        <div className='word-loader'>
            <form onSubmit={handleSubmit}>
                <input className="word-input" type="text" placeholder="Ingresa una palabra" name="word" />
                <button className="word-button" type="submit" onClick={createInputs}>Cargar</button>
            </form>
        </div >
    )
}