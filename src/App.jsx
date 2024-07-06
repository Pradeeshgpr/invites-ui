import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Offering from './pages/offering';


const router = createBrowserRouter([{
  path: '/',
  element: <Home/>
}, {
    id: 'offering',
    path: '/offering',
    element: <Offering/>
  }])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
