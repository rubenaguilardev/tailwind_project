import React from 'react'
import logo from './images/logo.svg'
import dan from './images/dan-laptop.png'
import Feature from './Feature.jsx'

export default function App() {
  return (
    <body className='text-md md:text-lg text-slate-600'>
      <div className='container mx-auto p-5 md:p-0'>
      <header>
        <section className='md:h-screen grid md:grid-cols-2 justify-items-center items-center'>
          <div className=''>
            <img className='w-48 mb-4' src={logo} alt="Future Fullstack logo" />
            <h1 className='text-4xl md:text-6xl font-bold text-slate-800 tracking-tight mb-4'>Become a fullstack developer with the world's best online bootcamp</h1>
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
      <Feature/>
      <section className='flex justify-center mb-8 md:mb-64'>
        <div className='bg-sky-500 max-w-3xl md:rounded-md p-4 sm:p-8 md:p-12 text-white text-center'>
          <h2 className='mt-2 mb-4 text-4xl font-bold tracking-tight text-pretty'>It's time to boost your career</h2>
          <p className='mb-4'>Your new future is one click away</p>
          <a className='bg-white hover:bg-sky-700 text-sky-500 px-8 py-4 rounded-md inline-block' href="#">Get started</a>
        </div>
        
      </section>

      <footer className='text-center mb-4'>
        <span>@ 2025 Future Fullstack</span>
      </footer>
    </body>
  )
}
