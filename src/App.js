import React from 'react'

import Navbar from './components/NavBar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import WebDesign from './components/WebDesign/WebDesign';
import AppDesign from './components/AppDesign/AppDesign'
import HomeMain from './components/MainSection/HomeMain';
import GraphicDesign from './components/GraphicDesign/GraphicDesign'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path="/webDesign" element={<WebDesign />}>
            
          </Route>
          <Route exact path="/appDesign" element={<AppDesign />}>

          </Route>
          <Route exact path="/graphicDesign" element={<GraphicDesign />}>

          </Route>
          <Route exact path='/' element={<HomeMain/>}>
    
          </Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
