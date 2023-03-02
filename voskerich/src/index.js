import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderScroll from './Components/Header/HeaderScroll';
import Content from './Components/Content/Content';
import Category from './Components/Content/Category';
import Footer from './Components/Footer/Footer';
import GoldsRouter from './Routes/GoldsRouter';
import Loyaout from './Routes/Loyaout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loyaout />}></Route>
          <Route path="/Golds" element={<GoldsRouter />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
