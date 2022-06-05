import { useState } from 'react';

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const hideModal = () => setIsModalVisible(false);

  const toggle = () => setIsModalVisible(!isModalVisible);

  return {
    isModalVisible,
    showModal,
    hideModal,
    toggle,
  };
};

export default useModal;
