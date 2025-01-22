'use client'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container flex flex-nowrap justify-between align-middle mb-3 mt-3'>
        
            <div className="">
                <a href='./Neo See Software Resume.pdf' target='blank'>
                    Resume
                </a>
            </div>
            <div className="">
                <p>nseedev@gmail.com | (209) 227-3435</p>
            </div>
            <div className="">
                <button onClick={()=> window.open("https://www.linkedin.com/in/neo-see/")}  className='w-10 mr-2'>
                    <img src='/linkedin-svgrepo-com.svg'/>
                </button>
                
                <button onClick={()=> window.open("https://github.com/n-see")}  className='w-10 h-10 ml-2'>
                    <FaGithub className='w-10 h-10 '/>
                </button>
                
            </div>
        
    </div>
  )
}

export default Footer