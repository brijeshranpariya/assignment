import React from 'react'
import Loginform from '../components/Loginform'
import Logo from '../assets/icons/logo.svg'
import Github from '../assets/icons/github.svg'
import Twitter from '../assets/icons/twitter.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Mini from '../assets/icons/mini.svg'
import './Home.css'
function Home() {
 
  return (

    <div className='grid lg:grid-flow-col sm:grid-flow-row h-lvh'>
      <div className='flex flex-col'>
        <span className=' navbg'>
          <img className='h-1/3 relative top-11 right-10' src={Logo} alt="" width={'280px'} />
        </span>
        <span className='h-1/3 relative right-16 flex justify-center items-center text-7xl text-white font-bold'>BASE</span>
        <span className='h-1/3 flex justify-center items-center relative right-16'>
          <a href="/" className='px-4'><img src={Github} alt="" /></a>
          <a href="/" className='px-4'><img src={Twitter} alt="" /></a>
          <a href="/" className='px-4'><img src={Linkedin} alt="" /></a>
          <a href="/" className='px-4'><img src={Mini} alt="" /></a>
        </span>
      </div>
      <div className='flex justify-center'>
        <Loginform />
      </div>
    </div>
  )
}

export default Home