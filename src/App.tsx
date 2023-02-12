import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authTest } from './actions/auth';
import './App.css';
import { AppDispatch } from './store';
import { RootState } from './store/reducer';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { authData } = useSelector((state: RootState) => state.auth);
  console.log('authData:', authData);

  useEffect(() => {
    dispatch(authTest());
  }, [dispatch]);

  return <div>youngbinTV</div>;
}

export default App;
