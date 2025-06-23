import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {options} from './data';
import './interfaces';
import {routes} from './routes';
const App: React.FC = () => {
  
  return (
    <>
    <Navbar options={options} />
    <Router>
      <Routes>
        {routes?.map((route: ElementRoute)=>{
          return <Route key={route.id} path={route.path} element={route.element}/>
        })}
      </Routes>
    </Router>
    </>
  );
}

export default App;
