import React from 'react';

function DisplayQuotes({ quotes }) {
  return (
    <div className='DisplayQuotes'>
      <img src={quotes.image} alt='a random simpson' />
      <p>{quotes.character}</p>
      <p>
        <em>{quotes.quote}</em>
      </p>
    </div>
  );
}
export default DisplayQuotes;
