import React, {useState} from 'react'
import { ExternalLink } from 'react-external-link'
import Modal from './Modal'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = ({nft}) => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])

    const getData = (desc, title, img, id, owner, floorPrice, contract) => {
        let tempData = [desc, title, img, id, owner, floorPrice, contract]
        setData(item => [1, ...tempData])
        setModal(true)

    }

  return (
    <div className='w-[300px] bg-[#24243557] mb-4 rounded-lg p-2'>
        <div className="flex rounded-lg bg-[#161622] w-full h-[300px]">
            {
                nft.media[0].gateway ? (<img className='rounded-lg' src={nft.media[0].gateway}/>)
                : <p className='mx-auto my-auto'>No Image</p>
            }
        </div>
        <div className="flex items-center w-full justify-between">
            <p className='text-white font-semibold mt-3'>{nft.title}</p>
            <p 
            onClick={()=> getData(nft.description,
            nft.title,
            nft.media[0].gateway, 
            nft.metadata.token_id,
            nft.contractMetadata.contractDeployer,
            nft.contractMetadata.openSea.floorPrice,
            nft.contract.address
            )} 
            className='text-[18px] bg-[#161622] px-2 font-bold cursor-pointer'>...</p>
        </div>
        <p>{nft.id.tokenId.substr(nft.id.tokenId.length - 7)}</p>
        <p className='text-[#00a3ff]'>{`${nft.contract.address.substr(0,4)}...${nft.contract.address.substr(nft.contract.address.length - 7)}`}</p>
        {/* <ExternalLink href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.metadata.token_id}`} >
            openSea
        </ExternalLink> */}
        {
            modal === true ? (
            <Modal 
            setModal={setModal}
            desc={data[1]} 
            title={data[2]} 
            img={data[3]} 
            id={data[4]}
            owner={data[5]}
            floorPrice={data[6]}
            contract={data[7]}
            />) : null
        }
        
    </div>
  )
}

export default Card