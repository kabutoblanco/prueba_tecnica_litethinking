import React from 'react';
import ReactDOM from 'react-dom';

import Routing from './routing/ComposeRouter';

// CONTEXT
import { AuthProvider } from './context';

// THIRD
import { ToastContainer } from 'react-toastify';

// QUERY
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer position='top-right' autoClose={5000} />
        <Routing />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
