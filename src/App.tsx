import React from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <div className='h-96'></div>
    </React.Fragment>
  );
}

export default App;
