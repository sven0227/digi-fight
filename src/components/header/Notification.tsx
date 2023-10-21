function Notification() {
  return (
    <>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex justify-end items-center w-full gap-5'>
          <div className='relative flex items-center'>
            <div>
              <img className='w-[24px] h-[25px]' src='/images/misc/bell.png' />
            </div>
          </div>
          <h1 className='text-white text-[32px] text-right'>DIGIFIGHT</h1>
        </div>
      </div>
    </>
  )
}

export default Notification
