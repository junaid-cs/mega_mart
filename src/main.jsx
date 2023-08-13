import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/Navbar/Navbar.jsx'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import store from './store/Store'
import Cartitems from './component/Cartitem/Cartitems.jsx'
// import Data from './reducer/Data'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <App />} />
          <Route path='cartitem' element={
            <Cartitems />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
