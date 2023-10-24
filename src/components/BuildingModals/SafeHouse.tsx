import { SocialIcon } from 'assets/HubModal/socialModal'
import { ChimpsIcon, CloseIcon, GorilasIcon, LeftArrow, Orangutanscon } from 'assets/icons'
import { useState } from 'react'
import { Img } from 'react-image'

export type TabItem = {
  id: number
  name: string
  imageUrl: string
}

export type TabsArray = TabItem[]

export const Tabs = ({
  tabs,
  tabIndex,
  setTabIndex,
}: {
  tabs: TabsArray
  tabIndex: number
  setTabIndex: (id: number) => void
}) => {
  return (
    <div className='flex items-end gap-2 px-4'>
      {tabs.map((tab: TabItem, index) => {
        const isSelected = tabIndex === tab.id
        const className =
          'bg-gray-900 text-white text-md font-bold italic py-1 px-4 cursor-pointer '
        if (!isSelected)
          return (
            <div className={className} key={index} onClick={() => setTabIndex(tab.id)}>
              {tab.name}
            </div>
          )
        else
          return (
            <div className='' key={index}>
              <div className='bg-yellow-300 text-md font-bold italic py-1 px-5 flex justify-center'>
                {tab.name}
              </div>
              <div className='bg-yellow-400 flex justify-center gap-8 px-2'>
                <span className='flex items-center gap-1'>
                  <ChimpsIcon />
                  0(0)
                </span>
                <span className='flex items-center gap-1'>
                  <Orangutanscon />
                  0(0)
                </span>
                <span className='flex items-center gap-1'>
                  <GorilasIcon />
                  0(0)
                </span>
              </div>
            </div>
          )
      })}
    </div>
  )
}

const SafeHouseModal = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const tabs: TabsArray = [
    {
      id: 0,
      name: 'PUMPS RESIDENCE',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/federal_reserve.png',
    },
    {
      id: 1,
      name: 'SAFEHOUSE',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/orangutan_hq.png',
    },
    {
      id: 2,
      name: 'GOLDMAN RACKS',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/orangutan_hq.png',
    },
    {
      id: 3,
      name: 'FEDERAL RESERVE',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/orangutan_hq.png',
    },
    {
      id: 4,
      name: 'CURRENCY EXCHANGE',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/orangutan_hq.png',
    },
  ]

  return (
    <section className='w-full h-full py-10 flex justify-center items-start'>
      <div className='flex flex-col h-full'>
        <div>
          <Tabs tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </div>
        <div className='flex-grow bg-gray-300 w-full flex flex-col overflow-auto'>
          <Img
            className='w-full h-[132px]'
            src={tabs[tabIndex].imageUrl}
            loader={<div className='w-full h-[132px] bg-green-300'>Loading</div>}
          />
          <div className='flex-grow flex overflow-auto'>
            {/* left */}
            <div className='bg-gray-400 p-2 overflow-auto flex'>
              <div className='flex flex-col border-solid border-2 border-black mb-2 overflow-auto'>
                <h2 className='text-white p-3 text-xl italic bg-black'>HOTTEST RECEMT ACTIVITY</h2>
                <div className='overflow-auto flex-grow'>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map(() => (
                    <div className='flex items-center gap-3 bg-white px-2 py-1 border-b border-solid border-gray-400'>
                      <div className='w-9 h-9 border-solid border border-black'>
                        <img src='https://api.theheist.game/imgproxy/unsafe/fit-in/256x/https://bafybeiaspkh7xpswd7ihsjnukfvczl3l74acko3fneczjohq4ndfiy25my.ipfs.nftstorage.link/7021.png?ext=png' />
                      </div>
                      <div>
                        <div className='text-blue-500 font-bold italic'>
                          DOUBLED{' '}
                          <span className='text-gray-600 font-normal text-sm'>50Jad...t4034</span>
                        </div>
                        <div className='flex gap-3'>
                          +226K x
                          <SocialIcon variant='coco' />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* content */}
            <div className='flex flex-col flex-grow p-2'>
              <div className='flex justify-between gap-3'>
                <div className='flex-grow bg-white h-8 flex items-center justify-center'>
                  On Mission(0)
                </div>
                <div className='flex-grow bg-gray-400 h-8 flex items-center justify-center'>
                  Resting(0)
                </div>
              </div>
              <div className='flex-grow bg-white flex flex-col justify-between p-3'>
                <div className='flex justify-between'>
                  <h4 className='text-lg font-bold italic'>MY CHIPS</h4>
                  <div className='flex border-2 border-solid border-black items-center h-8 gap-2 shadow-[_2px_2px]'>
                    <div className='flex items-center gap-1 px-2 border-solid border-r border-gray-200'>
                      <ChimpsIcon /> 0
                    </div>
                    <div className='flex items-center gap-1 px-2 border-solid border-r border-gray-200'>
                      <Orangutanscon /> 0
                    </div>
                    <div className='flex items-center gap-1 px-2 border-solid border-r border-gray-200'>
                      <GorilasIcon /> 0
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='font-bold italic text-2xl p-4'>NO CHIMPS ON MISSION</div>
                  <div className='flex bg-yellow-400 items-center p-3 border-solid border-2 border-black shadow-[_2px_2px] font-bold '>
                    0 CHIMPS are resting{' '}
                    <span className='px-2'>
                      <LeftArrow color='#000' />
                    </span>
                  </div>
                </div>
                <div className='flex justify-between gap-2'>
                  <button className='flex-grow text-gray-400 bg-black flex justify-center'>
                    Claim Selected (0)
                  </button>
                  <button className='flex-grow text-gray-400 bg-black flex justify-center'>
                    Claim Selected
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[300px] p-2 pr-0 h-full overflow-auto'>
        <h1 className='text-white text-2xl font-bold italic bg-gray-900 p-3'>Event Table</h1>
        <div className='p-3 bg-black flex flex-col gap-3'>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-20x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-10x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-5x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-20x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-10x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-5x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-20x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-10x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-5x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-20x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-10x.png' />
          </div>
          <div>
            <img src='https://d1emnl92bfxoe0.cloudfront.net/event-card/event-5x.png' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafeHouseModal
