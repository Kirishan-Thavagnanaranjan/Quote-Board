import React from 'react'
import Board from './components/board.jsx'
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-svh'>
        <Board />
        <Toaster />
    </div>
  )
}

export default App