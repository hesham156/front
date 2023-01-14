import '../assets/css/login.css'

import {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const Login = ({redirect,addToStorage,anima}) => {
    const [uEmail,setUEmail] = useState()
    const [uPass,setUPass] = useState()
    useEffect(()=>{
      anima()
  
    },[])
  
  
  
const loginfun = ()=>{
     if(uEmail && uPass){
       if(uEmail.search('@')>=0){
       addToStorage(uEmail,uEmail,uPass,'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745')
       redirect()
       }else{toast.error("please inter a valid email")}
     }else{toast.error("please inter all data")}
}


  return (
  <div className='login w-100 center flex-column'>
    <div className='loginText center flex-column'>
      <h1>Welcome Back</h1>
    
    </div>
     <div className='loginForm center flex-column'>
     <div className='input'>
      <label htmlFor="email">Email</label>
        <input onChange={(e)=>{setUEmail(e.target.value)}} type="email" />
        </div>
        <div className='input'>
        <label htmlFor="password">Password</label>
        <input onChange={(e)=>{setUPass(e.target.value)}} type="password"/> 
        </div>
     </div>
     <div className='loginBottom'>
      <input type='checkbox' />
      <button onClick={()=>{loginfun()}} className="loginBtn"> Login </button>
     </div>
  </div>
  )
}

export default Login