import React from "react"
import './styles/InputLetter.css'
import { AppContext } from '../App'

//Este componente recibe un numero desde el componente WordLoader
//y crea una cantidad de inputs igual a ese numero ademas compara los valores
//

export default function InputLetters({ children }) {

    const { setIsEnd } = React.useContext(AppContext)
    const [isRight, setIsRight] = React.useState(false)
    const [value, setValue] = React.useState('')
    const amount_errors = React.useRef(0)

    const number = parseInt(children)
    function compareInput(e) {
        const input = e.target
        const letter = input.value
        if (parseInt(letter) === number) {
            setIsRight(prevState => !prevState)
            setValue(letter)
        }
        else {
            amount_errors.current++
            if (amount_errors.current === 6) {
                setIsEnd(prevState => !prevState)


            }

        }
        e.target.value = ''
    }


    return (
        isRight ? <h2>{value}</h2> : <input className="letter-input" type="text" placeholder="_" name="word-lenght" maxLength={1} onInput={compareInput} />
    )
}