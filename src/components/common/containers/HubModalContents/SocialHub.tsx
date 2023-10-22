import {
  ActivePlayersIcon,
  RektIcon,
  RemainingIcon,
  TotalBurned,
  TotalEmitted,
  SocialIcon,
} from 'assets/HubModal/socialModal'
import { LeftArrow } from 'assets/icons'

const SocialHub = () => {
  return (
    <div className='w-full h-full bg-[url("/images/Hub/SocialHub/background.png")] bg-cover'>
      <div className='w-full h-full flex bg-gradient-to-b from-transparent to-gray-900 text-white'>
        {/* Sidebar */}
        <div className='w-[350px] h-full max-h-full'>
          <div className='py-4'>
            <div className='w-[150px] p-4 bg-black '>
              <div className='text-yellow-400'>CG180Q...SFC5C</div>
              <div className='text-white'>
                <div className='flex gap-2'>
                  <SocialIcon variant='twitter' />-
                </div>
                <div className='flex gap-2'>
                  <SocialIcon variant='discord' /> -
                </div>
                <div className='flex gap-2'>
                  <SocialIcon variant='banana' /> 0
                </div>
                <div className='flex gap-2'>
                  <SocialIcon variant='coco' />0
                </div>
                <div className='flex gap-2'>
                  <SocialIcon variant='paper' />0
                </div>
              </div>
            </div>
          </div>
          <div className='p-5 '>
            <h2 className=' text-xl font-bold'>PEEL CITY STATS</h2>
            <div className='grid grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='text-sm'>Active Players</label>
                <p className='text-lg font-bold flex items-center gap-3'>
                  <ActivePlayersIcon />0
                </p>
              </div>
              <div className='h-10 bg-gray-400 flex justify-center items-center'>
                <span>Player search </span>
                <span className='px-2 pt-1'>
                  <LeftArrow color='#000' />
                </span>
              </div>
              <div className=''>
                <label className='text-sm'>Total $COCO Emitted:</label>
                <p className='text-lg font-bold flex items-center gap-3'>
                  <TotalEmitted /> 9.37B
                </p>
              </div>
              <div className=''>
                <label className='text-sm'>Total $COCO Burned:</label>
                <p className='text-lg font-bold flex items-center gap-3'>
                  <TotalBurned />
                  9.98B
                </p>
              </div>
              <div className=''>
                <label className='text-sm'>Remaining $COCO:</label>
                <p className='text-lg font-bold flex items-center gap-3'>
                  <RemainingIcon />
                  40.6B
                </p>
              </div>
              <div className=''>
                <label className='text-sm'>Total Robbers Rekt:</label>
                <p className='text-lg font-bold flex items-center gap-3'>
                  <RektIcon />
                  785
                </p>
              </div>
            </div>
          </div>
          <div className='p-5'>
            <h2 className='text-[26px] font-bold'>Friend</h2>
          </div>
        </div>
        {/* Content */}
        <div className='flex-grow p-5 pl-0 flex flex-col h-full max-h-full overflow-auto'>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-[22px]'>SEASON 2</h1>
              <h1 className='text-[34px]'>ORANGUTANS COMING</h1>
            </div>
            <div className='text-right font-bold'>
              <label>$COCO SEASON POOL</label>
              <p className='text-[30px] italic font-bold'>50B $COCO</p>
            </div>
          </div>
          <div className='bg-white flex-grow p-7 flex gap-5'>
            {/* Left */}
            <div className='w-64 p-6 flex flex-col items-center border-solid border-[1px] border-black bg-orange-300'>
              <h1 className='font-bold italic text-[24px] bg-orange-500 p-3'>LAND DEEDS</h1>
              <div className='w-full py-8 flex flex-col text-black gap-3'>
                <div className='flex w-full justify-between'>
                  <label>Total Deeds</label>
                  <div>-</div>
                </div>
                <div className='flex w-full justify-between'>
                  <label>Contracts sold</label>
                  <div>-</div>
                </div>
                <div className='my-2 flex border-solid border-gray-600 border-t-2'></div>
                <div className='flex w-full justify-between'>
                  <label>My Contracts</label>
                  <div>-</div>
                </div>
              </div>
              <div className='w-full p-4 border-solid border-black border-[1px]'>
                <div className='flex justify-between p-2 border-solid border-black border-[1px] bg-white text-black shadow-[_2px_2px] shadow-black'>
                  <div className='w-8 text-center border-solid border-[1px] border-black bg-yellow-300 shadow-[_2px_2px]'>
                    -
                  </div>
                  <div className='text-[20px] font-bold italic'>0</div>
                  <div className='w-8 text-center border-solid border-[1px] border-black bg-yellow-300 shadow-[_2px_2px]'>
                    +
                  </div>
                </div>
                <div className='mt-3 p-2 text-center italic font-bold border-solid border-[1px] border-black bg-orange-500 shadow-[_2px_2px] shadow-black'>
                  COMING SOON
                </div>
              </div>
            </div>
            {/* right */}
            <div className='flex-grow italic flex flex-col gap-4 overflow-auto'>
              <div className='relative h-[300px] w-full border-solid border-black border-2 shadow-[_2px_2px] shadow-black'>
                <img
                  className='object-cover h-full w-full'
                  src='/images/Hub/SocialHub/social.png'
                  height={300}
                />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center gap-4 '>
                  <div className='bg-blue-500 p-3 text-lg font-bold italic '>RECRUITMENT ENDED</div>
                  <div className='bg-orange-400 p-3 text-lg font-bold text-black italic border-solid border-2 border-black'>
                    CHECK RESULTS
                  </div>
                </div>
              </div>
              <div className='w-full bg-blue-500 px-3 py-1 text-lg font-bold border-solid border-2 border-black'>
                RAFFLE ITEMS {'(32)'}
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='h-52 border-solid border-black border-2 bg-gradient-to-t from-blue-200 to-blue-800'></div>
                <div className='h-52 border-solid border-black border-2'></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialHub
