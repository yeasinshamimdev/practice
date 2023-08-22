import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import NotFound from './NotFound.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Products from './components/Products.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
