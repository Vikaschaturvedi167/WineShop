import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Rout from './rout';

const App=()=> {
  return (
    <>
      <BrowserRouter>
      <Rout/>
        </BrowserRouter>
    </>
  );
}

export default App;
