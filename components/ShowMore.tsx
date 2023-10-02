"use client"

import { ShowMoreProps } from "@/types"
import { CustomButton } from "."


const ShowMore = ({ pageNumber, isNext, setLimit}: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    
    setLimit(newLimit)
}


  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
          <CustomButton 
            title='Show More'
            btnType='button'
            containerStyles='bg-primary-blue text-white p-4 rounded-full'
            handleClick={handleNavigation}
          />    
        )}
    </div>
  )
}

export default ShowMore