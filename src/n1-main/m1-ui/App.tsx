import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './common/login/login';
import NewPassword from "./common/new-password/new-password";
import PasswordRecovery from "./common/password-recovery/password-recovery";
import Profile from "./common/profile/profile";
import Registration from "./common/registration/registration";
import {Navbar} from "./common/navbar/navbar";
import LoginContainer from "./common/login/loginContainer";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Route exact  path={'/'} render={()=> <div><h1>Home page</h1></div> }/>
      <Route  path={'/new-password'} render={()=> <NewPassword/> }/>
      <Route  path={'/password-recovery'} render={()=> <PasswordRecovery/> }/>
      <Route  path={'/profile'} render={()=> <Profile/> }/>
      <Route  path={'/registration'} render={()=> <Registration/> }/>
      <Route  path={'/login'} render={()=> <LoginContainer/> }/>
    </div>
  );
}

export default App;
