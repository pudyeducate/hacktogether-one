import { city, tangan } from '@assets'
import React, { useState } from 'react'
import { FaLink, FaPlay, FaSearch } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Login = () => {
  const [inputValue, setInputValue] = useState('') // State to store input value
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
  function handleClick() {
    openModal()
  }

  const redirect = (model: string) => {
    const url = `/?model=${model}&rtName=T6cU5V#rtPwd=hszWXh`

    window.location.href = url
  }

  const validateInput = () => {
    const pattern = /\/\?model=[a-zA-Z0-9]+&rtName=[a-zA-Z0-9]+#rtPwd=[a-zA-Z0-9]+/
    if (pattern.test(inputValue)) {
      window.location.href = inputValue
    } else {
      Swal.fire({
        title: 'Invalid URL',
        text: 'Please enter a valid URL',
        icon: 'error',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Close',
      })
    }
  }
  return (
    <>
      <header className='w-full flex justify-between items-center  py-4 absolute px-20'>
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
          <p className='text-xl text-gray-400'>Dive into 3D Details, in Sync with Others</p>

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
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40'>
          <div className='bg-white p-6 rounded-lg max-w-2xl w-full '>
            <h2 className='text-2xl font-semibold mb-4'>Choose Models</h2>
            <button
              onClick={() => redirect('city')}
              className='flex items-center p-4 bg-gray-100 rounded-lg hover:shadow-lg hover:cursor-pointer transition-all duration-75'
            >
              <img src={city} alt='City Model' className='w-32 h-32 mr-4' />
              <div className=''>
                <h1 className='text-lg text-left font-medium'>City Models</h1>
                <p className='text-md text-justify'>
                  A detailed 3D representation of an urban landscape, showcasing buildings, streets, and key landmarks of the city. This
                  model provides an immersive view of the city's layout and architectural features, perfect for visualizing city planning,
                  development, or navigation.
                </p>
              </div>
            </button>
            <button onClick={closeModal} className='mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition'>
              Close
            </button>
          </div>
        </div>
      )}
      <div className='mt-12 w-2/5  absolute right-0 bottom-0'>
        <img src={tangan} alt='3D Hand and Shapes' className='w-full h-auto' />
      </div>
    </>
  )
}

export default Login
