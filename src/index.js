import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ScanQRcode from './scanQRcode/scanQRcode';


ReactDOM.render(
    <ScanQRcode/>,
  document.getElementById('root')
);