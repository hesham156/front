import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import GoogleLogin from '@leecheuk/react-google-login';
import {FaFacebook} from 'react-icons/fa'
import FacebookLogin from 'react-facebook-login';
import { toast } from 'react-toastify';
import { loadGapiInsideDOM } from "gapi-script";

const Door = () => {
  const[active,setActive]=useState('login')
  const redirect = ()=>{   
    window.location.href = '/'
  }   
const addToStorage=(name,email,password,image)=>{
    localStorage.setItem('user',JSON.stringify({'name':name,'email':email,'password':password,'image':image}))
    toast.success("Success")
    redirect()
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
                        <Route path='/login' element={<Login redirect={redirect} addToStorage={addToStorage}/>} />
                        <Route path='/register' element={<Register redirect={redirect} addToStorage={addToStorage}/>} />
                    </Routes>
        </div>
        <div className='social-login'>
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
        </div>

    </div>
  )
}

export default Door