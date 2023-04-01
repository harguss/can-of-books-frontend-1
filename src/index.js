import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import App from './App.js';

import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,
createRoutesFromElements,
RouterProvider,
Route } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <App />} >
    <Route path="about" element={ <About /> } />
    <Route path="header" element={ <Header /> } />
  </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


