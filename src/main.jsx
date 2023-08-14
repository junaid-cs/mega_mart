// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Navbar from './component/Navbar/Navbar.jsx';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { store, persistor } from './store/Store.jsx'; // Import both store and persistor
import { PersistGate } from 'redux-persist/integration/react';
import Cartitems from './component/Cartitem/Cartitems.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='cartitem' element={<Cartitems />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
