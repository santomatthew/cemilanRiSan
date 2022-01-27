import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "../src/pages/index";
import AboutUs from "./pages/AboutUS";
import Login from "./component/auth/FormPage";
import CreateRecipe from "./component/crud/Create";
import UpdateRecipe from "./component/crud/Update";
import Details from "./pages/Details";
import Profile from "./component/crud/Read";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/addrecipe" element={<CreateRecipe />} />
          <Route path="/editrecipe/:id" element={<UpdateRecipe />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
