import React from 'react';
import { Header, Followers, Overview } from './container';

function App() {
  return (
      <div className='container'>
        <Header />
        <Followers /> 
        <h2 className='heading'>Overview - Today</h2>
        <Overview /> 
      </div>
  );
}

export default App;
