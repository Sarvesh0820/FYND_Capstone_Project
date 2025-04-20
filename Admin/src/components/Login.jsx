import axios from "axios"
import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import { backend_url } from '../App';
import {toast} from "react-toastify"

const Login = ({setToken}) => {
    const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backend_url + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md'>
          <h1 className='text-yellow-500 text-2xl font-bold mb-4'>Admin Login</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-yellow-700 mb-2'>Email Address</p>
                        <input
                            className='rounded-md w-full px-3 py-2 border border-gray-300' type="email" placeholder='your@email'
                            required
                            ref={emailInputRef}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-yellow-700 mb-2'>Password</p>
                        <input
                            className='rounded-md w-full px-3 py-2 border border-gray-300' type="password" placeholder='Enter your password' required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <button className='mt-2 w-full px-4 py-2 rounded-md text-white bg-orange-500' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login