import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cardlist from './components/Cardlist'


function App() {

  return (
    <>
    <Header />
    <main>
      <center>
        <h1>Practicando para Garamendi</h1>
      </center>
    </main>
    <Cardlist />
    <Footer />
    </>
  )
}

export default App
