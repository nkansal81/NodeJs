import React from 'react';
import './App.css';
import MainPage from './components/main/MainPage';
import Inventory from './components/Inventory/Inventory';

function App () {
  return (
    <React.Fragment>
      <Inventory/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
