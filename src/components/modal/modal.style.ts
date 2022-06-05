import styled from 'styled-components/macro';

import { colors } from 'styles/colors';

const Mask = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  height: 100%;
  background: ${colors.darkGunmetal};
  opacity: 0.5;
`;

const ModalWrap = styled.div`
  position: fixed;
  inset: 0;
  overflow: auto;
  z-index: 1000;
  padding: 20px;
`;

export { Mask, ModalWrap };
