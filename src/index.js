import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import CountDown from './components/countDown';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="countDown" element={<CountDown />} />
        </Routes>
      </Router>
    </Provider>
  </>
);

