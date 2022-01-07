import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import Index from '../src/pages/Index';
import AboutUs from './pages/AboutUS';
// import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Index />}>
            </Route>
            <Route path ="/aboutUs" element={<AboutUs/>}/>
            {/* <Route path ="/login" element={<Login/>}/> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
