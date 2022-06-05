import styled from 'styled-components/macro';

import backgroundIcon from 'assets/images/unlock-background.svg';

import TextField from 'components/text-field/text-field';

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundIcon}) 20px 62px no-repeat;
`;

const Logo = styled.img`
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  margin-bottom: 24px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 24px;
`;

export {
  Container,
  Logo,
  Title,
  SubTitle,
  StyledTextField,
};
