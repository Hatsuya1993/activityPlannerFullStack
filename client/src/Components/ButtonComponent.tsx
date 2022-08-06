import React from 'react'
import {motion} from 'framer-motion'

type ButtonComponentProp = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
}

const ButtonComponent : React.FC<ButtonComponentProp> = ({children, onClick}) => {
  return (
    <motion.button whileTap={{scale: 0.75}} className='bg-white p-3 rounded-md shadow-md' onClick={onClick}>{children}</motion.button>
  )
}

export default ButtonComponent