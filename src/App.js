import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'
import Loading from './components/Loading'
import Footer from './components/Footer'

import PACKAGE from '../package.json'
const ENDPOINT = PACKAGE.config.wordToImages[process.env.NODE_ENV]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loadingImages: true,
    };

    this.unsplash('happy')

    this.imageSearch = this.imageSearch.bind(this)
  }

  imageSearch(word) {
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
    const displayImages = this.state.loadingImages ?
      <Loading /> :
      <Gallery images={ this.state.images } />

    return (

      <div className="w-100 sans-serif">
        <Header />
        <SearchBar onSearchTermChange={ this.imageSearch } />
        {displayImages}
        <Footer />
      </div>
    );
  }
}

export default App;
