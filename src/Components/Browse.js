import React, { useState } from 'react'

export const Browse = () => {
      const [isActive,setIsActive] = useState(true)
      const toggleActiveButton = () => {
        setIsActive(!isActive);
      };
  return (
    <div className='absolute top-[50%] left-[50%]'> 
        <button className={isActive?"bg-green-700 w-20 h-16 rounded-md":"bg-red-700 w-20 h-16 rounded-md"} onClick={toggleActiveButton}> 1 </button>
        <button className={!isActive?"bg-green-700 w-20 h-16 rounded-md":"bg-red-700 w-20 h-16 rounded-md"} onClick={toggleActiveButton}> 2 </button>       
    </div>
  )
  
}

export default Browse ;