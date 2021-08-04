import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Switch } from 'react-router';
import { HomePage } from './Pages/HomePage/HomePage';
import { Operations } from './Pages/Operations/Operations';
import { MyItems } from './Pages/MyItems/MyItems';
import { MarketPlace } from './Pages/MarketPlace/MarketPlace';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/operations" component={Operations} />
        <Route path="/My items" component={MyItems} />
        <Route path="/Market place" component={MarketPlace} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;