import React from 'react'
import { useNavigate } from 'react-router'

const Button = ({btnText , linkClick}) => {
  const navigate = useNavigate();

  // const linkClick = () => {
  //   navigate(linkText)
  // }
  return (
    <>
        <button className='w-full  h-12 border rounded-xl  bg-blue-500 hover:bg-black text-center text-white' onClick={linkClick} >
            {btnText}
        </button>
    </>
  )
}

export default Button