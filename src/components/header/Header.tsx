import Profile from './Profile'
import Notification from './Notification'

function Header() {
  return (
    <>
      <header className='flex fixed top-0 left-0 w-full p-4 content-between items-start'>
        <div className='flex items-start justify-between w-full'>
          <Profile />
          <Notification />
        </div>
      </header>
    </>
  )
}

export default Header
