import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar'
import './index.css';
import KVQRcodeAnalysis from './KVQRcodeAnalysis/KVQRcodeAnalysis'


ReactDOM.render(
    <KVQRcodeAnalysis/>,
  document.getElementById('root')
);