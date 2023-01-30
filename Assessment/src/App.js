import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Calc from './components/Calculator/Calc';

function App() {

  const[user,setLoginUser] = useState({});

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element =  { user && user._id ? <Calc setLoginUser = {setLoginUser} /> : <Login setLoginUser = {setLoginUser} /> } />
      <Route path = "/login" element = {<Login  setLoginUser = {setLoginUser} />} />
      <Route path = "/register" element = {<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
