import React from 'react'
import '../components/Loginform.css'
import Google from '../assets/icons/Google.png'
import apple from '../assets/icons/apple.png'
import Upload from '../app/Upload'
function Loginform(onClick) {
 
  
  const handleSignInClick = () => {
    // Call the onSignIn prop when the sign-in button is clicked
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };
  
  return (
    <>

      <div className=' relative flex flex-col justify-center '>
        <div className='flex flex-col relative'>
          <span className='font-bold text-3xl my-1 absolute bottom-8 left-[2px]'>Sign in</span>
          <span className='py-2 absolute left-1 top-[-25px]'>Sign in to your account</span>
        </div>
        <div className='py-5 flex justify-between px-1'>
          <a href="">
            <button className='bg-white p-1 w-40 relative right-2 flex items-center justify-around text-sm  rounded-xl'>
              <img src={Google} alt="" width={'15px'} height={'15px'} />
              <span className='text-gray-500'>Sign in with Google</span></button>
          </a>
          <a href="">
            <button className='bg-white p-1 w-40 relative right-2 flex items-center justify-around text-sm  rounded-xl'>
              <img src={apple} alt="" width={'15px'} height={'15px'} />
              <span className='text-gray-500'>Sign in with Apple</span>
            </button>
          </a>
        </div>
        <form className='bg-white h-72 flex flex-col rounded-xl justify-between py-6'>
          <div className='flex flex-col'>
            <label className='mx-6 mb-2' htmlFor='email'>Email address</label>
            <input className='bg-gray-100 w-80 rounded-lg mx-6 h-8 px-2' type="text" name="email" required />
          </div>
          <div className='flex flex-col '>
            <label className='mx-6 mb-2' htmlFor='passwd'>Password</label>
            <input className='bg-gray-200 w-80 rounded-lg mx-6 h-8 px-2' type="password" name="passwd" required />
          </div>
          <div className='text-left ml-6 '>
            <a href="/" className='text-blue-700'>Forgot password?</a>
          </div>
          <div className='mx-auto'>
            <button onClick={handleSignInClick} className='color1 text-white text-center p-2 w-80 rounded-lg'>Sign in</button>
          </div>
        </form>
        <div className='text-gray-500 absolute right-[40px] w-72 lg:bottom-24 md:bottom-12 sm:bottom-14 bottom-20' target='_blank'>
          <span>Don't have an account?<a href="/" className='text-blue-700 px-2'>Register here</a>
          </span>
        </div>
      </div>
    </>
  )
}

export default Loginform