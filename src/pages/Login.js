import { useState } from 'react'
import '../assets/css/login.css'
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const [uEmail,setUEmail] = useState()
    const [uPass,setUPass] = useState()
const loginfun = ()=>{
     if(uEmail && uPass){
       if(uEmail.search('@')>=0){
        toast.success("Success")
       }else{toast.error("please inter a valid email")}
     }else{toast.error("please inter all data")}
}
  return (
  <div className='login w-100 center flex-column'>
    <div className='loginText'>
      <h1>Welcome Back</h1>
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    </div>
     <div className='loginForm center flex-column'>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
     </div>
     <div className='loginBottom'>
      <input type='checkbox' />
      <button className="loginBtn"> Login </button>
     </div>
  </div>
  )
}

export default Login