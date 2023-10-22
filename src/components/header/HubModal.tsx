import modalTitleImg from 'assets/HubModal/download.jfif'
import { HubTabIcon } from 'assets/HubModal/tabIcons'
import { SocialHub, VaultTab } from 'components/common/containers/HubModalContents'
import MarketTab from 'components/common/containers/HubModalContents/MarketTab'
import { useRef, useState } from 'react'

const Tab = ({
  id,
  selectedId,
  setTabIndex,
  children,
}: {
  id: number
  selectedId: number
  setTabIndex: (id: number) => void
  children: React.ReactNode
}) => {
  const isSelected = selectedId === id
  return (
    <div
      className={`ml-3 mt-2 pl-3 h-10 flex items-center cursor-pointer outline-none transition-all duration-500 ${
        isSelected ? 'bg-yellow-300' : 'bg-transparent'
      }`}
      tabIndex={0}
      onClick={() => {
        setTabIndex(id)
      }}
    >
      {children}
    </div>
  )
}

const HubModal = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const getColor = (id: number) => {
    if (id === tabIndex) return '#000'
    else '#fff'
  }
  return (
    <section className='px-12 py-6 w-full h-full'>
      <div className='flex w-full h-full border-solid border-black border-2'>
        <div className='w-[80px] h-full bg-gray-500 flex flex-col'>
          <div className='h-[130px]'>
            <img className='h-full object-cover' src={modalTitleImg} height={300} />
          </div>
          <Tab id={0} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='social' color={getColor(0)} />
          </Tab>
          <Tab id={1} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='vault' color={getColor(1)} />
          </Tab>
          <Tab id={2} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='market' color={getColor(2)} />
          </Tab>
          <Tab id={3} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='blackmarket' color={getColor(3)} />
          </Tab>
          <Tab id={4} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='rewards' color={getColor(4)} />
          </Tab>
          <Tab id={5} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='cosmetics' color={getColor(5)} />
          </Tab>
          <Tab id={6} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='cosmeticStore' color={getColor(6)} />
          </Tab>
          <Tab id={7} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='leaderboards' color={getColor(7)} />
          </Tab>
          <Tab id={8} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <HubTabIcon variant='miniGames' color={getColor(8)} />
          </Tab>
        </div>
        <div className='bg-gray-200 flex-grow'>
          {tabIndex === 0 && <SocialHub />}
          {tabIndex === 1 && <VaultTab />}
          {tabIndex === 2 && <MarketTab />}
        </div>
      </div>
    </section>
  )
}

export default HubModal
