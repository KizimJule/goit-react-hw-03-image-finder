import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// import '../styles.css';
import * as SC from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imgList: [],
    name: '',
    page: 1,
    loading: false,
    id: '',
    webformatURL: '',
    largeImageURL: '',
    showModal: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
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

  //   componentDidMount() {
  //     fetch(
  //       'https://pixabay.com/api/?q={this.state.name}&page={this.state.page}&key=30025570-88047e109e19df2adec6469b3&image_type=photo&orientation=horizontal&per_page=12'
  //     )
  //       .then(res => res.json())
  //       .then(console.log);
  //   }
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
