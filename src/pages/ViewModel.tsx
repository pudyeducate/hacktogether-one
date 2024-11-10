import { ConnectedUsers, useStateTogether } from 'react-together'
import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, useGLTF } from '@react-three/drei'
// import { kembaraLoka } from '@assets'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaHireAHelper, FaQuestion } from 'react-icons/fa'

export default function ViewModel(props) {
  // const { nodes, materials } = useGLTF(kembaraLoka)
  const [clickedIndex, setClickedIndex] = useStateTogether('scale_1', null)
  const group = useRef()
  const [scale, setScale] = useState([1, 1, 1])

  useEffect(() => {
    const currentUrl = window.location.href

    Swal.fire({
      title: 'Current URL',
      text: currentUrl,
      icon: 'info',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Close',
    })
  }, [])

  const handleClick = (index) => {
    if (clickedIndex === index) {
      setScale([1, 1, 1])
      setClickedIndex(null)
    } else {
      setScale([1.2, 1.2, 1.2])
      setClickedIndex(index)
    }
  }

  return (
    <div className='h-screen w-screen bg-[#101010] flex flex-col justify-center gap-5 px-36'>
      <div className='w-full flex justify-between'>
        <h1 className='text-3xl font-thin text-white'>DimenSync</h1>
        <div className='flex gap-5 items-center'>
          <ConnectedUsers />
          <FaQuestion
            className='text-white border hover:cursor-pointer'
            onClick={() => {
              Swal.fire({
                title: 'Current URL',
                text: window.location.href,
                icon: 'info',
                showCancelButton: true,
                showConfirmButton: false,
                cancelButtonText: 'Close',
              })
            }}
          />
        </div>
      </div>
      <Canvas className='!h-[80vh] !w-full bg-white rounded-2xl' camera={{ position: [100, 1, 2] }} shadows>
        {/* <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={Math.PI * 2} /> */}
        <ambientLight intensity={3} />

        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
      <div className='w-full flex justify-end'>
        <Link to='/' className='flex flex-col items-center justify-center py-2 px-3 bg-red-600 rounded-lg text-white'>
          <FaArrowRight />
          <span className='text-xs font-semibold mt-1'>END</span>
        </Link>
      </div>
    </div>
  )
}
