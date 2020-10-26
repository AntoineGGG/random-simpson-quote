import React from 'react';
import axios from 'axios';
import DisplayQuotes from './components/DisplayQuotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
    };
  }
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes = () => {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          quote: data[0],
        });
      });
  };
  render() {
    return (
      <div className='App'>
        {this.state.quote ? (
          <DisplayQuotes quotes={this.state.quote} />
        ) : (
          <p>Loading for ressources</p>
        )}
        <button type='button' onClick={this.getQuotes}>
          Get New Quotes
        </button>
      </div>
    );
  }
}

export default App;
