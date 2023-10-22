import ReactModal from 'react-modal'
import { CloseIcon } from 'assets/icons'

const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <ReactModal
      isOpen={true}
      style={{ overlay: { backgroundColor: 'transparent' } }}
      className='bg-transparent'
    >
      <section className='fixed flex left-0 top-0 w-screen h-screen px-20 py-12 z-50 bg-transparent backdrop-blur-sm'>
        {children}
        <button
          className='absolute p-3 right-6 top-6 bg-gray-600 border-solid border-2 border-black'
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </section>
    </ReactModal>
  )
}

export default Modal
