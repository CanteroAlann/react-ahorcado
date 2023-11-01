import React from "react"
import './styles/InputLetter.css'

export default function InputLetters({ children }) {
    const number = parseInt(children)
    function compareInput(e) {
        const input = e.target
        const letter = parseInt(input.value)
        console.log(letter)
        console.log(number)
        if (letter === number) {
            console.log('correcto')
        }
        else {
            console.log('incorrecto')
        }
        e.target.value = ''
    }


    return (
        <input className="letter-input" type="text" placeholder="_" name="word-lenght" maxLength={1} onInput={compareInput} />
    )
}