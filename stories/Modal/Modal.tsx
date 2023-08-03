import { useRef } from 'react';
import {
  StyledCloseButtonContainer,
  StyledModal,
  StyledModalContent,
} from './Modal.styled';
import { useOnClickOutside } from '@/app/shared/hooks';
import ReactDOM from 'react-dom';

export type ModalProps = {
  /**
   * Content inside of a modal
   */
  children?: React.ReactNode;

  /**
   * Defines if modal is visible
   */
  showModal?: boolean;

  /**
   * On-close callback
   */
  onClose: () => void;
};

/**
 * Custom modal-component is using to show information in parallel with current route
 */
export const Modal = ({ children, showModal, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContent = (
    <StyledModal>
      <StyledModalContent ref={modalRef}>
        {children}
        <StyledCloseButtonContainer onClick={onClose} />
      </StyledModalContent>
    </StyledModal>
  );

  useOnClickOutside(modalRef.current, onClose);

  return (
    showModal &&
    ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLDivElement
    )
  );
};
