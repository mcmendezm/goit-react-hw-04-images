import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemGallery = styled.li`
  margin: 2px;
  list-style-type: none;
  & img {
    width: 300px;
    height: 200px;
  }
`;

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <ItemGallery className="gallery-item">
    <img src={webformatURL} alt="" onClick={() => onClick(largeImageURL)} />
  </ItemGallery>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
