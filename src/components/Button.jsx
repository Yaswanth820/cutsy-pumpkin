import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='px-4 py-1 border-2'>
      {text}
    </button>
  )
}

export default Button