import { useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import CloseSVG from '../../../../public/icon/CloseSVG'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    const appContainer = document.getElementById('app-container')
    const body = document.querySelector('body')

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    if (appContainer && body) {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', handleEsc)
        appContainer.style.filter = 'blur(2px)'
        body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
        appContainer.style.filter = 'none'
        body.style.overflow = 'auto'
      }

      return () => {
        document.removeEventListener('keydown', handleEsc)
        document.body.style.overflow = ''
        appContainer.style.filter = 'none'
        body.style.overflow = 'auto'
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="relative w-8 top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <CloseSVG className="stroke-secondary" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default Modal
