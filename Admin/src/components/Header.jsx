import React from 'react'


const Header = ({setToken}) => {
  return (
      <>
          <div className="flex items-center px-[4%] justify-between py-3 sm:py-4 bg-gray-900 shadow-md">
  <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 tracking-wide uppercase">
    Shopwise Admin
  </h1>
  <button
    onClick={() => setToken('')}
    className="bg-white text-gray-900 font-semibold px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-200"
  >
    Logout
  </button>
</div>
      </>
  )
}

export default Header