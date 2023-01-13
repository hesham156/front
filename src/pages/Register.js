import React from 'react'


const Register = () => {


  return (
    <div className="container w-100 center flex-column">
    <div className='loginText center flex-column'>
      <h1>Welcome Back</h1>
    
    </div>
     <div className='loginForm center flex-column'>
     <label htmlFor="name">Your Name</label>
        <input  type="text"/> 
      <label htmlFor="email">Email</label>
        <input  type="email" />
        <label htmlFor="password">Password</label>
        <input  type="password"/> 
        <label htmlFor="Repeat password">Repeat Password</label>
        <input  type="password"/> 
     </div>
     <div className='loginBottom'>
      <input type='checkbox' />
      <button  className="loginBtn"> Login </button>
     </div>
  </div>
    )
}

export default Register