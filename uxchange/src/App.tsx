import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Switch } from 'react-router';
import HomePage from './Pages/HomePage/HomePage';
import Operations from './Pages/Operations/Operations';
import MarketPlace from './Pages/MarketPlace/MarketPlace';
import MyItems from "./Pages/MyItems/MyItems";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import CreateIpost from "./Pages/CreateIpost/CreateIpost";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/Home" component={HomePage} />
        <Route path="/Operations" component={Operations} />
        <Route path="/My items" component={MyItems} />
        <Route path="/Create Ipost" component={CreateIpost} />
        <Route path="/Market place" component={MarketPlace} />
        <Route path="/Login" component={Login} />
        <Route path="/Sign up" component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;