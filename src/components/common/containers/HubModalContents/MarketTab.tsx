import { LeftArrow } from 'assets/icons'

const MarketTab = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='p-2 bg-gray-300 flex items-center justify-between'>
        <div className='flex gap-5 items-center'>
          <img
            className='rounded-full'
            src='/images/Hub/MarketHub/me.png'
            width={64}
            height={64}
            alt='me'
          />
          <h2 className='text-4xl font-bold italic'>THE HEIST</h2>
          <div>
            <label>Floor Price</label>
            <p className='text-blue-500 font-bold'>@ 0</p>
          </div>
          <div>
            <label>Listed / Supply</label>
            <p className='font-bold'>0 / 30,200</p>
          </div>
          <div>
            <label>Average Price [24h]</label>
            <p className='font-bold'>@ 0.00</p>
          </div>
          <div>
            <label>Total Vol</label>
            <p className='font-bold'>0</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <button className='bg-yellow-400 shadow-[_2px_2px]'>
            <img src='/images/Hub/MarketHub/refresh.svg' />
          </button>
          <div className='relative'>
            <input
              className='h-full px-3 shadow-[_2px_2px] border-solid border-2 border-black'
              placeholder='Search'
            />
            <div className='absolute h-full flex items-center top-0 right-4'>
              <img className='' src='/images/Hub/MarketHub/search.svg' alt='search' />
            </div>
          </div>
          <div className='relative'>
            <input
              className='h-full px-3 shadow-[_2px_2px] border-solid border-2 border-black'
              placeholder='Price: Low to high'
            />
            <div className='absolute h-full flex items-center top-0 right-4'>
              <div className='rotate-90'>
                <LeftArrow color='#000' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketTab
