import React from 'react';
import Header from './Components/Header.jsx';
import '../src/assets/css/Home.css';
import ImgBack from './assets/Images/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg';

function App() {
  return (
    <div className="App">
      <img src={ImgBack} alt="image abstrait back" className='App_ImgBack'/>
      <Header/>
    </div>
  );
}

export default App;
