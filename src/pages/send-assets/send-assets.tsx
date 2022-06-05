import { MouseEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BackIcon,
  Body,
  Container,
  Footer,
  Header,
  Max,
  MyWallet,
  SelectedAssetCurrency,
  SelectedAssetIcon,
  StyledTextField,
  Title,
  FooterButton,
  AmountField,
  Available,
} from 'pages/send-assets/send-assets.style';

import backIcon from 'assets/images/icons/chevron-left.svg';
import layerIcon from 'assets/images/icons/layers.svg';

import Modal from 'components/modal/modal';
import SuccessfullySent from 'pages/send-assets/successfully-sent/successfully-sent';
import SelectAssets from 'pages/send-assets/select-assets/select-assets';

import { InputAdornment } from 'components/text-field/text-field.style';

import { BASE_URL } from 'constants/routes';
import { ButtonVariant } from 'components/button/button.type';
import { ActiveCurrency, ActiveModalState } from 'pages/send-assets/send-assets.type';
import { Currency } from 'components/asset-item/asset-item.type';

import useModal from 'hooks/modal/useModal';

import { MAP_CURRENCY } from 'components/asset-item/asset-item.contants';
import { findAvailableData } from 'pages/send-assets/send-assets.utils';
import { assetsData } from 'pages/main/main.fixtures';
import { localString } from 'utils';

const SendAssets = () => {
  const [activeCurrency, setActiveCurrency] = useState<ActiveCurrency>('eur');
  const [availableData, setAvailableData] = useState(() => {
    return findAvailableData(assetsData, activeCurrency);
  });
  const [activeModal, setActiveModal] = useState<ActiveModalState>('');
  const { toggle, isModalVisible } = useModal();

  useEffect(() => {
    const foundAvailable = findAvailableData(assetsData, activeCurrency);

    if (foundAvailable) {
      setAvailableData(foundAvailable);
    }
  }, [activeCurrency]);

  const navigate = useNavigate();

  const handleGotoMain = () => navigate(BASE_URL.main);

  const handleSendAssets = () => {
    setActiveModal('successfully-send');
    toggle();
  };

  const handleChangeCurrency = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setActiveModal('select-assets');
    toggle();
  };

  const handleSelectAsset = (currency: Currency) => {
    setActiveCurrency(currency);
  };

  return (
    <Container>
      <Header>
        <BackIcon onClick={handleGotoMain} src={backIcon} alt="back" />
        <Title>Send Assets</Title>
      </Header>
      <Body>
        <StyledTextField
          label="From"
          disabled
          value="(7300...3334)"
          startAdornment={
            <InputAdornment>
              <MyWallet>My Wallet</MyWallet>
            </InputAdornment>
          }
        />
        <StyledTextField label="To" />
        <StyledTextField
          label="Asset"
          onMouseDown={handleChangeCurrency}
          startAdornment={
            <InputAdornment>
              <SelectedAssetIcon
                src={MAP_CURRENCY[activeCurrency].icon}
                alt="layer"
              />
              <SelectedAssetCurrency>
                {MAP_CURRENCY[activeCurrency].label}
              </SelectedAssetCurrency>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment>
              <img src={layerIcon} alt="layer" />
            </InputAdornment>
          }
        />
        <AmountField>
          <Available>
            Available: {localString(availableData ? availableData?.balance : 0)}{' '}
            {MAP_CURRENCY[activeCurrency].label}
          </Available>
          <StyledTextField
            label="Amount"
            endAdornment={
              <InputAdornment>
                <Max>Max</Max>
              </InputAdornment>
            }
          />
        </AmountField>
      </Body>
      <Footer>
        <FooterButton
          variant={ButtonVariant.Secondary}
          onClick={handleGotoMain}
        >
          Cancel
        </FooterButton>
        <FooterButton onClick={handleSendAssets}>Send</FooterButton>
      </Footer>
      <Modal visible={isModalVisible}>
        {activeModal === 'successfully-send' ? (
          <SuccessfullySent
            currencyLabel={MAP_CURRENCY[activeCurrency].label}
            onOk={toggle}
          />
        ) : null}
        {activeModal === 'select-assets' ? (
          <SelectAssets onClose={toggle} onSelect={handleSelectAsset} />
        ) : null}
      </Modal>
    </Container>
  );
};

export default SendAssets;
