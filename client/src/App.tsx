import React from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import NavBar from './Features/NavBar';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Features/LoginPage';
import RequireAuthComponent from './Components/RequireAuth';
import MainPage from './Features/MainPage';

const App : React.FC = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-white'>
      <NavBar />
      <main className='mt-36'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<RequireAuthComponent><MainPage /></RequireAuthComponent>} />
        </Routes>
      </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
