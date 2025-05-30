import React from 'react'
import logo from './images/logo.svg'
import dan from './images/dan-laptop.png'

export default function App() {
  return (
    <div className='container mx-auto'>
     <header>
      <section className='h-screen grid grid-cols-2 justify-items-center items-center'>
        <div className=''>
          <img className='w-48 mb-4' src={logo} alt="Future Fullstack logo" />
          <h1 className='text-6xl font-bold text-slate-800 tracking-tight mb-4'>Become a fullstack developer with the world's best online bootcamp</h1>
          <p className='mb-8'>
            Join the world's best and most affordable fullstack development bootcamp and master the skills to build 
            real-world applications with expert guidance, hands-on projects, and the latest industry tools.
          </p>
          <ul className='flex gap-6'>
            <li><a className='bg-sky-500 hover:bg-sky-700 text-white px-8 py-4 rounded-md inline-block' href="#">Get started</a></li>
            <li><a className='bg-slate-400 hover:bg-slate-700 text-white px-8 py-4 rounded-md inline-block' href="#">Learn more</a></li>
          </ul>
        </div>
        <img className='w-3/4' src={dan} alt="Dan smiling while holding his laptop" />
      </section>
     </header>
    </div>
  )
}
