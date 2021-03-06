import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then(data => setState(data));
  }, []);

  return (
    <>
      <Header {...state}>
        <About {...state} />
      </Header>
      <Profile {...state} />
      <Experience {...state} />
      <div className='App-container'>
        <Academic {...state} />
        <Skills {...state} />
      </div>
      <div className='App-container'>
        <Interest interest={state.interest} />
        <Languages languages={state.languages} />
      </div>
    </>
  );
};

export default App;
