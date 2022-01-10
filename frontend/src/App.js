import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'

import Index from '../src/pages/Index';
import AboutUs from './pages/AboutUS';
import Login from './component/auth/FormPage'
import CreateRecipe from './component/create/Create'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Index />}>
            </Route>
            <Route path ="/aboutUs" element={<AboutUs/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/newrecipe" element={<CreateRecipe/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
