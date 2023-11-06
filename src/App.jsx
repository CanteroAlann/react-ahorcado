

import './App.css'
import React from 'react'
import WordLoader from './components/WordLoader'
import InputLetters from './components/InputLetters'
import EndGame from './components/EndGame'

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
  const [isEnd, setIsEnd] = React.useState(false)

  const letters = createInputs(word)

  return (
    <AppContext.Provider value={{ setWord, setBeShowed, setIsEnd }}>
      <h1>Ahorcado</h1>
      {beShowed && <WordLoader />}
      <div className="letters">
        {letters}
      </div>
      {isEnd && <EndGame />}
    </AppContext.Provider>
  )
}


export { AppContext }
