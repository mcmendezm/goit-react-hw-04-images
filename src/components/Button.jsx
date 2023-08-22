import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ButtonLoad = styled.button`
  background-color: #77dd77;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  font-size: 15px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
  &:hover {
    background-color: #b0f2c2;
  }
`;

const Button = ({ onClick }) => (
  <ButtonLoad className="load-more-button" onClick={onClick}>
    Load More
  </ButtonLoad>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
