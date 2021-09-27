import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import NewsPage from './screens/NewsPage.js'
import HomePage from './screens/HomePage.js'
import ContactPage from './screens/ContactPage.js'
import TournamentPage from './screens/TournamentPage.js'
import NavBox from './components/NavBox.js'
import NotFound from './screens/NotFound.js'
import AuctionPage from './screens/AuctionPage.js'
import Voting from './kill_me/Voting';

import { useState, useEffect } from 'react';

import logo from './images/Logo SU sygnet.svg';
import logotype from './images/logotyp su.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";


const NavBareczek = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={logo} className="su-logo" />
        <img src={logotype} className="su-logotype" />
      </div>
      <div className="nav-scroll">
        <NavStyledBox label={"Strona Główna"} to={"/"} activeOnlyWhenExact={true} />
        <NavStyledBox label={"Aktualności"} to={"/news"} />
        <NavStyledBox label={"Kiermasz"} to={"/kiermasz"} />
        {/* <NavStyledBox label={"Głosowanie"} to={"/glosowanie"} /> */}
        {/* <NavStyledBox label={"Aukcje"} to={"/auctions"} /> */}
        <NavStyledBox label={"Kontakt"} to={"/contact"} />
      </div>
    </div>
  );
}


export default function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <NavBareczek />
            <div className='perma-spacer' />
            <HomePage />
            <div className='perma-spacer' />
            <Footer bottom={false} />
          </Route>
          <Route path="/news">
            <NavBareczek />
            <div className='perma-spacer' />
            <NewsPage />
            <div className='perma-spacer' />
            <Footer bottom={true} />
          </Route>
          <Route path="/glosowanie">
            <Voting />
          </Route>
          <Route path="/kiermasz">
            <NavBareczek />
            <div className='perma-spacer' />
            <AuctionPage />
            <div className='perma-spacer' />
          </Route>
          <Route path="/contact">
            <NavBareczek />
            <div className='perma-spacer' />
            <ContactPage />
            <div className='perma-spacer' />
            <Footer bottom={false} />
          </Route>
          {/* <Route path="/auctions">
            <div className='perma-spacer' />
            <AuctionPage />
            <div className='perma-spacer' />
            <Footer />
          </Route> */}
          <Route path="*">
            <NavBareczek />
            <div className='perma-spacer' />
            <NotFound />
            <div className='perma-spacer' />
            <Footer bottom={false} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function NavStyledBox({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  let color = match ? { color: "#f58f0b" } : { color: "#333333" };

  return (
    <Link to={to}><NavBox text={label} color={color} /></Link>
  );
}