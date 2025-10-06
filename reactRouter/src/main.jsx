import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Profiles from './profilespage.jsx'
import NotFound from './notFoundPage.jsx'
import Profile from './profile.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <NotFound/>,
},
{
  path:'/profiles',
  element: <Profiles/>,
  children: [
    {
  path: '/profiles/:profileId',
  element: <Profile/>
}
  ]
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
