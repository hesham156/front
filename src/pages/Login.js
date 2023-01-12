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
    const addToStorage=()=>{
      console.log(user)

      localStorage.setItem('user',JSON.stringify(user))
      toast.success("Success")
      // redirect()
    }
const loginfun = ()=>{
     if(uEmail && uPass){
       if(uEmail.search('@')>=0){
        toast.success("Success")
        redirect()
       }else{toast.error("please inter a valid email")}
     }else{toast.error("please inter all data")}
}
const responseFacebook = (response) => {
  console.log(response);
  setuser({'name':response.name,'email':response.email,'password':response.userID,'image':response.picture.data.url})
  addToStorage() 
}
 
const responseGoogle = (response) => {
  console.log(response);
  setuser({'name':response?.profileObj.name,'email':response?.profileObj.email,'password':response?.profileObj.googleId,'image':response?.profileObj.imageUrl})
  addToStorage()

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
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password"/> 
     </div>
     <div className='loginBottom'>
      <input type='checkbox' />
      <button className="loginBtn"> Login </button>
     </div>
  </div>
  )
}

export default Login