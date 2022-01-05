import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import Index from '../src/pages/index';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Index />}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
