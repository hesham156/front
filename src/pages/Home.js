import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/home.css'
import Header from '../component/Header'
import Nave from '../component/Nave'
function Home() {
  const red = useNavigate()
  const [login,setLogin] = useState()
  useEffect(()=>{
    if(localStorage.getItem('user')){
        console.log('user')
        setLogin(true)
    }else{
      console.log('no user')
      red('/door/login',{replace:true})
      setLogin(false)


    }
  },[login])
  return (
    <>
    {login?
   <div className='home center w-100 flex-column h-25'>

    <Nave  />
 
    
    <Header/>
    </div>:""}
    </>
  )
}

export default Home