import { ChimpsIcon, CloseIcon, GorilasIcon, Orangutanscon } from 'assets/icons'
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
          'bg-gray-900 text-white text-md font-bold italic py-1 px-7 cursor-pointer '
        if (!isSelected)
          return (
            <div className={className} key={index} onClick={() => setTabIndex(tab.id)}>
              {tab.name}
            </div>
          )
        else
          return (
            <div className='' key={index}>
              <div className='bg-yellow-300 text-md font-bold italic py-1 px-7 font-bold'>
                {tab.name}
              </div>
              <div className='bg-yellow-400 flex justify-center gap-8'>
                <span>0(0)</span>
                <span>0(0)</span>
                <span>0(0)</span>
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
            <div className='bg-gray-400 p-5 overflow-auto'>
              <div className='border-solid border-2 border-black mb-2'>
                <h2 className='text-white p-3 text-xl italic bg-black'>LOCATION STATS</h2>
                <div className='bg-white p-3 w-full'>
                  <h3 className='text-yellow-300 font-bold italic'>HIGH RISK</h3>
                  <p>4 Hour Minimum Trip</p>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <ChimpsIcon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <Orangutanscon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <GorilasIcon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <GorilasIcon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                </div>
              </div>
              <div className='border-solid border-2 border-black mb-2'>
                <h2 className='text-white p-3 text-xl italic bg-black'>LOCATION STATS</h2>
                <div className='bg-white p-3 w-full'>
                  <h3 className='text-yellow-300 font-bold italic'>HIGH RISK</h3>
                  <p>4 Hour Minimum Trip</p>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <ChimpsIcon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <Orangutanscon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <GorilasIcon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                  <div className='flex items-center gap-3 py-2'>
                    <span>
                      <GorilasIcon />
                    </span>
                    <span className='text-2xl font-bold italic'>2597</span>
                    <span>Tital Chimps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[300px]'>Events</div>
    </section>
  )
}

export default SafeHouseModal
