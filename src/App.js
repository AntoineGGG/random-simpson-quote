import React from 'react';
import axios from 'axios';
import DisplayQuotes from './components/DisplayQuotes';

const initialQuote = {
  quote:
    'Shoplifting is a victimless crime, like punching someone in the dark.',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
  character: 'Nelson Muntz',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: initialQuote,
    };
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
        <DisplayQuotes quotes={this.state.quote} />
        <button type='button' onClick={this.getQuotes}>
          Get New Quotes
        </button>
      </div>
    );
  }
}

export default App;
