import React from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Affect from '../src/pages/Affect/Affect'
import credit from '../src/pages/credit/credit'
import HotShop from '../src/pages/HotShop/HotShop'
import Periphery from '../src/pages/Periphery/Periphery'
const RouterList = () => (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Affect" component={Affect}></Route>
        <Route exact path="/credit" component={credit}></Route>
        <Route exact path="/HotShop" component={HotShop}></Route>
        <Route exact path="/Periphery" component={Periphery}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </HashRouter>
);

export default RouterList;