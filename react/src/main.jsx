import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from 'react-toastify';

import { persistor, store } from './redux/store/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <PersistGate persistor={persistor}> 
    <div className='container'>
      <ToastContainer position="top-right" />
      <App />
    </div>
   </PersistGate>
  </Provider>
  ,
)
