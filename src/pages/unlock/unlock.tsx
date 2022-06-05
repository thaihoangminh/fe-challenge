import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/button/button';

import eyeIcon from 'assets/images/icons/eye.svg';
import logo from 'assets/images/icons/ronin-fullcolor.svg';

import { State } from 'pages/unlock/unlock.type';

import { BASE_URL } from 'constants/routes';

import {
  Container,
  Logo,
  Title,
  SubTitle,
  StyledTextField,
} from './unlock.style';

import { InputAdornment } from 'components/text-field/text-field.style';

const Unlock = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<State>({
    password: '12345678',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleGoToMainPage = () => navigate(BASE_URL.main);

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Title>Ronin Wallet</Title>
      <SubTitle>Your Digital Passport</SubTitle>
      <StyledTextField
        label="Enter Password"
        value={values.password}
        type={values.showPassword ? 'text' : 'password'}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment>
            <img onClick={handleClickShowPassword} src={eyeIcon} alt="eye" />
          </InputAdornment>
        }
      />
      <Button onClick={handleGoToMainPage}>Unlock</Button>
    </Container>
  );
};

export default Unlock;
