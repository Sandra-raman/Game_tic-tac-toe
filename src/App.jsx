import { Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './Components/Start/Start'
import TicTacToe from './Components/TicTacToe/TicTacToe'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/game' element={<TicTacToe/>}/>
    </Routes>
    </>
  )
}

export default App
