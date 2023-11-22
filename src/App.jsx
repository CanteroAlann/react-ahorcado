

import './App.css'
import React from 'react'
import WordLoader from './components/WordLoader'
import InputLetters from './components/InputLetters'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const AppContext = React.createContext()


function createInputs(word) {
  let letters = []
  for (let i = 0; i < parseInt(word); i++) {
    letters.push(
      <InputLetters key={i}>{i}</InputLetters>
    )
  }
  return letters

}

export default function App() {

  const [word, setWord] = React.useState('')
  const [beShowed, setBeShowed] = React.useState(true)

  const letters = createInputs(word)

  return (
    <AppContext.Provider value={{ setWord, setBeShowed }}>
      <h1>Ahorcado</h1>
      {beShowed && <WordLoader />}
      <div className="letters">
        {letters}
      </div>
    </AppContext.Provider>
  )
}


export { AppContext }
