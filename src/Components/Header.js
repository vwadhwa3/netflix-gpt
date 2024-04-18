import React from 'react'
import { LOGO } from '../Utils/constants'

const Header = () => {
  return (
    <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-44'
            src={LOGO} 
            alt='LOGO' />
    </div>
  )
}

export default Header