import React from 'react'
import logo from './images/logo.svg'
import dan from './images/dan-laptop.png'

export default function App() {
  return (
    <div className='container mx-auto'>
     <header>
      <section className='h-screen grid grid-cols-2 justify-items-center items-center'>
        <div className=''>
          <img className='w-48' src={logo} alt="Future Fullstack logo" />
          <h1>Become a fullstack developer with the world's best online bootcamp</h1>
          <p>
            Join the world's best and most affordable fullstack development bootcamp and master the skills to build 
            real-world applications with expert guidance, hands-on projects, and the latest industry tools.
          </p>
          <ul>
            <li><a href="#">Get started</a></li>
            <li><a href="#">Learn more</a></li>
          </ul>
        </div>
        <img className='w-3/4' src={dan} alt="Dan smiling while holding his laptop" />
      </section>
     </header>
    </div>
  )
}
