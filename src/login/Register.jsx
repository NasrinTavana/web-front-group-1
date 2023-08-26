import React from 'react'
import { ValueProvider } from '../component/function'
import Mainpage from '../component/mainpage'
import { useNavigate } from 'react-router-dom'
import './Register.css'


export default function Register() {
  const navigate = useNavigate()
    return (
    <div className='col-12 col-lg-10'>
        <ValueProvider>
            <Mainpage/>
        </ValueProvider>
        <div>
            <div className='p-3 back-color w-100'>
                <h1>Register</h1>
                <h3>Dashboard  Register</h3>
                <div className='bg-white'>
                    <div className='p-5 row justify-content-center'>
                        {/* <div className=''></div> */}
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className='bg-secondary  text-center text-white'>
                                <p className='display-6 m-0 p-3'>Register</p>
                            </div>
                            <div className='border border-1 '>
                                <form className='p-4 d-flex flex-column'>
                                    <input className='mb-3' type='text' placeholder='Full Name' />
                                    <input className='mb-3' type='email' placeholder='Enter your email'/>
                                    <input className='mb-3' type='password' placeholder='Password' />
                                    <button className='rounded-pill'>Sign Up</button>
                                    <p className='text-center'>Need an account? <button className='bg-white border border-light' onClick={()=>{navigate('/Login')}}>Log in </button></p>
                                    <p className='text-center'>Forget Password</p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
