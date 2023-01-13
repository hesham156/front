import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Door = () => {
  const[active,setActive]=useState('login')

  useEffect(() => {
  setActive(window.location.pathname.replace('/door/',''))
  }, []);
  return (
    <div className='center w-100 vh-100'>
        <div className='door'>

        <div className='doorTop center'>
                <Link className={active==='login'?"active":""} onClick={()=>{setActive('login')}} to='login'>login</Link>
                <Link className={active==='register'?"active":""} onClick={()=>{setActive('register')}} to='register'>register</Link>
        </div>
        <div className='doorBootom'>
                    <Routes>
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                    </Routes>
        </div>
        </div>

    </div>
  )
}

export default Door