import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './route/route.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.ts'
import AuthProvider from './Provider/AuthProvider.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <Provider store={store}>
     <AuthProvider>
     <Toaster></Toaster>
 <RouterProvider router={router} />
 </AuthProvider>
 </Provider>
  </React.StrictMode>,
)
