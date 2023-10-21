function Profile() {
  return (
    <>
      <div className='flex flex-col w-full gap-1 max-w-[300px]'>
        <div className='flex relative gap-1'>
          <img className='w-20 h-20 cursor-pointer' src='/images/characters/heist16017.png' />
          <div className='flex flex-1 flex-col gap-1 w-full'>
            <button className='Effect YellowBackground'>
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
              </div>
            </button>
            <button className='Effect YellowBackground'>
              <div className='flex items-center gap-2 w-full'>
                <div className='flex flex-1 gap-1 items-center'>
                  <img className='w-5 h-5 fill-none' src='/images/misc/setting.png' />
                  <span>Settings</span>
                </div>
              </div>
            </button>
          </div>
          <button className='Effect OrangeBackground flex absolute left-[calc(100%)] w-[84px] h-full ml-2 px-0 py-4 items-center border-solid border-2 border-[var(--black)]'>
            <div className='flex flex-1 gap-1 items-center justify-center'>
              <h2 className='text-[32px] text-white'>HUB</h2>
            </div>
          </button>
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
