import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateFact = ({ createCatFact }) => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [fact, setFact] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (author && fact) {
      const data = { author, fact };
      dispatch(createCatFact(data));
    } else {
      setError('Please fill form details');
    }
  };
  return (
    <div className='create-fact-container'>
      <div className='create-form-container'>
        <label className='create-fact-label'>Add cat fact</label>
        <input
          type='text'
          placeholder='Author'
          className='create-fact-input'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder='Fact'
          rows={5}
          cols={5}
          className='create-fact-text'
          onChange={(e) => setFact(e.target.value)}
        />
        {error && <div>{error}</div>}
        <button className='add-cat-btn' onClick={handleSubmit}>
          Add cat fact
        </button>
      </div>
    </div>
  );
};

export default CreateFact;
