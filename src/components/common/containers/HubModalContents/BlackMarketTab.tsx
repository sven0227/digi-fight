import { SocialIcon } from 'assets/HubModal/socialModal'

const BlackMarketTab = () => {
  return (
    <div className='flex h-full'>
      <div className='w-64'>
        <h2 className='text-lg font-bold italic m-3 border-solid border-b-2 border-gray-500'>
          RECENT CRAFTS
        </h2>
      </div>
      <div className='relative flex-grow h-full flex flex-col'>
        <div className='absolute p-5 flex justify-between w-full h-20 bg-black bg-opacity-50  items-center'>
          <h2 className='text-white text-4xl font-bold italic'>BLACKMARKET</h2>
          <div className='flex items-center gap-4'>
            <span className='flex items-center bg-gray-200'>
              <span className='px-2'>
                <SocialIcon variant='coco' />
              </span>
              <span className='bg-gray-400 p-2'>0</span>
            </span>
            <span className='flex items-center bg-gray-200'>
              <span className='px-2'>
                <SocialIcon variant='banana' />
              </span>
              <span className='bg-gray-400 p-2'>0</span>
            </span>
            <span className='flex items-center bg-gray-200'>
              <span className='px-2'>
                <img
                  src='https://d1emnl92bfxoe0.cloudfront.net/location-loot/icon/scrap.png'
                  width={32}
                  height={32}
                  alt=''
                />
              </span>
              <span className='bg-gray-400 p-2'>0</span>
            </span>
          </div>
        </div>
        <img
          className='object-cover h-[240px] w-full'
          src='/public/images/Hub/BlackMarket/title.png'
          height={300}
          alt='title'
        />
        {/* Content */}
        <div className='flex bg-white flex-grow'>
          {/* left */}
          <div className='p-6'>
            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-4xl font-bold italic h-12'>RECIPES</h3>
                <div className='text-3xl font-bold italic bg-orange-300 p-2'>CHIMPS</div>
                <div className='flex gap-1'>
                  <img
                    className='bg-white border-solid border-[1px] border-black shadow-[_2px_2px] object-contain'
                    src='https://d1emnl92bfxoe0.cloudfront.net/items/briefcase.png'
                    draggable='false'
                    alt=''
                    width={70}
                    height={75}
                  />
                  <div className='h-[75px] w-[200px] bg-gray-200 border-solid border-[1px] border-black shadow-[_2px_2px]'>
                    <div className='bg-black text-white font-bold italic px-2'>BRIEFCASE</div>
                    <div className='p-2 '>Yield Stat</div>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <img
                    className='bg-white border-solid border-[1px] border-black shadow-[_2px_2px] object-contain'
                    src='https://d1emnl92bfxoe0.cloudfront.net/items/briefcase.png'
                    draggable='false'
                    alt=''
                    width={70}
                    height={75}
                  />
                  <div className='h-[75px] w-[200px] bg-gray-200 border-solid border-[1px] border-black shadow-[_2px_2px]'>
                    <div className='bg-black text-white font-bold italic px-2'>BRIEFCASE</div>
                    <div className='p-2 '>Yield Stat</div>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <img
                    className='bg-white border-solid border-[1px] border-black shadow-[_2px_2px] object-contain'
                    src='https://d1emnl92bfxoe0.cloudfront.net/items/briefcase.png'
                    draggable='false'
                    alt=''
                    width={70}
                    height={75}
                  />
                  <div className='h-[75px] w-[200px] bg-gray-200 border-solid border-[1px] border-black shadow-[_2px_2px]'>
                    <div className='bg-black text-white font-bold italic px-2'>BRIEFCASE</div>
                    <div className='p-2 '>Yield Stat</div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4 items-end'>
                <h3 className='h-12 flex items-center'>All Items</h3>
                <div className='text-3xl font-bold italic bg-blue-200 p-2 w-full text-right'>
                  ORANGUTAN
                </div>
                <div className='flex gap-1'>
                  <img
                    className='bg-white border-solid border-[1px] border-black shadow-[_2px_2px] object-contain'
                    src='https://d1emnl92bfxoe0.cloudfront.net/items/briefcase.png'
                    draggable='false'
                    alt=''
                    width={70}
                    height={75}
                  />
                  <div className='h-[75px] w-[200px] bg-gray-200 border-solid border-[1px] border-black shadow-[_2px_2px]'>
                    <div className='bg-black text-white font-bold italic px-2'>BRIEFCASE</div>
                    <div className='p-2 '>Yield Stat</div>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <img
                    className='bg-white border-solid border-[1px] border-black shadow-[_2px_2px] object-contain'
                    src='https://d1emnl92bfxoe0.cloudfront.net/items/briefcase.png'
                    draggable='false'
                    alt=''
                    width={70}
                    height={75}
                  />
                  <div className='h-[75px] w-[200px] bg-gray-200 border-solid border-[1px] border-black shadow-[_2px_2px]'>
                    <div className='bg-black text-white font-bold italic px-2'>BRIEFCASE</div>
                    <div className='p-2 '>Yield Stat</div>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <img
                    className='bg-white border-solid border-[1px] border-black shadow-[_2px_2px] object-contain'
                    src='https://d1emnl92bfxoe0.cloudfront.net/items/briefcase.png'
                    draggable='false'
                    alt=''
                    width={70}
                    height={75}
                  />
                  <div className='h-[75px] w-[200px] bg-gray-200 border-solid border-[1px] border-black shadow-[_2px_2px]'>
                    <div className='bg-black text-white font-bold italic px-2'>BRIEFCASE</div>
                    <div className='p-2 '>Yield Stat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default BlackMarketTab
