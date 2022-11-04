import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Button/Button';

export class App extends Component {
  state = {
    name: '',
    loading: false,
    page: 1,
    perPage: 12,
    pictures: [],
    error: null,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '30025570-88047e109e19df2adec6469b3',
  };

  handleFormSubmit = name => {
    if (this.state.name === name) {
      toast.error('You enter the same word!!! Enter new one!!!', {
        theme: 'colored',
      });
    }
    this.setState({ name });
  };

  fetchPictures = name => {
    const { apiUrl, apiKey, page, perPage } = this.state;
    return (
      axios
        .get(
          `${apiUrl}/?key=${apiKey}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
        )
        // .then(response => {
        //   if (response.ok) {
        //     return response.json();
        //   }
        //   return Promise.reject(
        //     new Error(`No images with name "${this.state.name}"`)
        //   );
        // })
        .catch(error => {
          this.setState({ error });
          toast.error(`${error}`, {
            theme: 'colored',
          });
        })
    );
  };

  async searchArticles() {
    const { name } = this.state;
    this.setState({ loading: true, pictures: [] });
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

  loadMoreImages = () => {
    console.log(this.state.page);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;

    if (name !== prevState.name) {
      this.searchArticles();
    }
  }

  render() {
    const { pictures, loading } = this.state;
    const { name } = this.props;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: 20,
        }}
      >
        <Searchbar onSubmitForm={this.handleFormSubmit} />

        {!name && !loading && <p>Введите название картинки</p>}

        {pictures.length > 0 && <ImageGallery pictures={this.state.pictures} />}

        {loading && <Loader loading={loading} />}

        {pictures.length === 12 && (
          <Button title="Load more" onClick={this.loadMoreImages} />
        )}

        {/* <Modal/> */}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
