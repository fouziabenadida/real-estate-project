import React from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import routes from './Routes/Routes';



function App() {
  return (
    <>
      <div className="Container">
        <Navbar />
        <Routes>
          {
            routes.map((item, index) => <Route path={item.path} element={item.component} key={index}></Route>)
          }
        </Routes>
       <Footer/>
      </div>
    </>
  );
}

export default App;
