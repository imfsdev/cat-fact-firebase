import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import ReadFact from './components/CatFact/ReadFact';
import CreateFact from './components/CatFact/CreateFact';
import { createCatFact,getCatFact } from './actions/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatFact());
  }, []);
  
  const cats = useSelector((state) => state.cat.cats);  
  return (
    <div className='App'>
      <Header />
      <ReadFact cats={cats}/>
      <CreateFact createCatFact={createCatFact}/>
    </div>
  );
}

export default App;
