import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [user,setuser] = useState()
  const [logout,setlogout] = useState('')

  useEffect(()=>{
      setuser(JSON.parse(localStorage.getItem('user')))
  },[logout])
  return (
    <div className='center w-100 flex-column h-25'>
{user?<div className='center w-100 flex-row'>
      <div className='user center flex-row-reverse'>
        <div className='username'>
          <h1>{user?.name}</h1>
        </div>
        <div className='userimg'>
          
          <img src={user?.image} alt='user' />
        </div>
      </div>
      <button onClick={()=>{
        localStorage.clear()
        setlogout('logout')
      }}>Logout</button>
      </div>:<Link to='/door/login'>Login</Link>
      }
    </div>
  )
}

export default Home