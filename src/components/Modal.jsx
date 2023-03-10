import React from 'react'
import { ExternalLink } from 'react-external-link'

const Modal = ({title, owner, img, id, desc, floorPrice, contract, setModal}) => {
  return (
    <div className='fixed overflow-y-scroll flex bg-[#161622] top-0 left-0 right-0 bottom-0'>
      <div className="flex flex-wrap items-center justify-around mx-auto my-auto py-3 w-[92%]  bg-[#24243557] md:flex-row">
        <div className="w-[92%] mx-auto md:w-[45%] md:mx-0">
          <img src={img}/>
        </div>
        <div className="flex flex-col w-[92%] mx-auto md:w-[45%]">
          <div className="flex w-full justify-between mt-4 md:mt-0">
            <h1>{title}</h1>
            <button onClick={()=>setModal(false)} className='bg-[#00a3ff] font-semibold text-white px-6'>x</button>
          </div>
            <div className=''>
              <p className='text-white text-[18px] font-semibold'>Owner's address: </p>
              <p className='text-[14px]'>{owner ? owner : "No address"}</p>
            </div>

            <div>
              <p className='text-white text-[18px] font-semibold'>Floor Price:</p>
              <p className='text-[14px]'>{floorPrice ? floorPrice : "No Floor Price"}</p>
            </div>

            <div>
              <p className='text-white text-[18px] font-semibold'>Description:</p>
              <p className='text-[14px]'>{desc ? desc : "No Description"}</p>1
            </div>

            <ExternalLink href={`https://opensea.io/assets/ethereum/${contract}/${id}`}>
              <button className='bg-[#00a3ff] w-[150px] font-semibold text-white py-3'>Go to page</button>
            </ExternalLink>

        </div>
      </div>
    </div>
  )
}

export default Modal