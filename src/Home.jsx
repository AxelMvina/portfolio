import React from 'react';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import '../src/assets/css/Home.css';
import { Parallax } from 'react-scroll-parallax';


function App() {


  return (
    <div className="App">
      <Parallax speed={-10}>
        <Header />
      </Parallax>
      <Parallax speed={0}>
        <About/>
      </Parallax>
      <Parallax speed={-10}>
        <Header/>
      </Parallax>
    </div>
  );
}

export default App;
