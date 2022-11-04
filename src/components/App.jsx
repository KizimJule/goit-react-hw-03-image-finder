import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Button/Button';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '30025570-88047e109e19df2adec6469b3';
// let perPage = 12;
// let page = 1;

export class App extends Component {
  state = {
    name: '',
    loading: false,
    page: 1,
    perPage: 12,
    pictures: [],
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '30025570-88047e109e19df2adec6469b3',
  };

  handleFormSubmit = name => {
    this.setState({ name });
  };

  fetchPictures = name => {
    return axios.get(
      `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${this.state.perPage}`
    );
  };

  async searchArticles() {
    const { name } = this.state;
    this.setState({ loading: true });

    try {
      const { data } = await this.fetchPictures(name);

      this.setState({
        pictures: data.hits,
        error: null,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;
    if (name !== prevState.name) {
      this.searchArticles();
    }
  }

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

        <ImageGallery pictures={this.state.pictures} />
        {/* <Loader /> */}
        {/* <Button /> */}
        {/* <Modal/> */}
      </div>
    );
  }
}
