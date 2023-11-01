

import './App.css'
import React from 'react'
import WordLoader from './components/WordLoader'

const AppContext = React.createContext()


function createInputs(word) {
  let letters = []
  for (let i = 0; i < parseInt(word); i++) {
    letters.push(
      <input key={i} placeholder='_' className="letter-input" />
    )
  }
  return letters

}

export default function App() {
  console.log('rendering App')

  const [word, setWord] = React.useState('')

  const letters = createInputs(word)

  return (
    <AppContext.Provider value={{ setWord }}>
      <h1>Ahorcado</h1>
      <WordLoader />
      <div className="letters">
        {letters}
      </div>
    </AppContext.Provider>
  )
}


export { AppContext }
