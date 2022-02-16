import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginPage from "./components/main/login";
import Inventory from './components/Inventory/Inventory';
import Cart from './components/Cart/Cart';
import Counter from './components/Counter/Counter';
import Register from "./components/main/register";

function App(){
	return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<Register/>}></Route>
            <Route exact path='/login' element={< LoginPage />}></Route>
            <Route exact path='/inventory/:token' element={< Inventory />}></Route>
            <Route exact path='/cart' element={< Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

