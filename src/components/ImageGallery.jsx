import React from 'react';
import styled from 'styled-components';

const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageGallery = ({ children }) => (
  <Gallery className="gallery">{children}</Gallery>
);

export default ImageGallery;
