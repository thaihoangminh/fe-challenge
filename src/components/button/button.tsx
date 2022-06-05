import { Container } from 'components/button/button.style';
import { ButtonProps, ButtonVariant } from 'components/button/button.type';

const Button = ({
  children,
  variant = ButtonVariant.Primary,
  ...rest
}: ButtonProps) => (
  <Container variant={variant} {...rest}>
    {children}
  </Container>
);

export default Button;
