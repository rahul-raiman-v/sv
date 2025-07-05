import React from 'react'

export const InputField = (props:React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
  <input 
    className='border border-gray-500 p-3 rounded-xl w-full outline-0' 
    {...props}
    />
  )

}

