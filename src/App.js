import React from 'react';
import './App.css';
import About from './components/About';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/partials/Footer';
import styled from "styled-components";


const Styles = styled.div`
  background: #e4f9ff;
`;

function App() {
  return (
    <Styles>
      <div>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div >
    </Styles>
  );
}

export default App;
