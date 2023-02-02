import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const Nave = () => {
    const [user,setuser] = useState()
     const red = useNavigate()
    const [logout,setlogout] = useState('')

  useEffect(()=>{
      setuser(JSON.parse(localStorage.getItem('user')))

  },[logout])
  return (
    <div className='nave center w-100 '>
    <div className='container center flex-row'>
    <div className='logo w-75'>MYAPP</div>
<div className='center w-25 flex-row justify-content-end'>
  <div className='user center flex-row-reverse'>
    <div className='username'>
      
      <ul>
        <li><Link>setting</Link></li>
        <li><Link>profile</Link></li>
        <li><Link>setting</Link></li>
        {user?.email==="h456ad@gmail.com"?<><li><Link>users</Link></li><li><Link>add task</Link></li></>:''}
        
        <li> <button onClick={()=>{
    localStorage.clear()
    setlogout('logout')
    red('/door/login',{replace:true})
  }}>Logout</button></li>

      </ul>
    </div>
    <div className='userimg'>
      <img src={user?.image} alt='user' />
    </div>
  </div>
 
  </div>
   {/* :<div className='buttons'>
     <Link to='/door/login'>Login</Link>
   <Link to='/door/register'>register</Link></div>
  } */}
  </div>
  </div>
  )
}

export default Nave