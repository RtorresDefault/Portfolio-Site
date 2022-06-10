//import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import {Navbar} from './components/navbar';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Project} from './pages/project';
import {Skill} from './pages/skill';
import {Footer} from './components/footer';
import ScrollTop from './components/scroll-top';

import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skill/>
      <Footer/>
      <ScrollTop/>
    </>
  );
}

export default App;
