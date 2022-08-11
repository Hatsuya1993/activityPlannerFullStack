import React, { useEffect } from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import NavBar from './Features/NavBar';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Features/LoginPage';
import RequireAuthComponent from './Components/RequireAuth';
import MainPage from './Features/MainPage';
import { useStateValue } from './Redux/StateProvider';
import { getAllFoodAndDrinks } from './Utils/fetchYelpApi';
import { actionType } from './Redux/reducer';
import DetailsPage from './Features/DetailsPage';

const App : React.FC = () => {
  const [{}, dispatch] = useStateValue()
  const fetchFoodAndDrinks = async () => {
    dispatch({
      type: actionType.SET_LOADING,
      loading: true
    })
    const data = await getAllFoodAndDrinks()
    dispatch({
      type: actionType.SET_FOOD_AND_DRINKS,
      foodAndDrinks: data
    })
    dispatch({
      type: actionType.SET_CURRENT_PLAN,
      currentPlan: data
  })
    dispatch({
      type: actionType.SET_LOADING,
      loading: false
    })
  }
  useEffect(() => {fetchFoodAndDrinks()}, [])
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-white'>
      <NavBar />
      <main className='mt-36'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<RequireAuthComponent><MainPage /></RequireAuthComponent>} />
          <Route path='/detail' element={<RequireAuthComponent><DetailsPage /></RequireAuthComponent>} />
        </Routes>
      </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
