import React from 'react'
//import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import WebDesign from './components/WebDesign';
import AppDesign from './components/AppDesign'
import HomeMain from './components/HomeMain';
import GraphicDesign from './components/GraphicDesign'

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
