

import './App.css'
import React from 'react'
import WordLoader from './components/WordLoader'

const AppContext = React.createContext()

export default function App() {

  const [word, setWord] = React.useState('')
  const [letters, setLetters] = React.useState([])

  return (
    <AppContext.Provider value={{ setWord, setLetters }}>
      <h1>Ahorcado</h1>
      <WordLoader />
      <div className="letters">
        {letters}
      </div>
    </AppContext.Provider>
  )
}


export { AppContext }
