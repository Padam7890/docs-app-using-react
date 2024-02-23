import React from 'react'

const Button = ({action, color, position,icon}) => {
  return (
    <button
    onClick={action}
    className={`${position} z-[9999] ${color}  text-2xl m-10 rounded-sm text-white p-6`}
  >
    {icon}
  </button>
  )
}

export default Button