import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'

import PACKAGE from '../package.json'
const ENDPOINT = PACKAGE.config.wordToImages[process.env.NODE_ENV]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loadingImages: false,
    };

    this.imageSearch = this.imageSearch.bind(this)
  }

  async imageSearch(word) {
    this.setState({
      images: [],
      loadingImages: true,
    })

    this.unsplash(word)
  }

  unsplash(word) {
    axios.get(
      `${ENDPOINT}/unsplash/`, {
      params: { word }
    })
    .then(res => this.handleImagesResponse(res.data))
    .catch(function (error) {
      console.log(error);
    });
  }

  handleImagesResponse(images) {
    this.setState({
      images: this.state.images.concat(images),
      loadingImages: false,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar onSearchTermChange={ this.imageSearch } />
        <Gallery images={ this.state.images } />
      </div>
    );
  }
}

export default App;
