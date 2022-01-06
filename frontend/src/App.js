import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import Index from '../src/pages/index';
import AboutUs from './pages/AboutUS';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Index />}>
            </Route>
            <Route path ="/aboutUs" element={<AboutUs/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
