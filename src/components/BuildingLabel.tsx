function BuildingLabel({ building }: { building: Building }) {
  return (
    <>
      <div className='absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-125%] z-10'>
        <div className='absolute translate-x-[-50%] translate-y-[-100%]'>
          <div className='FloatingAnimation'>
            <div className='cursor-pointer'>
              <div className='flex justify-center items-center gap-2 min-w-[160px] h-9 px-1 py-3 bg-[var(--yellow)] whitespace-nowrap'>
                <h2 className='font-mono font-extrabold'>{building.name}</h2>
              </div>
              <div></div>
              <div className='absolute top-[-24px] left-0 px-[6px] py-[2px] bg-[var(--low-risk)] border-[2px] border-[var(--black)] font-bold text-[12px] text-white'>
                LOW RISK
              </div>
              <div className='flex justify-center items-center ms-2 me-2 p-[2px] bg-[var(--black-trans)]'>
                <div className='flex flex-col min-w-[52px] p-1'>
                  <div className='flex gap-1 p-1 pl-0 border-b-[1px] border-b-[var(--gray)]'>
                    <img
                      className='w-[14px] h-[14px] fill-none'
                      src='/images/characters/heist16017.png'
                    />
                    <p className='font-bold text-[10px] text-white'>9,999</p>
                  </div>
                  <div className='flex gap-1 p-1 pl-0 border-b-[1px] border-b-[var(--gray)]'>
                    <img
                      className='w-[14px] h-[14px] fill-none'
                      src='/images/characters/heist16017.png'
                    />
                    <p className='font-bold text-[10px] text-white'>9,999</p>
                  </div>
                  <div className='flex gap-1 p-1 pl-0 border-b-[1px] border-b-[var(--gray)]'>
                    <img
                      className='w-[14px] h-[14px] fill-none'
                      src='/images/characters/heist16017.png'
                    />
                    <p className='font-bold text-[10px] text-white'>9,999</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[2px]'>
                  <div className='relative flex overflow-hidden w-[150px] h-[32px] gap-2'>
                    <div className='relative w-[30px] h-[30px] z-10'>
                      <img
                        className='absolute top-0 left-0 w-full h-full object-fill'
                        src='/images/characters/heist16017.png'
                      />
                    </div>
                    <ul className='flex  flex-col justify-center gap-[2px] m-0 p-0 z-10'>
                      <li className='flex items-center list-none gap-1'>
                        <span className='text-[10px] text-white'>+9,999</span>
                        <img className='w-[12px] h-[12px] fill-none' src='/images/misc/cocoa.png' />
                      </li>
                      <li className='flex items-center list-none gap-1'>
                        <span className='text-[10px] text-white'>+9,999</span>
                        <img className='w-[12px] h-[12px] fill-none' src='/images/misc/cocoa.png' />
                      </li>
                    </ul>
                    <div className='absolute top-0 right-0 h-8'>
                      <img className='w-full h-full' src='/images/event-1x.png' />
                    </div>
                    <div className='absolute flex justify-center items-center top-1/2 right-[6px] w-5 h-5 p-[3px] -translate-y-1/2'>
                      <img className='w-4 h-4' src='/images/misc/coin.png' />
                    </div>
                  </div>
                  <div className='relative flex overflow-hidden w-[150px] h-[32px] gap-2'>
                    <div className='relative w-[30px] h-[30px] z-10'>
                      <img
                        className='absolute top-0 left-0 w-full h-full object-fill'
                        src='/images/characters/heist16017.png'
                      />
                    </div>
                    <ul className='flex  flex-col justify-center gap-[2px] m-0 p-0 z-10'>
                      <li className='flex items-center list-none gap-1'>
                        <span className='text-[10px] text-white'>+9,999</span>
                        <img className='w-[12px] h-[12px] fill-none' src='/images/misc/cocoa.png' />
                      </li>
                      <li className='flex items-center list-none gap-1'>
                        <span className='text-[10px] text-white'>+9,999</span>
                        <img className='w-[12px] h-[12px] fill-none' src='/images/misc/cocoa.png' />
                      </li>
                    </ul>
                    <div className='absolute top-0 right-0 h-8'>
                      <img className='w-full h-full' src='/images/event-1x.png' />
                    </div>
                    <div className='absolute flex justify-center items-center top-1/2 right-[6px] w-5 h-5 p-[3px] -translate-y-1/2'>
                      <img className='w-4 h-4' src='/images/misc/coin.png' />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='w-8 h-4 bg-[var(--black-trans)] ms-auto me-auto'
                style={{ clipPath: 'polygon(50% 100%,0 0,100% 0)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuildingLabel
