import { StrictMode } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import Auth from './auth.jsx';
import Mycomponent from './mycomponent.jsx';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Auth/>
  },{
    path: '/cars',
    element: <Mycomponent/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
