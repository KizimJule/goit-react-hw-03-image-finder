import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
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

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.name.trim() === '') {
      toast.error('Please, enter the word');
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
