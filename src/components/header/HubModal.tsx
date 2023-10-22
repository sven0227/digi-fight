import modalTitleImg from 'assets/HubModal/download.jfif'
import { SocialIcon } from 'assets/HubModal/tabIcons'
import { SocialHub } from 'components/common/containers/HubModalContents'
import { useRef, useState } from 'react'

const Tab = ({
  id,
  selectedId,
  setTabIndex,
  children,
}: {
  id: number
  selectedId: number
  setTabIndex: (id: number) => void
  children: React.ReactNode
}) => {
  const isSelected = selectedId === id
  return (
    <div
      className={`ml-3 mt-2 pl-3 h-10 flex items-center cursor-pointer outline-none transition-all duration-500 ${
        isSelected ? 'bg-yellow-300' : 'bg-transparent'
      }`}
      tabIndex={0}
      onClick={() => {
        setTabIndex(id)
      }}
    >
      {children}
    </div>
  )
}

const HubModal = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  return (
    <section className='px-12 py-6 w-full h-full'>
      <div className='flex w-full h-full border-solid border-black border-2'>
        <div className='w-[80px] h-full bg-gray-500 flex flex-col'>
          <div className='h-[130px]'>
            <img className='h-full object-cover' src={modalTitleImg} height={300} />
          </div>
          <Tab id={0} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <SocialIcon />
          </Tab>
          <Tab id={1} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <SocialIcon />
          </Tab>
          <Tab id={2} selectedId={tabIndex} setTabIndex={setTabIndex}>
            <SocialIcon />
          </Tab>
        </div>
        <div className='bg-gray-200 flex-grow'>{tabIndex === 0 && <SocialHub />}</div>
      </div>
    </section>
  )
}

export default HubModal
