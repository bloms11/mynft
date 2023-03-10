import React from 'react'
import { ExternalLink } from 'react-external-link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-[85%] mx-auto py-4 md:w-[75%]'>
        <div className='flex items-center gap-x-2'>
            <span className='bg-[#00a3ff] text-[24px] font-semibold text-white px-3'>B</span>
            <h3>BlossomNFTs</h3>
        </div>
        <ExternalLink href='https://opensea.io/' className='bg-[#00a3ff] no-underline hidden text-[white] py-4 px-2 text-[18px] font-semibold md:flex'>
              Go to OpenSea
          </ExternalLink>

    </div>
  )
}

export default Navbar