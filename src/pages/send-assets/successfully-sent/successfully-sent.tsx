import {
  Container,
  StyledButton,
  Header,
  Body,
} from 'pages/send-assets/successfully-sent/successfully-sent.style';
import { SuccessfullySentProps } from 'pages/send-assets/successfully-sent/successfully-sent.type';

const SuccessfullySent = ({ onOk, currencyLabel }: SuccessfullySentProps) => {
  return (
    <Container>
      <Header>Successfully sent</Header>
      <Body>
        Your <strong>{currencyLabel}</strong> has been sent!
        <br />
        Thank you for using our service
      </Body>
      <StyledButton onClick={onOk}>OK</StyledButton>
    </Container>
  );
};

export default SuccessfullySent;
