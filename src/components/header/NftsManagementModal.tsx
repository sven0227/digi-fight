import { useState } from 'react'
import Modal from 'components/common/containers/Modal'
import { Dropdown } from 'flowbite-react'

type SettingsModalProps = {
  isShow: boolean
  onClose: () => void
}

const options = ['All', 'two', 'three']
const defaultOption = options[0]
import 'react-dropdown/style.css'
import { useResolvedPath } from 'react-router-dom'

const NftsManagement = ({ isShow, onClose }: SettingsModalProps) => {
  const [showDropdown, setShowDropdown] = useState(false)
  if (!isShow) return null

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className='flex flex-col flex-grow bg-gray-200'>
        <div className='flex justify-between items-center p-8'>
          <div className='text-[30px] font-bold'>NFT MANAGEMENT</div>
          <div>
            <button
              className='w-36 shadow-[2px_2px]'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              All
            </button>
            {showDropdown && (
              <div className='absolute bg-gray-50 flex-col w-36 mt-2 border-solid border-black border-2 '>
                <div className='w-full p-2 px-3 border-none cursor-pointer hover:bg-cyan-100'>
                  All
                </div>
                <div className='w-full p-2 px-3 border-none cursor-pointer hover:bg-cyan-100'>
                  Chimps
                </div>
                <div className='w-full p-2 px-3 border-none cursor-pointer hover:bg-cyan-100'>
                  Chimps
                </div>
                <div className='w-full p-2 px-3 border-none cursor-pointer hover:bg-cyan-100'>
                  Chimps
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='grid flex-grow flex-col' style={{ gridTemplateColumns: '1fr 80px 1fr' }}>
          <div className='bg-gray-50 flex-grow relative'>
            <div className='z-10 absolute w-full h-20 flex justify-between items-center px-6'>
              <div className='h-12 px-3 flex justify-center items-center border-solid border-black border-2 text-[20px] font-bold shadow-[2px_2px]'>
                IN WALLET
              </div>
              <div className='text-right'>
                <div>TOTAL IN WALLET: 0</div>
                <div>SECECTED: 0</div>
              </div>
            </div>
            <div className='absolute w-full h-full flex justify-center items-center text-[20px] font-bold'>
              {'SELECT NFTS > OR MOVE ALL >> NFTS TO WALLET'}
            </div>
          </div>
          <div className='flex-grow flex flex-col justify-center items-center gap-3'>
            <button className='w-12 flex justify-center text-white bg-black font-bold'>
              {'>'}
              <div className='absolute right-[-8px] top-[-8px] bg-gray-400 w-4'>0</div>
            </button>
            <button className='w-12 text-white bg-black font-bold'>
              {'>>'}
              <div className='absolute right-[-8px] top-[-8px] bg-gray-400 w-4'>0</div>
            </button>
            <button className='w-12 flex justify-center mt-4 text-white bg-black font-bold'>
              {'<'}
              <div className='absolute right-[-8px] top-[-8px] bg-gray-400 w-4'>0</div>
            </button>
            <button className='w-12 flex justify-center text-white bg-black font-bold'>
              {'<<'}
              <div className='absolute right-[-8px] top-[-8px] bg-gray-400 w-4'>0</div>
            </button>
          </div>
          <div className='bg-gray-50 flex-grow relative'>
            <div className='z-10 absolute w-full h-20 flex justify-between items-center px-6'>
              <div className='h-12 px-3 flex justify-center items-center border-solid border-black border-2 text-[20px] font-bold shadow-[2px_2px]'>
                IN WALLET
              </div>
              <div className='text-right'>
                <div>TOTAL IN WALLET: 0</div>
                <div>SECECTED: 0</div>
              </div>
            </div>
            <div className='absolute w-full h-full flex justify-center items-center text-[20px] font-bold'>
              {'SELECT NFTS > OR MOVE ALL >> NFTS TO WALLET'}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default NftsManagement
