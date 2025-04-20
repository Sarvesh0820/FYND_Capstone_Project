import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {Routes, Route} from "react-router-dom"
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import {ToastContainer} from "react-toastify"

export const backend_url = import.meta.env.VITE_BACKEND

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  
  useEffect(() => {
    localStorage.setItem('token',token)
  }, [token])

  return (
    // <div className='bg-gray-800 min-h-screen'>
    //   <ToastContainer/>
    //   {token === "" ? <Login setToken={setToken} /> :
    //     <>
    //       <Header setToken={setToken} />
    //       <div className='flex w-full text-gray-400'>
    //         <Sidebar />
    //         <div className='w-[70%] mx-auto ml-[max(5vw, 25px)]my-8 text-gray-600 text-base'>
    //           <Routes>
    //             <Route path='/add' element={<Add token ={token} />} />
    //             <Route path='/list' element={<List token ={token} />} />
    //             <Route path='/orders' element={<Orders token ={token}/>} />
    //           </Routes>

    //         </div>
    //       </div>
    //     </>
    //   }
      
    // </div>

    <div className="bg-gray-800 min-h-screen text-gray-500">
  <ToastContainer />
  {token === "" ? (
    <Login setToken={setToken} />
  ) : (
    <>
      <Header setToken={setToken} />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full md:w-[75%] ml-[max(5vw,25px)] my-8 mr-4 bg-white rounded-xl shadow-lg p-6 text-gray-800 overflow-auto">
          <Routes>
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
          </Routes>
        </div>
      </div>
    </>
  )}
</div>
  )
}

export default App