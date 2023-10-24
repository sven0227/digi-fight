import { Message } from 'types'

function MessageComp({ message }: { message: Message }) {
  const deltaSeconds: number = Math.ceil((Date.now() - message.timestamp) / 1000)
  const deltaMinutes: number = Math.ceil(deltaSeconds / 60)
  const timeString: string =
    deltaMinutes > 0 ? `${deltaMinutes} minutes ago` : `${deltaSeconds} seconds ago`

  return (
    <>
      <div className='flex gap-2 p-2 bg-transparent border-b border-b-(var(--dark-gray)) border-b-(solid)'>
        <img className='w-8 h-8 flex-shrink-0 cursor-pointer' src={message.profile_image} />
        <div className=' flex flex-col w-full gap-[2px]'>
          <div className='flex justify-between gap-2'>
            <p className='font-semibold text-[var(--yellow)] leading-[14px]'>{message.user_name}</p>
            <p className='font-semibold text-gray-200 leading-[14px]'>{timeString}</p>
          </div>
          <p className='break-all text-white leading-[14px]'>{message.message}</p>
        </div>
      </div>
    </>
  )
}

export default MessageComp
