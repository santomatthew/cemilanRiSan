import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'

import Index from '../src/pages/index';
import AboutUs from './pages/AboutUS';
import Login from './component/auth/FormPage'
import CreateRecipe from './component/crud/Create'
import UpdateRecipe from './component/crud/Update'
import Details from './pages/Details'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Index />}>
            </Route>
            <Route path ="/aboutUs" element={<AboutUs/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/addrecipe" element={<CreateRecipe/>}/>
            <Route path ="/editrecipe/:id" element={<UpdateRecipe/>}/>
            <Route path ="/details/:id" element={<Details/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
