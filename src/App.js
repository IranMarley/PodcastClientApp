import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <div className='page-container'>
      <Navigation />
      <Header />
      <MainPage />      
    </div>
  );
}

export default App;