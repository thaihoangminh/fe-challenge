import Portal from 'components/portal/Portal';

import { ModalProps } from './Modal.type';
import { Mask, ModalWrap } from './Modal.style';

const Modal = ({ visible, children }: ModalProps) => {
  if (visible) {
    return (
      <Portal>
        <Mask />
        <ModalWrap>{children}</ModalWrap>
      </Portal>
    );
  }

  return null;
};

export default Modal;
