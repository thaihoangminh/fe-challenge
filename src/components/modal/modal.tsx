import Portal from 'components/portal/portal';

import { ModalProps } from 'components/modal/modal.type';
import { Mask, ModalWrap } from 'components/modal/modal.style';

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
