import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserRouter,
// createRoutesFromElements,
// RouterProvider,
// Route } from 'react-router-dom';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={ <App />} >
//     <Route path="/About" element={ <About /> } />
//   </Route>
//   )
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 

