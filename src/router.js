import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Affect from '../src/pages/Affect/Affect'
import credit from '../src/pages/credit/credit'
import HotShop from '../src/pages/HotShop/HotShop'
import Periphery from '../src/pages/Periphery/Periphery'
const RouterList = () => (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route cache path="/Affect" component={Affect}></Route>
        <Route cache path="/credit" component={credit}></Route>
        <Route cache path="/HotShop" component={HotShop}></Route>
        <Route cache path="/Periphery" component={Periphery}></Route>
      </Switch>
    </HashRouter>
);

export default RouterList;