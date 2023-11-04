import React from "react"
import './styles/InputLetter.css'

export default function InputLetters({ children }) {

    const [isRight, setIsRight] = React.useState(false)
    const [value, setValue] = React.useState('')

    const number = parseInt(children)
    function compareInput(e) {
        const input = e.target
        const letter = input.value
        if (parseInt(letter) === number) {
            setIsRight(prevState => !prevState)
            setValue(letter)
        }
        else {
            console.log('incorrecto')
        }
        e.target.value = ''
    }


    return (
        isRight ? <h2>{value}</h2> : <input className="letter-input" type="text" placeholder="_" name="word-lenght" maxLength={1} onInput={compareInput} />
    )
}