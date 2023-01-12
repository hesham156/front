import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [user,setuser] = useState()
  useEffect(()=>{
      setuser(JSON.parse(localStorage.getItem('user')))
  },[user])
  return (
    <div>
{user?<div>
      <div className='user'>
        <div className='username'>
          <h1>{user?.name}</h1>
        </div>
        <div className='userimg'>
          
          <img src={user?.image} alt='user' />
        </div>
      </div>
      <button onClick={()=>{
        localStorage.clear()
      }}>Logout</button>
      </div>:<Link to='/door/login'>Login</Link>
      }
    </div>
  )
}

export default Home