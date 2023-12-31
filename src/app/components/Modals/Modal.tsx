import { useEffect } from 'react';
import { createPortal } from 'react-dom';


type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const modalRoot = document.querySelector('#modal-root');

  if (!modalRoot) return null;

  return createPortal(
    <div onClick={handleBackdropClick}>
      <div>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
