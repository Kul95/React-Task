import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
 import Home from './component/Home'
 import About from './component/About'
 import Careers from './component/Careers'
import User1 from './User1';
import NavBar from './component/NavBar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar></NavBar>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Careers' element={<Careers />} />
      <Route path='/User1/:name' element={<User1 />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
