import { useState } from 'react'
import SettingsModal from './NftsManagementModal'

const SettingsPanel = () => {
  const [isShowSettingsModal, setIsShowSettingsModal] = useState<boolean>(false)

  const handleOnClickShowSettings = () => {
    setIsShowSettingsModal(true)
  }

  return (
    <>
      <button className='w-[200px] flex justify-center mb-2 bg-gray-300'>Link twitter</button>
      <button className='w-[200px] flex justify-center mb-2 bg-gray-300'>Sync wallet</button>
      <div className='w-[200px] my-4 border-solid border-black border-2'></div>
      <button
        className='w-[200px] flex justify-center mb-2 YellowBackground'
        onClick={handleOnClickShowSettings}
      >
        NFTs Management
      </button>
      <button className='w-[200px] flex justify-center mb-2 YellowBackground'>Disconnect</button>
      <SettingsModal isShow={isShowSettingsModal} onClose={() => setIsShowSettingsModal(false)} />
    </>
  )
}

export default SettingsPanel
