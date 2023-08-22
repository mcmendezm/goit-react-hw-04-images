import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppHeader = styled.header`
  background-color: #b2e2f2;
  border: 2px solid #b2e2f2;
  border-radius: 5px;
  color: black;
  padding: 30px;
  box-shadow: 5px 5px 5px 0px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AppInput = styled.input`
  padding: 10px;
  margin-left: 20px;
  width: 200px;
  border-radius: 5px;
  border: none;
`;
const AppButton = styled.button`
  background-color: #77dd77;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  border: none;
  &:hover {
    background-color: #b0f2c2;
  }
`;

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <AppHeader>
        <form className="form" onSubmit={this.handleSubmit}>
          <AppButton type="submit" className="button">
            <span className="button-label">Buscar</span>
          </AppButton>

          <AppInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </AppHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
