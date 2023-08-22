import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalDivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
const ModalDiv = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  & img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  }
`;

const Modal = ({ src, onClose }) => (
  <ModalDivOverlay className="overlay" onClick={onClose}>
    <ModalDiv className="modal">
      <img src={src} alt="" />
    </ModalDiv>
  </ModalDivOverlay>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
