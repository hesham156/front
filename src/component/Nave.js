import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nave = () => {
    const [user,setuser] = useState()

    const [logout,setlogout] = useState('')

  useEffect(()=>{
      setuser(JSON.parse(localStorage.getItem('user')))
  },[logout])
  return (
    <div className='nave center w-100 '>
    <div className='container center flex-row'>
    <div className='logo w-75'>MYAPP</div>
{user?<div className='center w-25 flex-row justify-content-end'>
  <div className='user center flex-row-reverse'>
    <div className='username'>
      
      <ul>
        <li><Link>setting</Link></li>
        <li><Link>profile</Link></li>
        <li><Link>setting</Link></li>
        <li> <button onClick={()=>{
    localStorage.clear()
    setlogout('logout')
  }}>Logout</button></li>

      </ul>
    </div>
    <div className='userimg'>
      <img src={user?.image} alt='user' />
    </div>
  </div>
 
  </div>:<div className='buttons'>
    <Link to='/door/login'>Login</Link>
  <Link to='/door/register'>register</Link></div>
  }
  </div>
  </div>
  )
}

export default Nave