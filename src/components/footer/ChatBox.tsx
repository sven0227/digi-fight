import { Message } from 'types'
import MessageComp from './Message'

const SAMPLE_MESSAGE: Message = {
  user_id: 0,
  user_name: 'User',
  profile_image: '/images/characters/heist16017.png',
  message: 'hello world',
  timestamp: Date.now() - 60 * 1000,
}

function ChatBox() {
  const messages: Array<Message> = []
  for (let i = 0; i < 10; i++) {
    messages.push(SAMPLE_MESSAGE)
  }

  return (
    <>
      <div className='flex flex-col max-w-[300px] overflow-hidden pointer-events-auto'>
        <div>
          <div className='flex justify-center items-center min-w-[290px]'>
            <button className='justify-center flex-shrink-[2] w-full h-[48px] px-2 py-4 bg-[var(--dark-gray-trans8)]'>
              <img className='fill-none max-w-none w-5 h-5' src='/images/misc/down.png' />
            </button>
            <button className='justify-center w-full h-12 px-2 py-4 text-white bg-[var(--dark-gray-trans6)]'>
              GAME CHAT
            </button>
            <button className='justify-center w-full h-12 px-2 py-4 text-white bg-[var(--dark-gray-trans8)]'>
              TRADE CHAT
            </button>
          </div>
          <div className='relative flex flex-col-reverse h-[280px] bg-[var(--dark-gray-trans6)] overflow-y-auto'>
            <div>
              <div className='relative flex flex-col-reverse overflow-auto h-auto'>
                {messages.map((message, index) => {
                  return <MessageComp key={index} message={message} />
                })}
              </div>
            </div>
          </div>
          <div className='sticky flex overflow-hidden bottom-0 w-full h-[48px]'>
            <img
              className='w-12 h-12 border-[2px] border-[var(--dark-gray)]'
              src='/images/characters/heist16017.png'
            />
            <input
              className='w-full h-full border-2 font-semibold px-3 py-2 text-[var(--black)]'
              type='text'
              placeholder='Write message here ...'
              required
            />
            <button className='flex justify-center items-center w-12 h-11 bg-[var(--yellow)]'>
              <img className='w-[16px] h-[14px] cursor-pointer' src='/images/misc/send.png' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBox
