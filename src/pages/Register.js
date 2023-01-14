import React, { useEffect } from 'react'


const Register = ({anima}) => {
  useEffect(()=>{
    anima()

  },[])



  return (
    <div className="container w-100 center flex-column">
    <div className='loginText center flex-column'>
      <h1>Welcome Back</h1>
    
    </div>
     <div className='loginForm center flex-column'>
<form autoComplete="new-password">
      <div className='input'>
     <label htmlFor="name">Your Name</label>
        <input autoComplete="new-password" type="text"/> 
        </div>
        <div className='input'>
      <label htmlFor="email">Email</label>
        <input autoComplete="new-password"  type="email" />
        </div>
        <div className='input'>
          <label htmlFor="password">Password</label>
          <input autoComplete="new-password"  type="password"/> 
        </div>
      <div className='input'>
        <label htmlFor="Repeat password">Repeat Password</label>
        <input autoComplete="new-password"  type="password"/>
         </div>
         </form>
     </div>
     <div className='loginBottom'>
      <input type='checkbox' />
      <button  className="loginBtn"> Login </button>
     </div>
  </div>
    )
}

export default Register