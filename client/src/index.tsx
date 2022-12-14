import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';
import {StateProvider} from './Redux/StateProvider';
import { reducer } from './Redux/reducer';
import { initialState } from './Redux/initialState';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <StateProvider reducer={reducer} initialState={initialState}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </StateProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
