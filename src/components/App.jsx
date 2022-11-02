import React, { Component } from 'react';
import './App.css';

// import axios from 'axios';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Button/Button';

export class App extends Component {
  state = {
    name: '',
    isLoaded: false,
    articles: [],
  };

  //
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=30025570-88047e109e19df2adec6469b3&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(console.log);
  }

  handleFormSubmit = name => {
    this.setState({ name });
    console.log(name);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGallery />
        {/* <ImageGalleryItem /> */}
        {/* <Loader /> */}
        {/* <Button /> */}
        {/* <Modal/> */}
      </div>
    );
  }
}
