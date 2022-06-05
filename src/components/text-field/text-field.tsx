import {
  Container,
  Label,
  Input,
  InputContainer,
} from 'components/text-field/text-field.style';
import { TextFieldProps } from 'components/text-field/text-field.type';

const TextField = ({
  label,
  value,
  type,
  endAdornment,
  startAdornment,
  onChange,
  onMouseDown,
  disabled,
  ...rest
}: TextFieldProps) => (
  <Container {...rest}>
    <Label>{label}</Label>
    <InputContainer disabled={disabled}>
      {startAdornment}
      <Input
        startAdornment={!!startAdornment}
        endAdornment={!!endAdornment}
        value={value}
        type={type}
        onChange={onChange}
        disabled={disabled}
        onMouseDown={onMouseDown}
      />
      {endAdornment}
    </InputContainer>
  </Container>
);

export default TextField;
