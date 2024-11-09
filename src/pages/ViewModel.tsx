import { ConnectedUsers, useStateTogether } from 'react-together'
import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, useGLTF } from '@react-three/drei'
import { kembaraLoka } from '@assets'
import Swal from 'sweetalert2' // Import SweetAlert2

export default function ViewModel(props) {
  const { nodes, materials } = useGLTF(kembaraLoka)
  const [clickedIndex, setClickedIndex] = useStateTogether('scale_1', null)
  const group = useRef()
  const [scale, setScale] = useState([1, 1, 1])

  // Trigger SweetAlert with URL when the component is mounted
  useEffect(() => {
    const currentUrl = window.location.href

    Swal.fire({
      title: 'Current URL',
      text: currentUrl,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Copy to clipboard',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.isConfirmed) {
        // Try to copy the URL to the clipboard
        console.log(navigator)
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
              Swal.fire('Copied!', 'The URL has been copied to your clipboard.', 'success')
            })
            .catch((err) => {
              // In case clipboard access fails (e.g., if the browser is restrictive)
              Swal.fire('Error!', 'Failed to copy the URL.', 'error')
              console.error('Clipboard copy failed: ', err)
            })
        } else {
          Swal.fire('Error!', 'Clipboard API not supported in your browser.', 'error')
        }
      }
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
    <div>
      <Canvas className='!h-[100vh] !w-screen bg-white' camera={{ position: [100, 1, 2] }} shadows>
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={Math.PI * 2} />
        <group ref={group} {...props} dispose={null}>
          <mesh
            name='GSP'
            geometry={nodes.GSP.geometry}
            material={materials.GSP_BAKED}
            position={[-6.3618, 0.039, -3.1505]}
            rotation={[-Math.PI, 0.3172, -Math.PI]}
            scale={clickedIndex === 0 ? scale : [1, 1, 1]}
            onPointerDown={() => handleClick(0)}
          />

          <mesh
            name='FEB'
            geometry={nodes.FEB.geometry}
            material={materials.FEB_BAKED}
            position={[1.8983, 3.5522, 4.199]}
            rotation={[Math.PI, -1.3054, Math.PI]}
            scale={clickedIndex === 1 ? scale : [1, 1, 1]}
            onPointerDown={() => handleClick(1)}
          />

          {/* Additional meshes */}
          <mesh name='BASE001' geometry={nodes.BASE001.geometry} material={materials.BASE_BAKED_BL} position={[0.9097, 0, -2.8808]} />
          <mesh name='BASE002' geometry={nodes.BASE002.geometry} material={materials.BASE_BAKED_TR} position={[0.9097, 0, -2.8808]} />
          <mesh name='BASE003' geometry={nodes.BASE003.geometry} material={materials.BASE_BAKED_TL} position={[0.9097, 0, -2.8808]} />
          <mesh name='BASE004' geometry={nodes.BASE004.geometry} material={materials.BASE_BAKED_BR} position={[0.9097, 0, -2.8808]} />
        </group>

        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
    </div>
  )
}
