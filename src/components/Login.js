import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const  onClicHandler = ()=>{
        alert('you clicked')
    }
    return (
        <div className='login'>
            <div className='box'>
           <div className='title'><h3>Welcome to Adminstration</h3></div>  
            <div className='form'><input className='input' type='text' name='email' placeholder='Enter your Email' />
            <input type='Password' className='input'  name='email' placeholder='Enter your Password' />
             <button className='button'>Sign In</button>
            </div> 
            </div>
        </div>
    )
}

export default Login
