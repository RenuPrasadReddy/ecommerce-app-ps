import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Intro from './components/Intro';
import Nav from './components/Nav';
import './css/index.css';

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
