import React, { Component } from 'react';
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

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    modalSrc: '',
  };

  apiKey = '38935709-b029574ae436a7c060eaadb25';

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearchSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = src => {
    this.setState({ showModal: true, modalSrc: src });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalSrc: '' });
  };

  render() {
    const { images, isLoading, showModal, modalSrc } = this.state;

    return (
      <AppDiv className="app">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              onClick={() => this.handleImageClick(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && <Modal src={modalSrc} onClose={this.handleCloseModal} />}
      </AppDiv>
    );
  }
}

export default App;
