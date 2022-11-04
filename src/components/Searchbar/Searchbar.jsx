import axios from 'axios';
import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// import '../styles.css';
import * as SC from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    name: '',
    page: 1,
    perPage: 12,
    loading: false,
    pictures: [],
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '30025570-88047e109e19df2adec6469b3',
  };

  // fetchPictures = evt => {
  //   this.setState({ [evt.target.name]: evt.target.value }, () => {
  //     axios
  //       .get(
  //         `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${this.state.perPage}`
  //       )
  //       .then(res => this.setState({ pictures: res.data.hits }))
  //       .catch(err => console.log(err));
  //   });
  // };

  handleSubmit = evt => {
    evt.preventDefault();

    // this.setState({ [evt.target.name]: evt.target.value }, () => {
    //   axios
    //     .get(
    //       `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${this.state.perPage}`
    //     )
    //     .then(res => this.setState({ pictures: res.data.hits }))
    //     .catch(err => console.log(err));
    // });

    if (this.state.name.trim() === '') {
      alert('bbbbbb');
      return;
    }

    this.props.onSubmitForm(this.state.name);
    this.setState({ name: '' });
  };

  handleInputChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({ name: value.toLowerCase() });
  };

  render() {
    // console.log(this.state.pictures);
    return (
      <SC.Searchbar>
        <SC.Form onSubmit={this.handleSubmit}>
          <SC.SearchFormButton type="submit">
            <SC.SearchFormButtonLabel className="button-label">
              <BiSearch style={{ width: 30, height: 30 }} />
            </SC.SearchFormButtonLabel>
          </SC.SearchFormButton>

          <SC.SearchFormInput
            onChange={this.handleInputChange}
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SC.Form>
      </SC.Searchbar>
    );
  }
}
