import React, { useState } from 'react'
import Banner from '../banner2.jpg'

const Hero = () => {

  return (
    <div className='flex mx-auto mt-[5%] flex-col-reverse w-[92%] items-center justify-between md:flex-row md:w-[75%]'>
        <div className='w-[100%] md:w-[47%] flex flex-col space-y-5'>
            <h1 className='md:text-[70px]'>Search your rare NFT's by world class artists</h1>
            <p>Where Bitcoin was hailed as the digital answer to currency, NFTs are now being touted as the digital answer to collectables. Paste address and load available NFTs</p>
            <button className='bg-[#00a3ff] w-[150px] font-semibold text-white py-4'>Get Started</button>

        </div>
        <div className="flex items-center justify-center w-full md:w-[50%] xl:h-[700px]">
            <img className='border-[#24243557] border-[20px] ' src={Banner}/>
        </div>
    </div>
  )
}

export default Hero