import React, {useState} from 'react'
import Card from './Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Collections = () => {
  const [wallet, setWallet] = useState("")
  const [NFTs, setNFTs] = useState([])

  const fetchNFTs = async() => {
      let nfts
      const options = {method: 'GET', headers: {accept: 'application/json'}};

      const baseURL = "https://eth-mainnet.g.alchemy.com/nft/v2/ELDIzlHNaz-glUGWlCxn8QDUZpEW6Y5v/getNFTs/"
      const fetchURL = `${baseURL}?owner=${wallet}`

      nfts = await fetch(fetchURL, options).then(data => data.json())
      if (nfts) {
          // console.log(nfts)
          setNFTs(nfts.ownedNfts)
      }
  }

  return (
    <div className='flex flex-col space-y-8 items-center w-[92%] mx-auto mt-[10%] md:w-[75%]'>
        <h2 className='mx-auto'>Enter address below</h2>
        <div className="flex flex-col space-y-4 items-center w-[80%] mx-auto">
          <input onChange={(e)=>{setWallet(e.target.value)}} value={wallet} className=' w-full border-2 border-[#ffffff14] text-[#acacac] bg-transparent px-2 py-3 outline-none' placeholder='Paste Address Here..'/>
          <button onClick={()=>fetchNFTs()} className='bg-[#00a3ff] w-[150px] font-semibold text-white py-4'>Load NFTs</button>
        </div>
        <div className="flex flex-wrap justify-evenly w-full">
          {
            NFTs.length && NFTs.map(nft => (
              <Card nft ={nft}/>
            ))
          }
        </div>
    </div>
  )
}

export default Collections;