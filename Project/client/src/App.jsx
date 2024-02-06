// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
      <div>
        <Navbar />
        {/* <Main /> */}
        <main className="">
        <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default App
