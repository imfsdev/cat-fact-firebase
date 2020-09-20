import React from 'react';

const ReadFact = ({ cats }) => {
  return (
    <div className='read-fact-container'>
      {!cats && <div>Please add cat fact using following form</div>}
      {cats &&
        cats.map((cat) => {
          return <div className="cat-fact-item">{cat.fact}</div>;
        })}
    </div>
  );
};

export default ReadFact;
