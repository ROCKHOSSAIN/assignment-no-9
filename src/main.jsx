import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import FairRoute from './Route/Route.jsx'
import AuthProvider from './Components/AuthContext/AuthProvider'
import UserContext from './Pages/Dashboard/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
      <RouterProvider router={FairRoute} />
    </AuthProvider>
  </React.StrictMode>,
)
