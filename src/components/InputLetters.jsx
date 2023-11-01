import React from "react"
import './styles/InputLetter.css'

export default function InputLetters({ children }) {
    console.log('rendering InputLetters')

    return (
        <input className="letter-input" type="text" placeholder="_" name="word-lenght" maxLength={1} />
    )
}