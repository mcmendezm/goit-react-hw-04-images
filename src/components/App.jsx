import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState('');

  const apiKey = '38935709-b029574ae436a7c060eaadb25';

  const fetchImages = useCallback(() => {
    if (query !== '') {
      setIsLoading(true);

      axios
        .get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => {
          setImages(prevImages => [...prevImages, ...response.data.hits]);
        })
        .catch(error => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [apiKey, query, page]);

  useEffect(() => {
    if (query !== '') {
      fetchImages();
    }
  }, [query, fetchImages, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = src => {
    setShowModal(true);
    setModalSrc(src);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalSrc('');
  };

  return (
    <AppDiv className="app">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClick={() => handleImageClick(image.largeImageURL)}
          />
        ))}
      </ImageGallery>
      {isLoading && <Loader />} {/* Import and use Loader here */}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal src={modalSrc} onClose={handleCloseModal} />}
    </AppDiv>
  );
};

export default App;
