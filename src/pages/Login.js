import '../assets/css/login.css'
import GoogleLogin from '@leecheuk/react-google-login';
import {FaFacebook} from 'react-icons/fa'
import { loadGapiInsideDOM } from "gapi-script";
import { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { toast } from 'react-toastify';


const Login = () => {
  const redirect = ()=>{   
    window.location.href = '/'
  }
  
    const [uEmail,setUEmail] = useState()
    const [uPass,setUPass] = useState()
    const [user,setuser] = useState({})
    const addToStorage=(name,email,password,image)=>{
      localStorage.setItem('user',JSON.stringify({'name':name,'email':email,'password':password,'image':image}))
      toast.success("Success")
      redirect()
    }
const loginfun = ()=>{
     if(uEmail && uPass){
       if(uEmail.search('@')>=0){
       addToStorage(uEmail,uEmail,uPass,'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745')
       }else{toast.error("please inter a valid email")}
     }else{toast.error("please inter all data")}
}
const responseFacebook = (response) => {
  addToStorage(response?.name,response?.email,response?.userID,response?.picture.data.url) 
}
 
const responseGoogle = (response) => {
  addToStorage(response?.profileObj.name,response?.profileObj.email,response?.profileObj.googleId,response?.profileObj.imageUrl) 


}
useEffect(() => {
  (async () => {
    await loadGapiInsideDOM();
  })();
});
  return (
  <div className='login w-100 center flex-column'>
    <div className='loginText center flex-column'>
      <h1>Welcome Back</h1>
      <div className='socialLogin'>
      <GoogleLogin
    clientId= "377316420785-rkcjm8tut58icdbkenblo56oqqra54re.apps.googleusercontent.com"
    buttonText=""
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
   <FacebookLogin
    appId="913562719798311"
    fields="name,email,picture"
    icon={<FaFacebook/>}
    textButton=''
    // onClick={componentClicked}
    callback={responseFacebook} />
    </div>
    </div>
     <div className='loginForm center flex-column'>
      <label htmlFor="email">Email</label>
        <input onChange={(e)=>{setUEmail(e.target.value)}} type="email" />
        <label htmlFor="password">Password</label>
        <input onChange={(e)=>{setUPass(e.target.value)}} type="password"/> 
     </div>
     <div className='loginBottom'>
      <input type='checkbox' />
      <button onClick={()=>{loginfun()}} className="loginBtn"> Login </button>
     </div>
  </div>
  )
}

export default Login