import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const[user,setLoginUser] = useState({});

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element =  { user && user._id ? <Home setLoginUser = {setLoginUser} /> : <Login setLoginUser = {setLoginUser} /> } />
      <Route path = "/login" element = {<Login  setLoginUser = {setLoginUser} />} />
      <Route path = "/register" element = {<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
