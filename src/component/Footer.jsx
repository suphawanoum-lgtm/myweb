import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-gray-600 text-white shadow-inner pt-10 py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mx-auto max-w-6xl'>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Zoo with Oum</h1>
                <p>This Website acts 20 animals i like</p>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>About</h1>
                <p>about animals</p>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Contact</h1>
                <p>Email: suphawanoum@gmail.com</p>
                <p>Instragram: oum_.zp</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer