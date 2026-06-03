import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { alunos } from './data/alunos'
import Alunos from './components/Alunos'
import ListaPendencia from './components/ListaPendencia'
import ContarPendencias from './components/ContarPendencias'

function App() {
  return (
    <>
      <div className='titulo'>
        <h1>Saracuruna Upskills</h1>
      </div>
      <Alunos alunos={alunos} />
      <div className='dependencias'>
        <ListaPendencia alunos={alunos} />
        <ContarPendencias alunos={alunos} />
      </div>
    </>
  )
}

export default App
