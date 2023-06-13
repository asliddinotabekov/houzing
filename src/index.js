import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './context';
import './index.css';
import Root from './root';
import 'antd/dist/antd'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Root/>
  </Context>
);

