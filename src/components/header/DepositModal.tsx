import { useState } from 'react'

interface TabButtonProps {
  id: number
  selectedTab: number
  setSelectedTab: (id: number) => void
}

const TabButton: React.FC<React.PropsWithChildren<TabButtonProps>> = ({
  id,
  selectedTab,
  setSelectedTab,
  children,
}) => {
  return (
    <button
      className={`w-[118px] border-b-0 flex justify-center transition-all ${
        id !== selectedTab ? 'BlackBackground text-white' : 'LightGrayBackground'
      }`}
      onClick={() => setSelectedTab(id)}
    >
      {children}
    </button>
  )
}

export default function DepositModal() {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <div className='flex w-full justify-between'>
        <TabButton id={0} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
          Deposite
        </TabButton>
        <TabButton id={1} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
          Withdraw
        </TabButton>
      </div>
      <div className='flex-col w-full LightGrayBackground border-solid border-2 border-[var(--black)] border-t-0 mr-1'>
        {/* toggle */}
        <div className='py-3 mx-3 border-solid border-gray-200 border-b-2 flex justify-center items-center gap-3'>
          <div className='flex items-center gap-2'>
            <img className='w-5 h-5 fill-none' src='/images/misc/banana.png' />
            $NANA
          </div>
          <div className='w-8 h-4 mt-1 border-solid border-2 border-black'></div>

          <div className='flex items-center gap-2'>
            <img className='w-5 h-5 fill-none' src='/images/misc/setting.png' />
            $COCO
          </div>
        </div>
        {/* amount */}
        <div className='flex-col mx-3 border-solid border-black border-b-2'>
          <div className='p-3 flex justify-between font-medium'>
            <div>Available:</div>
            <div>0 $NANA</div>
          </div>
          <div className='p-3 flex justify-between items-center font-medium'>
            <div>Amount:</div>
            <input
              className='px-3 py-1 w-24 border-solid border-black border-2 text-right  focus:rounded-none rounded-none'
              placeholder='0'
            />
          </div>
        </div>
        {/* Action */}
        <div className='flex w-full'>
          <button className='flex-grow m-3 flex justify-center YellowBackground shadow-md shadow-black hover:shadow-none'>
            Deposit
          </button>
        </div>
      </div>
    </>
  )
}
