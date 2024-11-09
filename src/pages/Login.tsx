import { tangan } from '@assets'
import React, { useState } from 'react'
import { FaLink, FaPlay, FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputValue, setInputValue] = useState('') // State to store input value
  const navigate = useNavigate()
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
  function handleClick() {
    const firstVar = generateRandomString(6)
    const secVar = generateRandomString(6)

    const url = `http://192.168.40.92:5173/viewmodel?rtName=${firstVar}#rtPwd=${secVar}`

    window.location.href = url
  }

  const validateInput = () => {
    const pattern = /\?rtName=[a-zA-Z0-9]+#rtPwd=[a-zA-Z0-9]+/ // Regex pattern for ?rtName=***#rtPwd=****
    if (pattern.test(inputValue)) {
      window.location.href = inputValue
      // Add further actions, such as redirecting or submitting
    } else {
      alert('Input is not valid!')
    }
  }
  return (
    <>
      <header className='w-full flex justify-between items-center px-8 py-4 absolute px-20'>
        <div className='text-4xl font-bold text-green-300'>DimenSync</div>
        <div className='flex space-x-4'></div>
      </header>
      <main className=' flex px-20 items-center space-y-6 bg-[#101010] h-[100vh]'>
        <div className='side flex flex-col gap-5'>
          <h1 className='text-6xl font-bold text-white'>
            Hello,
            <br />
            Welcome to <span className='text-green-300'>DimenSync</span>
          </h1>
          <p className='text-lg text-gray-400'>Discovering new way to present your 3D Asset</p>

          <div className='flex space-x-4'>
            <button
              className='flex items-center px-6 py-3 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600'
              onClick={handleClick}
            >
              <FaPlay className='mr-2' />
              Present Now
            </button>
            <div className='flex items-center px-4 py-3 border-2 border-green-500 rounded-full hover:bg-opacity-20 bg-green-100'>
              <FaLink className='mr-2 text-green-500' />
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter Link'
                className='bg-transparent text-white focus:outline-none placeholder-gray-400'
              />
              <button className='flex items-center px-3 py-1 text-white bg-green-500 rounded-full hover:bg-green-600'>
                <FaSearch onClick={validateInput} />
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className='mt-12 w-2/5  absolute right-0 bottom-0'>
        <img src={tangan} alt='3D Hand and Shapes' className='w-full h-auto' />
      </div>
    </>
  )
}

export default Login
