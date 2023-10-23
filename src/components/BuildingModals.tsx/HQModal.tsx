import { useState } from 'react'
import { TabItem, TabsArray, Tabs } from './BuildingTabs'

const HQModal = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const tabs: TabsArray = [
    {
      id: 0,
      name: 'CHIMP HQ',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/chimps_hq.png',
    },
    {
      id: 1,
      name: 'ORANGUTAN HQ',
      imageUrl: 'https://d1emnl92bfxoe0.cloudfront.net/location-banners-s2/orangutan_hq.png',
    },
  ]

  const looters = [
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
    { type: 'CAPTURED', classic: 'ViceClassics', amount: '833.24' },
  ]

  return (
    <section className='w-full h-full py-20 flex flex-col justify-center items-center'>
      <div>
        <Tabs tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </div>
      <div className='flex-grow max-h-full flex flex-col bg-slate-100'>
        <div>
          <img className='w-[900px]' src={tabs[tabIndex].imageUrl} />
        </div>
        <div className='flex bg-slate-200 flex-grow p-4 gap-4 overflow-auto'>
          {/* sidebar */}
          <div className='w-[250px] flex flex-col border-solid border-black border-[1px]'>
            <div className='text-xl text-white bg-black italic text-center p-3 '>
              TOP WEEKLY LOOTERS
            </div>
            <div className='overflow-auto'>
              {looters.map((looter, idx) => (
                <div
                  className='p-2 flex bg-white border-solid border-gray-300 border-b gap-3 items-center'
                  key={idx}
                >
                  <div className='w-11 h-11 border-solid border-black border-[1px]'>
                    <img
                      src='https://api.theheist.game/imgproxy/unsafe/fit-in/256x/https://bafybeifakqowzagc2ab3qzssiuacrkgxodbr2vldtz7ogyb65glfcydqxa.ipfs.nftstorage.link/3923.png?ext=png'
                      alt='image'
                    />
                  </div>
                  <div className='flex-grow'>
                    <div className='text-orange-500 font-bold italic'>{looter.type}</div>
                    <div className='flex justify-between'>
                      <span className='text-sm'>{looter.classic}</span>
                      <span className=''>{looter.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* content */}
          <div className='p-6 flex flex-col flex-grow bg-white'>
            <div className='text-2xl font-bold italic '>ORANGUTANS CAPTURED</div>
            <div className='flex-grow text-center p-6'>No Orangutans captured</div>
            <div>
              <span className='bg-black text-gray-300 text-xl p-2'>
                Pay ransome for all Orangutans [0]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HQModal
