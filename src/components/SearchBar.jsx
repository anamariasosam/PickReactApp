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
      <section className="bg-gold mw9 center pa4 ph7-l">
        <form className="black-80" onSubmit={this.handleSubmit}>
          <div className="measure">
            <input
              className="input-reset ba b--black-20 pa2 db w-100" type="text"
              placeholder="Search"
              value={this.state.word}
              onChange={this.handleChange }
            />
          </div>
        </form>
      </section>
    );
  }

}
