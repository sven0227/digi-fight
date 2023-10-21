import ChatBox from './ChatBox'

function Footer() {
  return (
    <>
      <footer className='fixed flex justify-end items-end bottom-0 left-0 w-full gap-2 pt-0 pb-4 px-4 pointer-events-none'>
        <ChatBox />
      </footer>
    </>
  )
}

export default Footer
