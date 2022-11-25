import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import AddPodcast from "./Components/AddPodcast";
import ListPodcast from "./Components/ListPodcast";

import './App.css';

// import Header from "./Components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route element = {<Login></Login>} path="/"  />
          <Route element = {<Login></Login>} path="login"  />
          <Route element = {<Register></Register>} path = "register" />
          <Route element = {<AddPodcast />} path="addpodcast"  />
          <Route element = {<ListPodcast />} path="listPodcast"  />
        


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
