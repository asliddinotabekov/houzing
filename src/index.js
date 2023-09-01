import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import 'antd/dist/antd'
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient
root.render(
  <QueryClientProvider client={queryClient}>

    <Root />
  </QueryClientProvider>
);

