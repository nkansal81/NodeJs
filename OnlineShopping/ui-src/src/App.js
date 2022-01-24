import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Register from './components/main/register';
import LoginPage from "./components/main/login";
import Inventory from './components/Inventory/Inventory';
import Cart from './components/Cart/Cart';
// import PostsContainer from "./components/Post/PostsContainer";

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

