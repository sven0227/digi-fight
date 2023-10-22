import { useState } from 'react'
import { LeftArrow } from 'assets/icons'
import DepositPanel from './DepositPanel'
import SettingsPanel from './SettingsPanel'
import HubModal from './HubModal'
import Modal from 'components/common/containers/Modal'

enum Panel {
  None = 0,
  Deposite,
  Settings,
}

function Profile() {
  const [selectedPanel, setSelectedPanel] = useState<Panel>(Panel.None)
  const [isShowHubModal, setIsShowHubModal] = useState<boolean>(false)

  const handleOnClickHub = () => {
    setIsShowHubModal(true)
  }

  const handleOnClickBalances = () => {
    if (selectedPanel === Panel.Deposite) {
      setSelectedPanel(Panel.None)
    } else {
      setSelectedPanel(Panel.Deposite)
    }
  }

  const handleOnClickSettings = () => {
    if (selectedPanel === Panel.Settings) {
      setSelectedPanel(Panel.None)
    } else {
      setSelectedPanel(Panel.Settings)
    }
  }

  return (
    <>
      <div className='flex flex-col w-full gap-1 max-w-[300px]'>
        <div className='flex relative gap-1'>
          <img className='w-20 h-20 cursor-pointer' src='/images/characters/heist16017.png' />
          <div className='flex flex-1 flex-col gap-1 w-full'>
            <button className='Effect YellowBackground' onClick={handleOnClickBalances}>
              <div className='flex items-center gap-2 w-full'>
                <div className='flex flex-1 gap-1 items-center'>
                  <img className='w-5 h-5 fill-none' src='/images/misc/banana.png' />
                  <span>9,999</span>
                </div>
                <div className='bg-black w-[1px] h-4'></div>
                <div className='flex flex-1 gap-1 items-center'>
                  <img className='w-5 h-5 fill-none' src='/images/misc/cocoa.png' />
                  <span>9,999</span>
                </div>
                <div>
                  <LeftArrow isRotate={selectedPanel === Panel.Deposite} />
                </div>
              </div>
            </button>
            <Modal isShow={isShowHubModal} onClose={() => setIsShowHubModal(false)}>
              <HubModal />
            </Modal>
            <button
              className='Effect YellowBackground flex items-center gap-2 w-full'
              onClick={handleOnClickSettings}
            >
              <div className='w-full flex gap-1'>
                <img className='w-5 h-5 fill-none' src='/images/misc/setting.png' />
                <span>Settings</span>
              </div>
              <div>
                <LeftArrow isRotate={selectedPanel === Panel.Settings} />
              </div>
            </button>
          </div>
          {selectedPanel === Panel.None && (
            <button
              className='Effect OrangeBackground flex absolute left-[calc(100%)] w-[84px] h-full ml-2 px-0 py-4 items-center border-solid border-2 border-[var(--black)]'
              onClick={handleOnClickHub}
            >
              <div className='flex flex-1 gap-1 items-center justify-center'>
                <h2 className='text-[32px] text-white'>HUB</h2>
              </div>
            </button>
          )}
          {selectedPanel === Panel.Deposite && (
            <div className='Effect flex-col absolute left-[calc(100%)] w-[240px] ml-2 p-0'>
              <DepositPanel />
            </div>
          )}
          {selectedPanel === Panel.Settings && (
            <div className='LightGrayBackground Effect flex-col absolute left-[calc(100%)] ml-2 p-4'>
              <SettingsPanel />
            </div>
          )}
        </div>
        <div className='w-full'>
          <button className='Effect GrayBackground flex relative justify-between w-full'>
            <div className='text-[20px] text-white'>
              MY APES
              <span className='text-[var(--yellow)] ml-2'>0</span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile
