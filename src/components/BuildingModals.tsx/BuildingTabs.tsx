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
    <div className='flex items-end gap-3'>
      {tabs.map((tab: TabItem, index) => {
        const isSelected = tabIndex === tab.id
        const className = 'bg-gray-900 text-white text-2xl italic py-1 px-7 cursor-pointer '
        if (!isSelected)
          return (
            <div className={className} key={index} onClick={() => setTabIndex(tab.id)}>
              {tab.name}
            </div>
          )
        else
          return (
            <div className='' key={index}>
              <div className='bg-yellow-300 text-2xl italic py-1 px-7 font-bold'>{tab.name}</div>
              <div className='bg-yellow-400 flex justify-around'>
                <span>0(0)</span>
                <span>0(0)</span>
              </div>
            </div>
          )
      })}
    </div>
  )
}
