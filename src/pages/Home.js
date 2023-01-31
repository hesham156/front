import React from 'react'
import '../assets/css/home.css'
import Header from '../component/Header'
import Nave from '../component/Nave'
function Home() {
  
  return (
    <div className='home center w-100 flex-column h-25'>
    <Nave />
    <Header/>
    </div>
    
  )
}

export default Home