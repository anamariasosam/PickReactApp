import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSearchTermChange(this.state.word)
    event.preventDefault();
  }

  render() {
    return (
      <section className="bg-blue sans-serif center pb5 ph7-l ph4">
        <form onSubmit={this.handleSubmit}>
          <div className="cf measure">
            <input
              className="f6 f5-l bn fl black-80 bg-white pa3 lh-solid w-80 w-75-m w-80-l br2-ns br--left-ns" placeholder="Search Images"
              type="text"
              value={this.state.word}
              onChange={this.handleChange}
            />
            <input
              className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-20 w-25-m w-20-l br2-ns br--right-ns"
              type="submit"
              value="Go"
            />
          </div>
        </form>
      </section>
    );
  }

}
