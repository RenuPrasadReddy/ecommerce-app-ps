import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import React from 'react';

import Cart from './components/Cart';
// const Cart = React.lazy(() => './components/Cart');

import Intro from './components/Intro';
// const Intro = React.lazy(() => './components/Intro');

import Nav from './components/Nav';
// const Nav = React.lazy(() => './components/Nav');

function App() {
  return (
    <Router>
        <Nav />
        <div>
          <Routes>
            <Route path='/' exact element={<Intro />} />
            <Route path='/home' exact element={<Intro />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </div>

      </Router>
  );
}

export default App;
